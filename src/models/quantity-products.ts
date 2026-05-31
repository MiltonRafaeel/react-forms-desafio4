import { createContext } from "react";

export type ProductCountType = {
    ProductCount: number;
    setProductCount: (productCount: number) => void;
}

export const ProductCount = createContext<ProductCountType>({
    ProductCount: 0,
    setProductCount: () => {}
})