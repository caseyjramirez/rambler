import ProductNav from "../../components/productNav";
import SidebarButton from "../../components/sidebarButton";
import { loginPage } from "../../data/welcomeNav";

function ProductPage() {
    return (
        <div className="product flex center-center">
            <SidebarButton
                nav={loginPage}
                text='Start Today'
            />
        </div>

    );
}

export default ProductPage;