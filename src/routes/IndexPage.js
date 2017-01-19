import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.container}>
      <span className = {styles.title}>微信支付</span>
      <div className={styles.payIcon}/>
      <span className = {styles.des}>支付中...</span>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
