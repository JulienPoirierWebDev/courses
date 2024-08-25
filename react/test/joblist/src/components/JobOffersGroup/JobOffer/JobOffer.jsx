import { PropTypes } from "prop-types";
import styles from "./JobOffer.module.css";

import JobInfos from "../JobInfos/JobInfos";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import ListTags from "../ListTags/ListTags";

const JobOffer = ({ jobOffer }) => {
  // console.log(jobOffer);
  let styleContainer = styles.container;

  if (jobOffer.featured) {
    styleContainer += " " + styles.featured;
  }

  return (
    <div className={styleContainer}>
      <div className={styles.mainInfos}>
        <CompanyLogo logoPath={jobOffer.logo} />
        <JobInfos
          {...jobOffer}
          isNew={jobOffer.new}
          isFeatured={jobOffer.featured}
          worldLocation={jobOffer.location}
        />
      </div>
      <ListTags tools={jobOffer.tools} languages={jobOffer.languages} />
    </div>
  );
};

JobOffer.propTypes = {
  jobOffer: PropTypes.string,
};

export default JobOffer;
