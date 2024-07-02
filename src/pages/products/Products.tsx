import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import products from "../../data/products";
import brands from "../../data/brands";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Products() {
    const [brandFilter, setBrandFilter] = useState<string>('');
    const [seriesFilter, setSeriesFilter] = useState<string>('');
    const [housingSizeFilter, setHousingSizeFilter] = useState<string>('');
    const [sensingDistanceFilter, setSensingDistanceFilter] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const query = useQuery();
    const navigate = useNavigate();

    useEffect(() => {
        const brand = query.get('brand');
        if (brand) {
            setBrandFilter(brand.toLowerCase());
        } else {
            setBrandFilter('');
        }
    }, [query]);

    const handleBrandChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedBrand = event.target.value.toLowerCase();
        setBrandFilter(selectedBrand);
        navigate(`/products${selectedBrand ? `?brand=${selectedBrand}` : ''}`);
    };

    const handleSeriesChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSeriesFilter(event.target.value);
    };

    const handleHousingSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setHousingSizeFilter(event.target.value);
    };

    const handleSensingDistanceChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSensingDistanceFilter(event.target.value);
    };

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        console.log('Search submitted:', searchTerm);
    };

    const handleClearFilters = () => {
        setBrandFilter('');
        setSeriesFilter('');
        setHousingSizeFilter('');
        setSensingDistanceFilter('');
        setSearchTerm('');
        navigate('/products');
    };

    const filteredProducts = products.filter(product => {
        return (
            (brandFilter === '' || product.brand.toLowerCase() === brandFilter) &&
            (searchTerm === '' || product.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <div className='product-main'>
            <h1 className='product-header'>All Products</h1>

            <div className='product-section'>
                <div className='product-count'>
                    <span>Showing {filteredProducts.length} of {products.length} results</span>
                </div>
                <div className='product-filter'>
                    <div>
                        <select className='filter-dropdown' value={brandFilter} onChange={handleBrandChange}>
                            <option value=''>Brand</option>
                            {brands.map((brand) => (
                                <option key={brand.id} value={brand.name.toLowerCase()}>{brand.name}</option>
                            ))}
                        </select>
                        <select className='filter-dropdown' value={seriesFilter} onChange={handleSeriesChange}>
                            <option value=''>Series</option>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </select>
                        <select className='filter-dropdown' value={housingSizeFilter} onChange={handleHousingSizeChange}>
                            <option value=''>Housing size</option>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                        </select>
                        <select className='filter-dropdown' value={sensingDistanceFilter} onChange={handleSensingDistanceChange}>
                            <option value=''>Sensing distance</option>
                            <option value='10 mm'>10 mm</option>
                            <option value='12 mm'>12 mm</option>
                            <option value='15 mm'>15 mm</option>
                        </select>
                    </div>
                    <button className='clear-btn' onClick={handleClearFilters}>Clear filters</button>
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    <button type="button" className="search-btn" onClick={handleSearchSubmit}>Search</button>
                </div>
            </div>
            <div className='product-list'>
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        productName={product.productName}
                        productDescription={product.productDescription}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
