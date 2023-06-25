import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";

function Layout() {
    return(
        <div className="Layout-layout">
            <header>
                <ResponsiveAppBar />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;