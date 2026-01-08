import { useState, useEffect } from 'react';
import styles from './css/Home.module.css';

import PageHeading from '../components/PageHeading';
import ProductListing from '../components/ProductListing';

import apiClient from '../api/apiClient';

function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts(){

        try{
            setLoading(true);
            const response = await apiClient.get("/products"); //Axios GET request
            setProducts(response.data);
        }
        catch(error){
            setError(error.response?.data?.message || "Failed to fetch the products");
        }finally{
            setLoading(false)
        }
        
    }

    


    return(
        <div className={styles.homeContainer}>
            <PageHeading title={"Welcome to Celebi Shop"}>
                Discover products designed to bring comfort, 
                style, and simplicity into your everyday life. 
                Quality you can trust — all in one place.
            </PageHeading>

            {loading ? (
                <div style={{ height: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ fontFamily: "var(--font-family)" }}>Loading...</h1>
                </div>
            ) : error ? (
                <div style={{ height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <h1 style={{ fontFamily: "var(--font-family)" }}>{error}</h1>
                    <button onClick={fetchProducts} style={{ marginTop: 12 }}>Retry</button>
                </div>
            ) : (
                <ProductListing products={products} />
            )}
        </div>
    );
}
export default Home