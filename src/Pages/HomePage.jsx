import Home from "../components/Home/Home"
import Navbars from "../components/Navbar/Navbar"
import SideBar from "../components/Sidebar/Sidebar"


function HomePage(){
    return(
        <>
        <Navbars />
        <SideBar />
        <Home />
        </>
    )
}
export default HomePage