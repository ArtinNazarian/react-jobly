import React, { useState, useEffect } from "react";

import JoblyApi from "../Api";
import SearchForm from "../forms/SearchForm";
import JobCardList from "./JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

//Display all avilable jobs

function JobList() {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.debug("JobList useEffect getJobsOnMount");
    search();
  }, []);

  async function search(title) {
    let result = await JoblyApi.getAllJobs(title);
    console.log(result);
    setJobs(result);
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm search={search} />
      {jobs.length ? (
        <JobCardList jobs={jobs} />
      ) : (
        <p className="lead">No results matching your search term.</p>
      )}
    </div>
  );
}

export default JobList;
