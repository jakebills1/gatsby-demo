import React from 'react'
import styles from './layout.module.scss';
import Header from './header'
import Footer from'./footer'
export default props => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      {props.children}
    </div>
    <Footer>
      My New Gatsby Blog 2019
    </Footer>
  </div>
)