import client from '../contentfulClient';
import './styles.css'
import { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
                    <div className="nav-actions__search"></div>
                    <div className="nav-actions__options">
                        <div className="action__items">
                            <PersonIcon className='icon'/>
                            <p className='label'>Sign In</p>
                        </div>
                        <div className="action__items">
                            <ShoppingCartIcon className='icon'/>
                            <p className='label'>Cart(0)</p>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}