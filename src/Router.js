import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Billing from "./Pages/Billing";
import Account from "./Pages/Account";
import Support from "./Pages/Support";
import More from "./Pages/More";
const Router= ()=>(
    <BrowserRouter>
    <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/billing" element={<Billing/>}/>
        <Route exact path="/account" element={<Account/>}/>
        <Route exact path="/support" element={<Support/>}/>
        <Route exact path="/more" element={<More/>}/>
    </Routes>
    </BrowserRouter>
)
export default Router