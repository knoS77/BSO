// src/components/ProductCatalogPage.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import axios from 'axios';
import styles from './ProductCatalogPage.module.css';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const ProductCatalogPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className={styles.catalog}>
            <h2>Product Catalog</h2>
            {products.length === 0 ? (
                <p>Loading products...</p>
            ) : (
                <div>
                    {products.map((product) => (
                        <div key={product.id} className={styles.product}>
                            <img src={product.image} alt={product.title} />
                            <div className={styles.productTitle}>{product.title}</div>
                            <div className={styles.productPrice}>Price: ${product.price}</div>
                            <button className={styles.addButton} onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductCatalogPage;