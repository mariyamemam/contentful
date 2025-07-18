import './styles.css'
import client from '.././contentfulClient'
import { useState, useEffect } from 'react';

export function BestSeller() {
    const [entries, setEntries] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null); // null means no card is hovered

    useEffect(() => {
        client
            .getEntries({ content_type: 'merchandise' })
            .then((response) => {
                setEntries(response.items);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="bestSeller">
            <div className="component-tile">
                <p className='title'>Best Sellers</p>
            </div>
            <div className="product-list">
                {entries.map((entry, idx) => (
                        <div
                            key={entry.sys.id}
                            className="product-image"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                                                <div className="product-card" key={entry.sys.id}>
                         {entry.fields.tag && (
                             <div className="product-desc__tag">{entry.fields.tag}</div>
                          )}
                            <img
                                src={
                                    hoveredIndex === idx
                                        ? entry.fields.displayImages[1].fields.file.url
                                        : entry.fields.displayImages[0].fields.file.url
                                }
                                alt="product display"
                            />
                        </div>
                        <div className="product-desc">
                            <div className="product-desc__label">{entry.fields.productTitle}</div>
                            <div className="product-desc__price">${entry.fields.price}.00</div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="hr-line"/>
        </div>
    );
}