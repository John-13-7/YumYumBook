import styled from "styled-components";

//Nav Bar
export const StyledNav = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: -10px;
  background-color: red;
  border: 2px solid black;
  height: 100px;
  a {
    text-decoration: none;
    color: orange;
  }

  h1 {
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
    margin-right: auto;
    margin-left: 40px;
    font-size: 3.5rem;
    font-family: "Lobster", cursive;
  }

  li {
    font-family: "Open-sans", sans-serif;
    margin-right: 75px;
    margin-top: 15px;
    font-size: 2rem;
    font-weight: 750;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
  }
`;

//landing page
export const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 25px;

  .heading {
    display: inline-block;
  }
  h1 {
    display: inline-block;
    font-family: "Red Hat Display", sans-serif;
    font-size: 3rem;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
  }
  h2 {
    font-family: "Red Hat Display", sans-serif;
    font-size: 3rem;
    display: inline-block;
  }
  p {
    font-family: "Open-sans", sans-serif;
    font-size: 1.5rem;
  }
  .yyb {
    display: inline-block;
    font-size: 3.5rem;
    font-family: "Lobster", cursive;
    color: orange;
    margin-left: 10px;
  }
`;

//Recipe Lookup
export const LookupSearchBar = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .search-bar {
    margin-top: 10px;
    border: 2px solid black;
    width: 750px;
    padding: 10px;
    font-size: 1.5rem;
    font-family: "Open-sans", sans-serif;
  }
`;
export const DisplaySearch = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Display 5 cards per row */
  grid-gap: 20px; /* Spacing between cards */
  margin-top: 20px;
  margin-left: 20px;

  .image {
    width: 150px;
    height: 150px;
    border-radius: 75%;
    border: 2px solid black;
  }
  .recipe-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #e6e6e6;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
`;

//FAQ
export const StyledFAQ = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;

  .left-bar {
    position: fixed;
    top: 150px;
    bottom: 20px;
    width: 10px;
    background-color: #f3ff07;
  }

  .special-paragraph {
    margin-top: -20px;
  }

  .content {
    margin: 0 10px 0 20px;
  }
  .yyb {
    display: inline-block;
    font-size: 2.5rem;
    font-family: "Lobster", cursive;
    color: orange;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
  }

  h2 {
    font-size: 2rem;
    font-family: "Red Hat Display", sans-serif;
    margin-left: 10px;
  }

  p {
    font-family: "Open-sans", sans-serif;
    font-size: 1rem;
    margin-bottom: 20px;
    margin-left: 50px;
  }
`;

//Database Simulation
export const DatabaseSearchBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .search-bar {
    border: 2px solid black;
    padding: 10px;
    width: 1000px;
    font-size: 1.2rem;
    font-family: "Open-sans", sans-serif;
  }
  @media screen and (max-width: 768px) {
    .search-bar {
      width: 100%;
    }
  }
`;
export const ApiDirections = styled.div`
  h1 {
    font-family: "Red Hat Display", sans-serif;
    text-align: center;
    font-size: 2.5rem;
  }
  h2 {
    font-family: "Open-sans", sans-serif;
    text-align: center;
    font-weight: normal;
    font-size: 1.2rem;
  }
`;
export const UpdateTable = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  font-family: "Open-sans", sans-serif;
  font-size: 1.2rem;
  th,
  td {
    text-align: center;
    padding: 10px;
  }
  .recipe-image {
    width: 100px;
    height: 100px;
    border-radius: 75%;
    border: 2px solid black;
  }
`;
export const ReadDiv = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Open-sans", sans-serif;
  font-size: 1.2rem;
  td {
    text-align: center;
    padding: 10px;
  }
`;
