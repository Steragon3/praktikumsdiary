import React from 'react';
import styles from './InfoIcon.module.scss';

const InfoIcon = () => (
  <div className={styles.InfoIcon}>
    <p className={styles.pBold}>*Your text* = Bold Text</p>
    <p className={styles.pCursive}>_Your text_ = Cursive Text</p>
    <a href="">[htttp://www.your-link.com] = embedded link</a>
    <p>Drag component to move or delete</p>
  </div>
);

export default InfoIcon;
