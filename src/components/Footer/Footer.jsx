import React from 'react';
import Twitter from '../../Logo/twitter.png';
import Facebook from '../../Logo/facebook.png';
import Instagram from '../../Logo/Instagram.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='FooterAll'>
                <div className='iconFooter'>
                    <div className='img'>
                        <a href="https://twitter.com/makemytrip" target='_blank' > <img src={Twitter} alt="twitter" /></a>
                        <a href="https://www.facebook.com/makemytrip/" target='_blank'> <img src={Facebook} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/makemytrip/" target='_blank'> <img src={Instagram} alt="Instagram" /></a>
                    </div>
                    <div className='copyRight'>&#169;<span> 2023 MAKEMYTRIP PVT . LTD .</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer