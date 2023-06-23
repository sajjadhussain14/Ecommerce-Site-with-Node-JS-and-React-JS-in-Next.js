import Breadcrumbs from "../components/category/Breadcrumbs"
import ProductsArea from "../components/category/ProductsArea"
import Sidenav from "../components/category/Sidenav"
import "./module.category.css"

const page = async () => {

    const res = await fetch(
        `http://localhost:3000/api/taxonomy/get-depts`,
        {
            next: { revalidate: 3600 },
        }
    );
    let taxonomy = await res.json();

    return (
        <div>
            <Breadcrumbs />
            <div className="row">
                <div className="col-lg-2">
                    <Sidenav />
                </div>
                <div className="col-lg-10">
                    <ProductsArea />
                </div>
            </div>
        </div>
    )
}

export default page