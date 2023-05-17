import { Outlet } from "react-router-dom";
import { LoginUser } from "./components/LoginUser";

const useAuth = () =>{
    var flag = localStorage.getItem("id") ? true : false;
    return flag;
}

const ProtectedRoutes = ()=>{
    
    const flag = useAuth();
    return(
        flag? <Outlet/> : <LoginUser/>
    )

}
export default ProtectedRoutes;