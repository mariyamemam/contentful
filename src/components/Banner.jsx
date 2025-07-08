import client from '../contentfulClient'
import './styles.css'
import { useEffect, useState, useRef } from 'react';

export function Banner() {
    const [entries, setEntries] = useState([]);
    const [current, setCurrent] = useState(0);
    const [sliding, setSliding] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        client.getEntries({ content_type: 'swiperSlide' })
            .then((response) => setEntries(response.items))
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (entries.length === 0) return;
        timeoutRef.current = setTimeout(() => {
            setSliding(true);
            setTimeout(() => {
                setSliding(false);
                setCurrent((prev) => (prev + 1) % entries.length);
            }, 700); 
        }, 5000);
        return () => clearTimeout(timeoutRef.current);
    }, [current, entries]);

    return (
        <div className="banner">
            <div className="banner-content">
                <div className="marquee-slider">
                    {entries.length > 0 && (
                        <a
                            className={`marquee-slide${sliding ? ' marquee-slide-exit' : ''}`}
                            key={entries[current].sys.id}
                            href={entries[current].fields.link}
                        >
                            {entries[current].fields.slidingText}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}