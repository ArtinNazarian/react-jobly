import React, { useState, useEffect, useContext } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

import UserContext from "../UserContext";
import "./JobCard.css";
// Display basic information about a specific job

function JobCard({ title, id, companyName, salary, equity }) {
  const [applied, setApplied] = useState();
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);

  useEffect(() => {
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply(e) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <Card key={id} className="JobCard mb-3">
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <h5>{companyName}</h5>
        <CardText>
          Salary: {salary ? salary : "Competetive Salary"}
          <CardText>Equity: {equity ? equity : 0}</CardText>
          <Button
            onClick={handleApply}
            disabled={applied}
            color="danger"
            className="font-weight-bold text-uppercase float-right"
          >
            {applied ? "Applied" : "Apply"}
          </Button>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default JobCard;
