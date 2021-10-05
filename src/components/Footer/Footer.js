import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black  h-44 text-white">
            <div className="grid grid-cols-2">
                <div className="pr-44 pt-5 font-semibold ">
                    <h1>69 South Park Avenue San Francisco, CA 14782 USA</h1>
                    <br />
                    <h1>support@companyname.com</h1>
                    <h1>(00) 123 456 789</h1>
                    <h1>www.companyname.com</h1>
                </div>
                <div className="pl-44 pt-5 font-semibold">
                    <p >About us</p>
                    <p>Success</p>
                    <p>Refund policy</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <p >Copyright © 2016 - 2019. Yogi All rights reserved</p>
        </div>
    );
};

export default Footer;