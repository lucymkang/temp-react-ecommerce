import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Page not found</h3>
        <h5>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </h5>
        <Link to="/" className="btn">
          back to home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  h5 {
    text-transform: none;
    margin-bottom: 2rem;
    margin-left: 10rem;
    margin-right: 10rem;
  }
`;

export default ErrorPage;
