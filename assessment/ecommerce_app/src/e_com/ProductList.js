import Product from "./Product";
import { products } from "./product_utils/constants.js";
function ProductList() {
  return (
    <div className="container">
      <div className="inside_container">
        {products.map((pdt, index) => (
          <>
            <Product
              key={index}
              title={pdt.title}
              type={pdt.type}
              description={pdt.description}
              url={pdt.url}
              price={pdt.price}
              rating={pdt.rating}
            />
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
