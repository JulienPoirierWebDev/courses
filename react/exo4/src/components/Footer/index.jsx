import styles from "./Footer.module.css";

const Footer = ({ content }) => {
  return (
    <div className={styles.footer}>
      <p>{content}</p>
    </div>
  );
};

export default Footer;
