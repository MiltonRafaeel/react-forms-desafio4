import type { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    items: ProductDTO[];
}

export default function Listing({ items }: Props) {

    return (
        <section className="listing container">
            {
                items.map(items => (
                    <div className='listing-card' key={items.id}>
                        <h4>{items.name}</h4>
                        <h3>R$ {items.price.toFixed(2)}</h3>
                    </div>
                ))
            }
        </section>
    );
}