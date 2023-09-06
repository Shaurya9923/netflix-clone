import React from 'react';
import "./widgetLg.css";

const WidgetLg = () => {
    const Button = ({ type }) => {  
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tbody>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff" alt="" className="widgetLgImg" /> 
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className='widgetLgStatus'><Button type="Approved"/></td>
                    </tr>

                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff" alt="" className="widgetLgImg" /> 
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className='widgetLgStatus'><Button type="Approved"/></td>
                    </tr>


                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff" alt="" className="widgetLgImg" /> 
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className='widgetLgStatus'><Button type="Decline"/></td>
                    </tr>

                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff" alt="" className="widgetLgImg" /> 
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className='widgetLgStatus'><Button type="Pending"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WidgetLg;
