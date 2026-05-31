import { useState } from 'react';
import './styles.css';

type Props = {
    onFilter: Function;
}

type FormData = {
    priceMin?: number;
    priceMax?: number;
}

export default function Filter({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({});

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    function handleFormSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setFormData(formData);
        onFilter(formData.priceMin, formData.priceMax);
    }


    return (
     <section className="filter-card container mb20">
            <form className="form" onSubmit={handleFormSubmit}>
                <input name="priceMin" value={formData.priceMin || ""} onChange={handleInputChange} type="text" placeholder="Preco minimo" className="input mb20" />
                <input name="priceMax" value={formData.priceMax || ""} onChange={handleInputChange} type="text" placeholder="Preco maximo" className="input mb20" />
                <button type="submit" className='btn mb20'>Filtrar</button>
            </form>
        </section>
    );
}