import React from 'react';
import './a4-bill.css';

export default function A4Bill(props) {
    let totalQuantity=0;
    let totalIGST=0;
    let totalSGST=0;
    let totalCGST=0;
    let totalDiscount=0;
    let totalGrossValue=0;
    let netAmount=0;

    return(
        <div className="bill-page-a4" id="a4Bill" style={{width:"100%"}}> 

        <div className="bill-a4-page-container">
        <table className="bill-table" width="100%" style={{border:"solid 1px #000", margin:"20px 10px"}}>
        <tbody>
            <tr className="bill-header-row">
            <td>
            <div className="company-address-col">
                {props.data.bill_setting.vendor_logo ?
                <span className="company-icon">
                    <img src={props.data.bill_setting.vendor_logo} className="com-logo" />
                </span>:<></>}
                <span className="company-address">
                    <h2>{props.data.bill_setting.vendor_name}</h2>
                    <p className="bill-address">{props.data.bill_setting.address_1}</p>
                {props.data.bill_setting.address_2?
                    <p className="bill-address">{props.data.bill_setting.address_2}</p>
                    :<></>}
                <p className="bill-contact-no">PH : {
                (props.data.bill_setting.phone_1 && props.data.bill_setting.phone_2)?
                (props.data.bill_setting.phone_1+", "+props.data.bill_setting.phone_2):
                props.data.bill_setting.phone_1
                }</p>
                {props.data.bill_setting.email?
                    <p className="bill-email">EMAIL : {props.data.bill_setting.email}</p>
                    :<></>}
                {props.data.bill_setting.gstin?(<p className="bill-gst-no">GSTIN : {props.data.bill_setting.gstin}</p>):<></>}
                </span>
            </div>
            <div className="buyer-address-col">
               <label>Buyer</label>
               <h2 className="buyer-name">Mac Support</h2>
               <p className="buyer-address">RG Complex, 2nd Floor, TelunguPalayam Pirivu</p>
               <p className="buyer-city">Coimbatore</p>
               <p className="buyer-state">Tamilnadu</p>
               <p className="buyer-country">India</p>
               <p className="buyer-contact">PH : +91 9876543210</p>
               <p className="buyer-email">EMAIL : test@gmail.com</p>
               <p className="buyer-email">GSTIN : TESTGSTYI666546</p>
            </div>
            </td>
            <td className="no-pad" valign = "top">
                <table className="table-data" width="100%">
                <tbody>
                    <tr>
                        <td>
                            <label>Invoice No : </label>
                        </td>
                        <td>
                            <b>TEST123 </b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Date : </label>
                        </td>
                        <td>
                            <b>27 Oct 2020</b>
                        </td>
                    </tr>
                </tbody>
                </table>
            </td>
            </tr> 
            <tr className="bill-a4-items">
            <td colSpan={2} style={{padding:"0px"}}>
                <table className="items-list-tbl" width="100%">
                    <thead>
                        <tr>
                            <th style={{width:"20px", borderLeft:"none"}}>Sl.No</th>
                            <th>Desc. Item</th>
                            <th>HSN / SAC</th>
                            <th>GST Rate</th>
                            <th>Quantity</th>
                            <th>Rate</th>                          
                            <th style={{borderRight:"none"}}>Amount</th>
                        </tr>
                    </thead>
                    <tbody style={{borderBottom:"dashed 1px #000"}}>
                        <tr>
                            <td>1</td>
                            <td>K7 Total Secutiry 1 User</td>
                            <td>312123</td>
                            <td>18 %</td>
                            <td>1 No.s</td>
                            <td>296.51</td>
                            <td style={{textAlign:"right"}}>296.51</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Laptop 1 LED Screen</td>
                            <td>85468</td>
                            <td>18 %</td>
                            <td>1 No.s</td>
                            <td>3500.50</td>
                            <td style={{textAlign:"right"}}>3500.50</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Discount</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>3000</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>CGST</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>300</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>SGST</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>300</th>
                        </tr>
                        <tr className="bordered-row">
                            <th></th>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                            <th>2</th>
                            <th></th>
                            <th>₹ 6000</th>
                        </tr>
                    </tfoot>
                </table>
            </td>
            </tr>
            <tr className="amount-in-words-row">
                <td colSpan={2} style={{borderTop:"solid 1px #000",padding:"0px"}}>
                    <label className="label-text">Amount Chargeable (in words)</label>
                    <label className="label-bold">Six Thousand Rupees Only</label>
                </td>
            </tr>
            <tr className="items-tax-table">
            <td colSpan={2} style={{padding:"0px"}}>
                <table width="100%">
                    <thead>
                        <tr>
                            <th style={{textAlign:"center"}}>HSN / SAC</th>
                            <th style={{textAlign:"center"}}>Taxable Value</th>
                            <th>
                                <table className="tax-head-tbl" width="100%">
                                    <tbody>
                                        <tr>
                                            <td colSpan={2} style={{textAlign:"center",borderBottom:"solid 1px #000"}}>CGST</td>
                                        </tr>
                                        <tr>
                                            <td style={{borderRight:"solid 1px #000"}}>Rate</td>
                                            <td>Amount</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </th>
                            <th>
                                <table className="tax-head-tbl" width="100%">
                                    <tbody>
                                        <tr>
                                            <td colSpan={2} style={{textAlign:"center",borderBottom:"solid 1px #000"}}>SGST</td>
                                        </tr>
                                        <tr>
                                            <td style={{borderRight:"solid 1px #000"}}>Rate</td>
                                            <td>Amount</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </th>
                            <th>
                                <table className="tax-head-tbl" width="100%">
                                    <tbody>
                                        <tr>
                                            <td colSpan={2} style={{textAlign:"center",borderBottom:"solid 1px #000"}}>IGST</td>
                                        </tr>
                                        <tr>
                                            <td style={{borderRight:"solid 1px #000"}}>Rate</td>
                                            <td>Amount</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </th>
                            <th style={{textAlign:"center"}}>Total Tax Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>8568</td>
                        <td>296.55</td>
                        <td>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>9 %</td>
                                        <td>26.70</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>9 %</td>
                                        <td>26.70</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>9 %</td>
                                        <td>26.70</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>54.5</td>
                        </tr>
                        <tr>
                        <td>8568</td>
                        <td>296.55</td>
                        <td>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>9 %</td>
                                        <td>26.70</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>9 %</td>
                                        <td>26.70</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>9 %</td>
                                        <td>26.70</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>54.5</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                        <th>Total</th>
                        <th>3,808.5</th>
                        <td>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>18 %</td>
                                        <td>250.50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>18 %</td>
                                        <td>250.50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>18 %</td>
                                        <td>250.50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>701.70</td>
                        </tr>
                    </tfoot>
                </table>
            </td>
            </tr>
            <tr className="amount-in-words-row">
                <td colSpan={2} style={{borderTop:"solid 1px #000"}}>
                    <label className="label-text">Amount Chargeable (in words)</label>
                    <label className="label-bold">Six Thousand Rupees Only</label>
                </td>
            </tr>
            <tr className="bill-declare-row">
                <td>    
                    <u>Declaration</u>
                    <p>We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.</p>
                </td>
                <td>

                </td>
            </tr>
            <tr className="signature-row" style={{borderTop:"solid 1px #000"}}>
                <td valign="top" style={{height:"100px",textAlign:"left",borderRight:"solid 1px #000"}}>
                    <label>Customer's Seal and Signature</label>
                </td>
                <td valign="bottom" style={{textAlign:"right"}}>
                    <label>Authorised Signature</label>
                </td>
            </tr>

        </tbody>
        </table>
        </div>

        { /*          
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
                        */}
        </div>
    );
}