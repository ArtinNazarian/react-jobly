import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./CompanyCard.css";

// Show information about a company

function CompanyCard({ handle, name, desc, logo }) {
  return (
    <Link to={`/companies/${handle}`} className="CompanyCard">
      <Card className="CompanyCard mb-3">
        <CardBody>
          <CardTitle>
            {name}
            {logo ? (
              <img
                src={logo}
                alt="company logo"
                className="float-right ml-5"
                style={{ width: "5em" }}
              />
            ) : null}
          </CardTitle>
          <p>{desc}</p>
        </CardBody>
      </Card>
    </Link>
  );
}

export default CompanyCard;
