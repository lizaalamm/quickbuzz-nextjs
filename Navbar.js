// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}> 
      <div className={styles.logo}>QuickBuzz</div>
      <ul className={styles.links}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/category/business">Business</Link></li>
        <li><Link href="/category/technology">Technology</Link></li>
        <li><Link href="/category/sports">Sports</Link></li>
        <li><Link href="/category/health">Health</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
