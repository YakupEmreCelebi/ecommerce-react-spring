import PageTitle from "./PageTitle";

import styles from './css/PageHeading.module.css';

function PageHeading({children, title}) {

    return(
        <div className={styles.container}>
            <PageTitle title={title}/>
            
            <p className={styles.text}>
                {children}
            </p>
        </div>
    );
}
export default PageHeading