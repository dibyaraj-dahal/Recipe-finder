import {Outlet} from "react-router-dom";
import Navbar from "../common/Navbar";

function MainLayout(){
    return (
        <>
        <Navbar/>
          <main className="min-h-screen">
        <Outlet />
      </main>
      {/*footer will come later*/}
            </>
    )
}
export default MainLayout;