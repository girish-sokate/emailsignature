import React from 'react';
import './emailpreview.css';

const emailpreview = (props) => {
    return (
        
        <table className="wrapper" style={{"border":"1px solid #efefef", "width": props.empDetails.signaturewidth + 'px'}} border="0" cellPadding="0" cellSpacing="0">
        <tr>
            <td style={{"padding": "10px", "margin":"0px"}}>
            <table className="fixedLayout" style={{"width": "100%"}} width="100%" border="0" cellPadding="0" cellSpacing="0">
                    <tr>
                        <td style={{"borderRight": "1px solid #6b4299", "width":"46%"}}>
                        <table border="0" cellPadding="0" cellSpacing="0">
                                <tr>
                                    <td
                                        style={{"msoLineHeightRule":"exactly", "fontSize": "21px", "margin":"0px", "marginBottom":"3px", "padding":"5px 0px 5px 0px", "color":"#6b4299"}}>
                                        <b>{props.empDetails.name}</b></td>
                                </tr>
                                <tr>
                                    <td
                                        style={{"margin":0, "marginBottom":"6px", "padding":"0px", "fontSize": "12px", "color":"#62b546"}}>
                                        {props.empDetails.designation}</td>
                                </tr>
                                <tr>
                                    <td
                                        style={{"margin":0, "marginBottom":"4px", "padding":"5px 0px 0px 0px", "fontSize": "12px", "color":"#ababab"}}>
                                        {props.empDetails.contact}</td>
                                </tr>
                                <tr>
                                    <td style={{"margin":0, "marginBottom":"2px", "padding":"0px 0px 5px 0px", "fontSize": "12px", "color":"#ababab"}}>
                                        <a style={{"margin":0, "fontSize": "12px", "color":"#ababab"}} href={'mailto:' + props.empDetails.email}>{props.empDetails.email}</a></td>
                                </tr>
                            </table>
                        </td>
                        <td style={{"paddingLeft":"30px", "width":"54%"}}>
                            <table border="0" cellPadding="0" cellSpacing="0">
                                <tr>
                                    <td><img width="80" className="intelli-logo-3"
                                            src="https://www.intelliswift.com/emailSigns/Intelliswift-logo.png" /></td>
                                </tr>
                                <tr>
                                    <td style={{"Margin":0, "lineHeight":"16px !important", "marginBottom":"0px", "padding":"0px", "paddingTop":"3px", "fontSize": "12px", "color":"#ababab"}}> {props.location.address}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                </td>
        </tr>
        <tr>
            <td>
                <table style={{"width":"100%", "padding":"5px", "margin":"0px", "background":"#6b4299"}}>
<tr>
                    <td className="weblink" style={{"width":"50%", "textAlign":"left", "margin":0, "padding":"0px", "paddingLeft":"10px", "fontSize": "12px", "color":"#ffffff !important"}}>
                        <a style={{"color": "#ffffff", "textDecoration":"none"}} href="https://www.intelliswift.com">www.intelliswift.com</a>
                    </td>
                    <td style={{"width":"50%", "textAlign":"right", "paddingRight":"10px"}}>
                        <table align="right" cellPadding="0" cellSpacing="0" border="0">
                            <tr>
                                <td style={{"padding": "2px 5px"}}> <a style={{"display": "block", "width":"100%", "height": "100%"}} href="https://www.facebook.com/IntelliswiftSoftware/"><img style={{"verticalAlign":"baseline"}} className="socialicon"
                                            width="20" src="https://www.intelliswift.com/emailSigns/FB-icon.png" /></a>
                                </td>
                                <td style={{"padding": "2px 5px"}}> <a style={{"display": "block", "width":"100%", "height": "100%"}} href="https://twitter.com/intelliswift"><img style={{"verticalAlign":"baseline"}} className="socialicon"
                                            width="20"
                                            src="https://www.intelliswift.com/emailSigns/Twitter-logo.png" /></a></td>
                                <td style={{"padding": "2px 5px"}}> <a style={{"display": "block",  "width":"100%", "height": "100%"}} href="https://www.linkedin.com/company/intelliswift"><img style={{"verticalAlign":"baseline"}} className="socialicon" width="20"
                                            src="https://www.intelliswift.com/emailSigns/Linkedin-icon.png" /></a></td>
                            </tr>
                        </table>
                    </td></tr>
                </table>
            </td>
        </tr>
    </table>
    )
}

export default emailpreview;