import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  text-align: center;
  background: #fff;
  width: 100%;
`;

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        Made with{" "}
        <span role="img" aria-label="heart">
          ♥️
        </span>{" "}
        by{" "}
        <a
          href="https://www.stevenpeng.com.au"
          target="_blank"
          rel="noreferrer noopener"
        >
          Steven Peng
        </a>
      </h5>
    </Wrapper>
  );
};

export default Footer;
