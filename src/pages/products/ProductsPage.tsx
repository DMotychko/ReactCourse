import React, {useEffect, useState} from 'react';
import {getProductsByToken, refreshToken} from "../../services/api.service";

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProductsByToken().then(value => setProducts(value)).catch(error => {
            console.log(error)
            refreshToken();
        })
    }, []);
    return (
        <div>
            products
            <hr/>
            {JSON.stringify(products)}
        </div>
    );
};

export default ProductsPage;