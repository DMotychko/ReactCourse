import React, {FC} from 'react';
import arrayProducts from "../../data/arrayProducts";
import IProductModel from "../../models/IProductModel";
import Product from "../product/Product";

const Products: FC = () => {
    return (
        <div>
            {arrayProducts.map((product: IProductModel, index) => <Product key={index} item={product}/>)}
        </div>
    );
};

export default Products;