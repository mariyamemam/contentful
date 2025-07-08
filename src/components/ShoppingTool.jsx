import './styles.css'
export default function ShoppingTools({title,icon}){
    return(
        <div className="toolcontainer"> 
            
            <div className="tool-title">
                <p>{title}</p>
            </div>
            <div>{icon}</div>
        </div>
    );
}