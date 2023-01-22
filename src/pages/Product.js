import products from "../data";
import { Link } from "react-router-dom";

function Product() {
    return (
        <div>
            <ul>
                {
                    products.map((product) => {
                        return (
                            <li key={product.id}>
                                {product.title}
                                <Link to={`/products/${product.id}`}>More Info</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Product;