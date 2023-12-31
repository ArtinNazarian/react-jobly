import React, { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import JoblyApi from "../Api";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../common/LoadingSpinner";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function getCompaniesOnMount() {
    console.debug("CompanyList useEffect getCompaniesOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads companies. */
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);

    setCompanies(companies);
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <SearchForm searchFor={search} />
      {companies.length ? (
        <div className="CompanyList-list">
          {companies.map((c) => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
          ))}
        </div>
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
}

export default CompanyList;
