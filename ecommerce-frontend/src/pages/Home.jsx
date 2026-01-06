import styles from './css/Home.module.css';

import PageHeading from '../components/PageHeading';
import ProductListing from '../components/ProductListing';

import products from '../data/products';

function Home() {


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