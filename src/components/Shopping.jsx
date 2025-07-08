import ShoppingTools from "./ShoppingTool";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import TwoWheelerSharpIcon from '@mui/icons-material/TwoWheelerSharp';

export default function Shopping(){
    return (
        <div className="shoppingTools">
            <div className="shoppingtools-title">
                <p>SHOPPING TOOLS</p>
            </div>
            <div className="shoppingtools-contents">
                <ShoppingTools title="Financing" icon={<AccountBalanceIcon/>}/>
                <ShoppingTools title="Test Ride" icon={<TwoWheelerSharpIcon/>}/>
                <ShoppingTools title="Download Brochure" icon={<ImportContactsSharpIcon/>}/>
            </div>
        </div>
    );
}