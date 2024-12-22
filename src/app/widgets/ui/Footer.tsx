import styles from '../../styles/index.module.css';

const Footer: React.FC = () => {
  const now = new Date();

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const day = date.getUTCDate();
    const month = date.getMonth() + 1;
    return `Сегодня ${day}/${month}/${year}`;
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p>{formatDate(now)}</p>
      </div>
    </footer>
  );
};

export default Footer;
