import client from '../contentfulClient';
import './styles.css'
import { useState, useEffect } from 'react';

export function Header() {
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        client.getAsset("2HddsGXsBN8iOjEDCSSoEq")
            .then((asset) => {
                const url = `https:${asset.fields.file?.url ?? ''}`;
                setImageUrl(url);
            })
            .catch(console.error);
    }, []);

    return (
        <nav className="header-nav">
            <div className="header-left">
                <img src={imageUrl} alt="H & D logo" className="hdlogo" />
            </div>
            <div className="header-right">
                <ul className="header-right__navlist">
                    <li>BIKES</li>
                    <li>H & D MARKETPLACE</li>
                    <li>PARTS</li>
                    <li>MENS</li>
                    <li>WOMENS</li>
                    <li>KIDS</li>
                    <li>GOODS & GIFTS</li>
                    <li>DISCOVER H-D1</li>
                </ul>
                <div className="nav-right__actions">
                    {/* <div className="nav-actions__search">Search</div> */}
                    <div className="nav-actions__options">
                    </div>
                </div>
            </div>
        </nav>
    );
}