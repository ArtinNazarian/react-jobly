import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../Api";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

function CompanyDetail() {
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(true);

  const { handle } = useParams();

  useEffect(() => {
    async function getCompany() {
      let result = await JoblyApi.getCompany(handle);
      setCompany(result);
      setLoading(false);
    }
    getCompany();
  }, [handle]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="CompanyDetail col-md-8 offset-md-2">
      <h2>
        {company.name}
        {company.logoUrl ? (
          <img
            src={company.logoUrl}
            alt="company logo"
            className="float-right ml-5"
            style={{ width: "4em" }}
          />
        ) : null}
      </h2>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
