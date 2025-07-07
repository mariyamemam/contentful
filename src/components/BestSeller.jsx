import './styles.css'
import client from '.././contentfulClient'
import { useState, useEffect } from 'react';

export function BestSeller() {
    const [entries, setEntries] = useState([]);
    const [hoverIndex,setHoveredIndex] = useState(0);

    useEffect(() => {
        client
            .getEntries({ content_type: 'merchandise',
                limit:3
            })
            .then((response) => {
                setEntries(response.items);
            })
            .catch(console.error);
    }, []);

    return (
    <div className="bestSeller">
        <div className="component-tile">
            <h1>Best Sellers</h1>
        </div>
        <div className="product-list">
            {entries.map((entry) => (
            <div className="product-card" key={entry.sys.id}>
                <div className="product-image"
                         onMouseEnter={()=>setHoveredIndex(1)}
                         onMouseLeave={()=>setHoveredIndex(0)}>
                        <img src={entry.fields.displayImages[hoverIndex].fields.file.url || entry.fields.displayImages[1].fields.file.url} alt="product display" />
                </div>
            <div className="product-desc">
                        <div className="product-desc__label">{entry.fields.productTitle}</div>
                        <div className="product-desc__price">${entry.fields.price}.00</div>
            </div>
        </div>))}
        </div>
    </div>
    );
}