import styles from "./page.module.css";
import { MOCK_TEMPLATES } from "@/lib/data";

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={`${styles.header} glass`}>
        <div className={styles.logo}>
          <span style={{ color: "var(--primary)" }}>🧱</span> Still Systems
        </div>
        <nav className={styles.nav}>
          <a href="#">Templates</a>
          <a href="#">Documentation</a>
          <a href="#">Showcase</a>
          <a href="#">Community</a>
        </nav>
        <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>
          Sign In
        </div>
      </header>

      <section className={styles.hero}>
        <h1 className="animate-fade-in">
          The <span className="gradient-text">Nexus</span> of<br />
          Community Templates
        </h1>
        <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          The official marketplace for Still Systems. Discover, share, and scaffold with community-driven Nexus-V templates.
        </p>
        <div className={`${styles.searchBar} animate-fade-in`} style={{ animationDelay: "0.2s" }}>
          <input type="text" placeholder="Search templates (e.g. 'go microservice')" />
        </div>
      </section>

      <div className="section-title" style={{ marginBottom: "2.5rem" }}>Featured Templates</div>

      <div className={styles.grid}>
        {MOCK_TEMPLATES.map((template, i) => (
          <div 
            key={template.id} 
            className={`${styles.card} glass glow-on-hover animate-fade-in`}
            style={{ animationDelay: `${0.3 + (i * 0.1)}s` }}
          >
            <div className={styles.cardTop}>
              <div className={styles.langBadge}>{template.language}</div>
              <div style={{ color: "var(--muted-foreground)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </div>
            </div>
            <h3>{template.name}</h3>
            <p>{template.description}</p>
            <div className={styles.cardFooter}>
              <span>by {template.author}</span>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  {template.stars}
                </div>
                <div className={styles.statItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  {template.downloads}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: "center", padding: "4rem 0", color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
        &copy; 2026 Still Systems. All rights reserved.
      </footer>
    </main>
  );
}
