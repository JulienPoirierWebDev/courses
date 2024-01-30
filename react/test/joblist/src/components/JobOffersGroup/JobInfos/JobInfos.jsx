import { PropTypes } from "prop-types";
import styles from "./JobInfos.module.css";
const JobInfos = ({
  company,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  worldLocation,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainInfos}>
        <div className={styles.companyInfos}>
          <h3 className={styles.company}>{company}</h3>
        </div>
        <div className={styles.newOrFeatured}>
          {isNew ? <p className={styles.new}>NEW!</p> : null}
          {isFeatured ? <p className={styles.featured}>FEATURED</p> : null}
        </div>
      </div>

      <h2>{position}</h2>
      <div className={styles.otherInfos}>
        <p>{postedAt}</p> - <p>{contract}</p> - <p>{worldLocation}</p>
      </div>
    </div>
  );
};

JobInfos.propTypes = {
  company: PropTypes.string,
  isNew: PropTypes.boolean,
  isFeatured: PropTypes.boolean,
  position: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  worldLocation: PropTypes.string,
};

export default JobInfos;
