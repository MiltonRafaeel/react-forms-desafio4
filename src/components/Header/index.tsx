import { useContext } from 'react';
import './styles.css';
import { ProductCount } from '../../models/quantity-products';

export function Header() {

    const context = useContext(ProductCount);
    const productCount = context.ProductCount;

    return (
        <header>
            <nav className="container">
                <h1 className="dsfilter">DSFilter</h1>
                <h3 className="quantity-products-header">{productCount} produto(s)</h3>
            </nav>
        </header>
    );
}