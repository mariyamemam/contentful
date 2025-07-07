import client from '../contentfulClient';
import './styles.css'
import {useState,useEffect} from 'react'
export function Header(){
    // const [entries,setEntries]=useState([]);
    // useEffect(()=>{
    //     client
    //     .getEntries({
    //         links_to_asset:'2HddsGXsBN8iOjEDCSSoEq'
    //     })
    //     .then((response) => {
    //         setEntries(response.items);
    //     })
    //     .catch(console.error);

    // },[]);
    return(
        <nav className="header-nav">
            <div className="header-left">
                <img src='assets/shield-icon-black.svg' alt="H & D logo" className="hdlogo"/>
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
                <div className="nav-actions__search">Search</div>
                <div className="nav-actions__options">
                    <p>signIn</p>
                    <p>cart</p>
                </div>
                </div>
            </div>
        </nav>
    );
}