import { useParams,Link } from "react-router-dom";
import products from "../data";

function SingleProduct() {
    const { productId } = useParams();

    const product = products.find((p) => {
        return p.id == productId;
    })

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.body}</p>
            <Link to="/products">Back to Product</Link>
        </div>
    )
}

export default SingleProduct;