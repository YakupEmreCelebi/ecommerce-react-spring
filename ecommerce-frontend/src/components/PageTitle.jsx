import React from 'react';
import styles from './css/PageTitle.module.css';

function PageTitle({title}) {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}

export default PageTitle