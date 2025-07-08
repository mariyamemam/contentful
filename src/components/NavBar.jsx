import './styles.css'
import {useState,useEffect} from 'react'
import client from '.././contentfulClient'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export function NavBar()
{
    const [entries, setEntries] = useState([]);
    useEffect(()=>
    {
        client
        .getEntries({
            content_type : 'location'
        })
            .then((response) => {
                setEntries(response.items);
            })
            .catch(console.error);
    }, []);
    return(
        <div className="flex-wrapper">
        <nav className="navBar-container">
            <div className="nav-right">
                <LocationOnIcon className="location-icon"/>
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
        </div>
    )
}
