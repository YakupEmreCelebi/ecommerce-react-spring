import React from 'react';

import styles from './css/Price.module.css';

function Price({price}) {
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>{"$" + price}</h1>
    </div>
  )
}

export default Price