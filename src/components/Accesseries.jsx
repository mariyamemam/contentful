import client from "../contentfulClient";
import {useEffect,useState} from 'react'
import './styles.css'

export default function Accessories(){

    const [imageurl,setUrl] = useState("");
    useEffect(()=>{
        client.getAsset("6TuVzMj95cppIkaEVhTepz")
        .then((asset) => {
            const url =`https:${asset.fields.file?.url ?? ''}`;
            setUrl(url);
        })
        .catch(console.error);
    })
    return(
    <div>
        <div className="accessories">
            <div className="content-left">
                <h1 className="title">YOUR HARLEY, YOUR CANVAS</h1>
                <p>Customize your bike with parts and accessories that bring your vision to life.</p>
                <div className="redirect-button">SHOP PARTS & ACCESSORIES</div>
            </div>
            <img src={imageurl} className="content-right" alt="error while loading image"/>
            </div>
         <hr className="hr-line"/>
        </div>
    );
}