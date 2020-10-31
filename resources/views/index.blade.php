<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}"> 
    <title>Laravel</title>
    <!-- Icons --> 
    <link href="{{asset('images/apple-touch-icon.png')}}" rel="apple-touch-icon" sizes="180x180">{{--
    <link href="{{asset('images/favicon.png')}}" rel="icon" sizes="16x16" type="image/png">  
    <link href="{{asset('images/favicon-32x32.png')}}" rel="icon" sizes="32x32" type="image/png">
    --}}
    <link href="{{asset('favicon.ico')}}" rel="icon" sizes="32x32">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/fontawesome-free-5/css/all.min.css') }}" rel="stylesheet">
</head>

<body>
    <!-- React root DOM -->
    <div id="app" class="page-container">
    </div>
    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>