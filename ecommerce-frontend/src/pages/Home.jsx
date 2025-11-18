import styles from './css/Home.module.css';

import PageHeading from '../components/PageHeading';

function Home() {
    return(
        <div className={styles.homeContainer}>
            <PageHeading/>
        </div>
    );
}
export default Home