import React, { useState } from "react";

/**Universal search form used on CompanyList and JobList */

function SearchForm({ searchFor }) {
  console.log("SearchForm", "searchFor=", typeof searchFor);
  const [searchTerm, setSearchTerm] = useState("");

  /** Update form fields */
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  return (
    <div className="SearchForm mb-4">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg flex-grow-1"
          name="searchTerm"
          type="search"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-lg btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
