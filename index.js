import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../components/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>QuickBuzz | Smart News for Busy Professionals</title>
        <meta name="description" content="Curated news from reliable sources, delivered with clarity and context" />
      </Head>
      
      <Navbar />
      
      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.heroBadge}>Latest Update</span>
              <h1 className={styles.heroTitle}>Informed Decisions Start Here</h1>
              <p className={styles.heroSubtitle}>
                QuickBuzz delivers essential news with context, helping busy professionals stay ahead.
              </p>
              <div className={styles.trendingSticker}>
                <svg className={styles.stickerIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H15L21 10V18C21 19.1046 20.1046 20 19 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 4V10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.stickerText}>Essential stories, delivered simply</span>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img 
                src="https://t3.ftcdn.net/jpg/03/27/55/60/240_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg" 
                alt="Newsroom workspace" 
                className={styles.heroImg}
              />
            </div>
          </div>
        </section>

        {/* Rest of your existing code remains exactly the same */}
        {/* Trending Ticker */}
        <section className={styles.trendingTicker}>
          <div className={styles.tickerItems}>
            <span>Global markets react to policy changes</span>
            <span>Tech summit announces breakthrough innovations</span>
            <span>Climate report reveals urgent action needed</span>
            <span>Healthcare reforms take center stage</span>
          </div>
        </section>

        {/* Categories Grid */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Browse by Category</h2>
            <p className={styles.sectionSubtitle}>Dive deeper into topics that matter to you</p>
          </div>
          <div className={styles.categoriesGrid}>
            <Link href="/category/business" className={styles.categoryCard}>
              <img src="https://t3.ftcdn.net/jpg/03/62/30/62/240_F_362306286_C4GzleFA9xXaHe57uk45aqTll0bGSYuU.jpg" alt="Business" className={styles.categoryImage} />
              <div className={styles.categoryContent}>
                <h3>Business</h3>
                <p>Markets, companies, and financial news</p>
              </div>
            </Link>

            <Link href="/category/technology" className={styles.categoryCard}>
              <img src="https://t3.ftcdn.net/jpg/12/55/62/84/240_F_1255628404_z7WagZl9eC1AZLzaCXeLEIZg7rPl1mvj.jpg" alt="Technology" className={styles.categoryImage} />
              <div className={styles.categoryContent}>
                <h3>Technology</h3>
                <p>Innovation, startups, and digital trends</p>
              </div>
            </Link>

            <Link href="/category/sports" className={styles.categoryCard}>
              <img src="https://t4.ftcdn.net/jpg/00/04/43/79/240_F_4437974_DbE4NRiaoRtUeivMyfPoXZFNdCnYmjPq.jpg" alt="Sports" className={styles.categoryImage} />
              <div className={styles.categoryContent}>
                <h3>Sports</h3>
                <p>Live scores, analysis and highlights</p>
              </div>
            </Link>

            <Link href="/category/health" className={styles.categoryCard}>
              <img src="https://t3.ftcdn.net/jpg/02/20/79/32/240_F_220793275_eAtr1ZEnTyZarKko7O2EYfXlxe8LtcBN.jpg" alt="Health" className={styles.categoryImage} />
              <div className={styles.categoryContent}>
                <h3>Health</h3>
                <p>Medicine, wellness, and research</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className={styles.newsletter}>
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterContent}>
              <div className={styles.newsletterText}>
                <h2 className={styles.newsletterTitle}>Stay Informed</h2>
                <p className={styles.newsletterSubtitle}>Your Morning Intelligence Briefing</p>
                <p className={styles.newsletterDescription}>
                  Subscribe to receive smart, curated news each morning. No noise, just clarity.
                </p>
                <form className={styles.newsletterForm}>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className={styles.newsletterInput}
                    required
                  />
                  <button type="submit" className={styles.newsletterButton}>
                    Subscribe
                  </button>
                </form>
                <p className={styles.newsletterPrivacy}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2 className={styles.footerLogo}>QuickBuzz</h2>
          <p className={styles.footerTagline}>Smart news. Delivered daily.</p>
          <div className={styles.footerCopyright}>
            © {new Date().getFullYear()} QuickBuzz. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}