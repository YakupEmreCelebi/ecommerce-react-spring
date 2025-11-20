import styles from './css/Home.module.css';

import PageHeading from '../components/PageHeading';
import ProductListing from '../components/ProductListing';

function Home() {

    const productsData = [
        {
            name: "Product1",
            price: 10,
        },
        {
            name: "Product2",
            price: 10,
        },
        {
            name: "Product3",
            price: 10,
        },
        {
            name: "Product4",
            price: 10,
        },
        {
            name: "Product5",
            price: 10,
        },
        {
            name: "Product6",
            price: 10,
        },
        {
            name: "Product7",
            price: 10,
        },
        {
            name: "Product8",
            price: 10,
        },
        {
            name: "Product9",
            price: 10,
        },
    ];

    return(
        <div className={styles.homeContainer}>
            <PageHeading title={"Welcome to Celebi Shop"}>
                Discover products designed to bring comfort, 
                style, and simplicity into your everyday life. 
                Quality you can trust — all in one place.
            </PageHeading>

            <ProductListing products={productsData}></ProductListing>
        </div>
    );
}
export default Home