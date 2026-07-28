import styles from './Contact.module.css'

const LINKS = [
  { label: 'sachinsahay357@gmail.com', href: 'mailto:sachinsahay357@gmail.com', primary: true },
  { label: '+91 70845 18445',          href: 'tel:+917084518445' },
  { label: 'LinkedIn',                  href: 'https://www.linkedin.com/in/sachin-sahay-5ba571254/', external: true },
  { label: 'GitHub',                    href: 'https://github.com/SachinSahay',     external: true },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.ey}>// let&apos;s connect</div>
      <div className={styles.big}>
        Open to<br /><span>Opportunities</span>.
      </div>
      <div className={styles.links}>
        {LINKS.map(({ label, href, primary, external }) => (
          <a
            key={label}
            href={href}
            className={`${styles.link} ${primary ? styles.primary : ''}`}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
