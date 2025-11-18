import PageTitle from "./PageTitle";

import styles from './css/PageHeading.module.css';

function PageHeading() {

    return(
        <div className={styles.container}>
            <PageTitle title={"Welcome to Celebi Shop"}></PageTitle>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatum tempore temporibus sit repudiandae. Dignissimos, 
                repudiandae doloremque obcaecati debitis temporibus ullam officia 
                sit soluta excepturi ratione aut quas ipsa aliquid eum.
            </p>
        </div>
    );
}
export default PageHeading