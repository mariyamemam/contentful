import client from '.././contentfulClient'
import { useState, useEffect } from 'react';
import './styles.css'

export default function MotorCycle(){
    
    const [entries,setEntries] = useState([]);
    const [category,setCategory] = useState([]);

    useEffect(() => {
        client.getEntries({
            content_type:'motorcycleCategory'
        })
        .then((response) => {
                setEntries(response.items);
                setCategory(response.items[0].fields.motorcycles);
            })
            .catch(console.error);
    }, []);

    function selectCategory(categoryinp){
        setCategory(categoryinp)
    }

    return(
        <div className="motorcyclelist-container">
            <div className="motorcycle-category-list">
            {entries.map(
            (entry) => (
                <button onClick={()=>{selectCategory(entry.fields.motorcycles)}} key={entry.sys.id}>{entry.fields.categoryTitle}</button>
            )
            )}
            </div>
            <div className="motorcycle-view">
                {category.length > 0 &&
                    category.map((motorcycle) => (
                    <div key={motorcycle.sys.id} className='motorcycle-view__card'>
                        {/* {console.log(category)} */}
                        {motorcycle.fields.image.map((img)=>(
                            <div className="images" key={img.sys.id}>
                                <img src={img.fields.file.url}/>
                            </div>
                        ))}
                        
                        <div className="motorcycle-desc"> 
                            <p>{motorcycle.fields.model}</p>
                            <p>Start Price:{motorcycle.fields.startPrice}$</p>
                            </div>
                    </div>
                    ))
                }
            </div>
            <hr className="hr-line"/>
        </div>
    );
}