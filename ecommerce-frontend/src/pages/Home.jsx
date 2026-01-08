import { useState, useEffect } from 'react';
import styles from './css/Home.module.css';

import PageHeading from '../components/PageHeading';
import ProductListing from '../components/ProductListing';

import apiClient from '../api/apiClient';

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts(){
        const response = await apiClient.get("/products"); //Axios GET request
        setProducts(response.data);
    }


    return(
        <div className={styles.homeContainer}>
            <PageHeading title={"Welcome to Celebi Shop"}>
                Discover products designed to bring comfort, 
                style, and simplicity into your everyday life. 
                Quality you can trust — all in one place.
            </PageHeading>

            <ProductListing products={products}></ProductListing>
        </div>
    );
}
export default Home