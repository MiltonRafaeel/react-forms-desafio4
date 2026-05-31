import { useContext, useEffect, useState } from "react";
import type { ProductDTO } from "../../models/product";
import * as productService from '../../services/product-servce';
import { ProductCount } from "../../models/quantity-products";
import Filter from "../Filter";
import Listing from "../Listing";

type QueryParams = {
    priceMin: number;
    priceMax: number;
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        priceMin: 0,
        priceMax: Number.MAX_VALUE
    });

    const { setProductCount } = useContext(ProductCount);

    useEffect(() => {
        const products = productService.findByPrice(queryParams.priceMin, queryParams.priceMax);
        setProducts(products);
        setProductCount(products.length);
    }, [queryParams]);

    function handleFilter(min: number, max: number) {
        setQueryParams({ priceMin: min || 0, priceMax: max || Number.MAX_VALUE });
    }

    return (
        <main>
            <div>
                <Filter onFilter={handleFilter} />
                <Listing items={products} />
            </div>
        </main>
    );
}