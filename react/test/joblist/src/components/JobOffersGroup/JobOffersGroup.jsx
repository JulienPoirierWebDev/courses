import PropTypes from "prop-types";
import JobOffer from "./JobOffer/JobOffer";
import data from "../../data.json";

const JobOffersGroup = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "hsl(180, 29%, 50%)",
          backgroundImage: "url(/images/bg-header-desktop.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "200px",
          marginBottom: "100px",
          overflow: "hidden",
        }}
      ></div>
      {data.map((item) => {
        return <JobOffer key={item.id} jobOffer={item} />;
      })}
    </>
  );
};

JobOffersGroup.propTypes = {
  data: PropTypes.array,
};

export default JobOffersGroup;
