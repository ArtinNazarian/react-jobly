import React from "react";
import JobCard from "./JobCard";

//This component will be used by JobList and CompanyDetail to show all jobs

function JobCardList({ jobs }) {
  return (
    <div className="JobCardList">
      {jobs.map((job) => (
        <JobCard
          id={job.id}
          key={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyName={job.companyName}
        />
      ))}
    </div>
  );
}

export default JobCardList;
