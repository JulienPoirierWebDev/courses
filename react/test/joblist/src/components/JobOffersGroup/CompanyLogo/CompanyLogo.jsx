import { PropTypes } from "prop-types";
import styles from "./CompanyLogo.module.css";
const CompanyLogo = ({ logoPath }) => {
  return (
    <div className={styles.container}>
      <img src={logoPath} alt="" aria-hidden />
    </div>
  );
};

CompanyLogo.propTypes = {
  logoPath: PropTypes.string,
};

export default CompanyLogo;
