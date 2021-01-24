import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const limitLength = 200;

const Wrapper = styled.div`
  margin-bottom: 1rem;
  .ep-title {
    color: var(--dark);
    font-size: 1.2rem;
  }
  .ep-date {
    color: var(--lightgray);
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }
  .ep-description {
    color: var(--darkgray);
  }
  hr {
    color: var(--primary);
  }
`;

const Episode = ({ ep }) => {
  let description = "";

  // Remove unnecessary HTML tags
  if (ep.description) {
    description = ep.description.replace(/(<([^>]+)>)/gi, "");
  } else if (ep.summary) {
    description = ep.summary.replace(/(<([^>]+)>)/gi, "");
  } else {
    description = "";
  }

  // trim if description is too long
  if (description.length > limitLength) {
    description = description.substring(0, limitLength) + `...Read More`;
  }

  return (
    <Wrapper className="ep-item">
      <div className="ep-title">{ep.title}</div>

      <div className="ep-date">{dayjs(ep.pubDate).format("DD MMMM YYYY")}</div>

      <div className="ep-description">{description}</div>
      <hr />
    </Wrapper>
  );
};

export default Episode;

// dayjs('2019-01-25').format('DD/MM/YYYY')
