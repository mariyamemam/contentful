import './styles.css'
import {useState,useEffect} from 'react'
import client from '.././contentfulClient'

export function NavBar()
{
    const [entries, setEntries] = useState([]);
    useEffect(()=>
    {
        client
        .getEntries({
            content_type : 'location',
            limit:3
        })
            .then((response) => {
                setEntries(response.items);
            })
            .catch(console.error);
    }, []);
    return(
        
        <nav className="navBar-container">
            <div className="nav-right">
                {/* <img src="" alt="icon" className="location-icon"/> */}
                <p>Icon</p>
                <p className="nav-right__label">Select your store</p>
            </div>
            <div className="nav-left">
                <ul>
                    <li>Learn to Ride</li>
                    <li>Test Ride</li>
                    <li>Dealer Locator</li>
                    <li>Track Order</li>
                    <select>
                             {entries.map((entry) => (
                                <option key={entry.sys.id}>{entry.fields.location} - {entry.fields.language}</option>
                             ))}
                    </select>
                </ul>
            </div>
        </nav>
    )
}
