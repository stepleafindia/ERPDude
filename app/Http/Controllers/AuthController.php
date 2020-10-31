<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;

class AuthController extends Controller
{
    /**
     * Login User
     */
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        $remember=$request->remember_me?true:false;
        $credentials = request(['username', 'password']);

        /* Response Failed to Authendicate */
        if(!Auth::attempt($credentials,$remember)) 

            return response()->json([
                'success'=>false,
                'message' => 'Invalid Username or Password!'
            ], 200);


        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;

        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);

        $token->save(); 

        /*
        $companyDetails=\App\Company::selectRaw('companies.name,companies.contact_number,companies.alter_contact_number,companies.email,companies.website,companies.address,companies.gstin,companies.pin_code,countries.name as country_name,states.name as state_name,companies.logo')
                                    ->join('countries','countries.id','=','companies.country_id')
                                    ->join('states','states.id','=','companies.state_id')
                                    ->where('companies.id',1)->first();
        */

        return response()->json([
            'success' => true,
            'user_data'=>[
                'id' => $user->id,
                'name' => $user->first_name,
                'email' => $user->email,
                'username' => $user->username,
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString()
            ]
        ]);

    }

    
    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'success' => true,
            'message' => 'Successfully logged out'
        ]);
    }


    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }


}
