import React from 'react';
import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <>
          <header className={styles.header}>
              <Link href="/">
                 <h2>Car Shop</h2>
                 <p>Choose and Buy your car</p>
              </Link>
          </header>  

          <div className={styles.container}>{children}</div>
          <footer className={styles.footer}>
              A carshop with Next.js | CarShop Project &copy;
          </footer>
        </>
    );
};

export default Layout;