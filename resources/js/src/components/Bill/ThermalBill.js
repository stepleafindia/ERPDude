import React from 'react';
import './thermal-bill.css';

export default function ThermalBill(props) {
    let totalQuantity=0;
    let totalIGST=0;
    let totalSGST=0;
    let totalCGST=0;
    let totalDiscount=0;
    let totalGrossValue=0;
    let netAmount=0;

    return(
        <div className="bill-page" id="thermalBill">
           <div className="bill-header">
                <h1 className="page-header">{props.data.bill_setting.vendor_name}</h1>
                <p className="bill-address">{props.data.bill_setting.address_1}</p>
                {props.data.bill_setting.address_2?
                    <p className="bill-address">{props.data.bill_setting.address_2}</p>
                    :<></>}
                <p className="bill-contact-no">PHONE : {
                (props.data.bill_setting.phone_1 && props.data.bill_setting.phone_2)?
                (props.data.bill_setting.phone_1+", "+props.data.bill_setting.phone_2):
                props.data.bill_setting.phone_1
                }</p>
                {props.data.bill_setting.gstin?(<p className="bill-gst-no">GSTIN : {props.data.bill_setting.gstin}</p>):<></>}
           </div>
                   
           <div className="bill-body">
                <hr className="header-row" />
                <table className="bill-header-table" width="100%">
                    <tbody>
                    <tr>
                        <th>BILL NO : {props.data.bill_no}</th>
                        <th>DATE : {props.data.bill_date}</th>
                    </tr>
                    </tbody>
                </table>  
                <hr className="header-row" />

                <table className="bill-summary-table">
                    <thead>
                        <tr>                            
                           <th>Item</th>
                           <th>Qty</th>
                           <th>Price</th>
                           <th>Amt</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.data.billItems.map((value,index)=>{  
                        value.quantity=parseFloat(value.quantity);
                        totalQuantity+=value.quantity;
                        value.selling_price=parseFloat(value.selling_price);
                        let grossAmount=value.quantity*value.selling_price;
                        grossAmount=Math.ceil(grossAmount*100)/100;                        
                        totalGrossValue+=grossAmount;

                        value.discount_percentage=value.discount_percentage?parseFloat(value.discount_percentage):0;
                        let discount=grossAmount*(value.discount_percentage/100);
                        discount=Math.ceil(discount*100)/100; 
                        totalDiscount+=discount;

                        let unitAmount=grossAmount-discount;
                        value.igst=value.igst?parseFloat(value.igst):0;          
                        value.sgst= value.sgst? parseFloat(value.sgst):0;
                        value.cgst= value.cgst? parseFloat(value.cgst):0;              
                           
                        if(props.data.gstType=="sgst"){
                          let sgstValue= unitAmount*(value.sgst/100);
                          sgstValue=Math.ceil(sgstValue*100)/100; 
                          totalSGST+=sgstValue;

                          let cgstValue= unitAmount*(value.cgst/100);
                          cgstValue=Math.ceil(cgstValue*100)/100;  
                          totalCGST+=cgstValue;         
                        }else{
                          let igstValue= unitAmount*(value.igst/100);
                          igstValue=Math.ceil(igstValue*100)/100; 
                          totalIGST+=igstValue;
                        } 
                        if(props.data.billItems.length==(index+1)){
                            netAmount=(totalGrossValue-totalDiscount)+(totalSGST+totalCGST+totalSGST);
                        }

                return (<tr key={index}>
                            <td>{value.product_name}</td>
                            <td>{value.quantity+" "+value.unit_code}</td>
                            <td>{value.selling_price}</td>
                            <td>{grossAmount.toFixed(2)}</td>
                        </tr>)
                    })}                     
                      
                    </tbody>
                    </table>
                    <hr className="header-row" />
                    <table className="bill-footer-table" width="100%">
                    <tfoot>
                        <tr>
                            <th>SUB TOTAL :</th>
                            <td>{totalQuantity}</td>
                            <td></td>
                            <td>{totalGrossValue.toFixed(2)}</td>
                        </tr> 
                        <tr className="bordered-row">
                            <th></th>
                            <td></td>
                            <th>DISCOUNT :</th>
                            <td>{totalDiscount.toFixed(2)}</td>
                        </tr>
                        {totalSGST?
                        <tr className="bordered-row">
                            <th></th>
                            <td></td>
                            <th>SGST:</th>
                            <td>{totalSGST.toFixed(2)}</td>
                        </tr>:<></>}                        
                        {totalCGST?
                        <tr className="bordered-row">
                            <th></th>
                            <td></td>
                            <th>CGST:</th>
                            <td>{totalCGST.toFixed(2)}</td>
                        </tr>:<></>}
                        {totalIGST?
                        <tr className="bordered-row">
                            <th></th>
                            <td></td>
                            <th>IGST:</th>
                            <td>{totalIGST.toFixed(2)}</td>
                        </tr>:<></>}
                        <tr className="bordered-row">
                            <th></th>
                            <td></td>
                            <th>NET AMNT:</th>
                            <td>{props.data.totalNetAmount}</td>
                        </tr>
                        { (props.data.roundOff!=props.data.totalNetAmount)?
                        <tr className="bordered-row">
                            <th></th>
                            <td></td>
                            <th>RND OF:</th>
                            <td>{props.data.roundOff}</td>
                        </tr>:<></>}
                        { (props.data.checkOut.payment_option)?
                        (<tr className="bordered-row">
                            <th></th>
                            <td></td>
                            <th>PAY TYPE :</th>
                            <td><b>{props.data.checkOut.payment_option}</b></td>
                        </tr>):<></>}  

                        { (props.data.checkOut.paid_by_cash)?
                        (<tr className="bordered-row">
                            <th></th>
                            <td></td>
                            <th>PAID :</th>
                            <td><b>{props.data.checkOut.paid_by_cash}</b></td>
                        </tr>):<></>}

                        { (props.data.checkOut.remain_balance)?
                        (<tr className="bordered-row bordered-bottom">
                            <th></th>
                            <td></td>
                            <th>BALANCE :</th>
                            <td><b>{props.data.checkOut.remain_balance}</b></td>
                        </tr>):<></>}  

                        <tr className="quoted-text">
                            <th colSpan="4">Thankyou! hava a nice day.</th>
                        </tr>                                             
                    </tfoot>
                </table>

            </div>
        </div>
    );
}