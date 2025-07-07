import './styles.css'
import client from '../contentfulClient'
import {useState,useEffect} from 'react'

export default function Footer()
{
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        client.getAsset('3YB5lrQUPKOeriBCPXJlh9')
            .then((assets) => {
                const url = `https:${assets.fields.file?.url ?? ''}`;
                setImageUrl(url);
            })
            .catch(console.error);
    }, []);
  
    return(
        <div className="footer-container">
            <img src ={imageUrl} className="footer-logo"/>
            <hr/>
            <div className="footer-contents">
                <div class="footer-contents__row1">
                    <div className='contents-items'>
                        <p className="items-title">LEARN TO RIDE</p>
                        <ul>
                            <li>Motor Cycle Training</li>
                        </ul>
                    </div>
                    <div className='contents-items'>
                        <p className="items-title">CUSTOMER SUPPORT</p>
                        <ul>
                            <li>Contact Us</li>
                            <li>Offers</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-contents_row2">
                    <div className='contents-items'>
                        <p className="items-title">MOTORCYCLES SERVICES</p>
                        <ul>
                            <li>Authorised Contents</li>
                            <li>Owner's Manuals</li>
                            <li>Maintenance Schedules</li>
                            <li>Software Updates</li>
                            <li>Roadside Assistance</li>
                        </ul>
                    </div>
                   <div className='contents-items'>
                        <p className="items-title">FINANCING</p>
                        <ul>
                            <li>Motorcycle Financing</li>
                            <li>Apply for Financing</li>
                            <li>Apply for Credit Card</li>
                        </ul>
                    </div>
                </div>                
                <div className="footer-contents_row2">
                    <div className='contents-items'>
                        <p className="items-title">ABOUT US</p>
                        <ul>
                            <li>Our Company</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Sustainability</li>
                            <li>Become a Dealer</li>
                            <li>Factory Tours</li>
                            <li>Museum</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}