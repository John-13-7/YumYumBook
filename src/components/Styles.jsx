import styled from "styled-components";
import { BsArrowRightSquareFill } from "react-icons/bs";

//App
export const StyledApp = styled.div`
  background-color: hsla(0, 100%, 50%, 1);
  background-image: radial-gradient(
      at 40% 20%,
      hsla(28, 100%, 74%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 82% 38%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 31% 64%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 85% 81%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
`;

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
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;

  h4 {
    margin: 0;
    font-size: 1.5rem;
    font-family: "Open-sans", sans-serif;
  }

  h5 {
    font-family: "Open-sans", sans-serif;
    font-style: italic;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .image {
    width: 150px;
    height: 150px;
    border-radius: 75%;
    border: 2px solid black;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .recipe-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px; // You can change this to fit your needs
    border: 2px solid #e6e6e6;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: auto; // This will add a scroll bar if there is overflow
  }

  .center-flag {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flag {
    align-items: center;
    width: 40px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0.5, 0, 0, 0.5);
  }
`;

//FAQ
export const StyledFAQ = styled.div`
  .yyb {
    font-size: 3rem;
    font-family: "Lobster", cursive;
    color: orange;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
  }

  h2 {
    margin-left: 20px;
    font-size: 3rem;
    font-family: "Red Hat Display", sans-serif;
  }
`;

export const FAQItem = styled.div`
  p {
    font-family: "Open-sans", sans-serif;
    font-size: 1.5rem;
    display: inline;
  }
`;

export const StyledArrow = styled(BsArrowRightSquareFill)`
  margin-left: 20px;
  font-size: 1.5rem;
  margin-right: 10px;
`;

//Database Simulation
export const DatabaseDirectionsDiv = styled.div`
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

export const DatabaseSearchBarForm = styled.form`
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

export const RenderTable = styled.table`
  margin: 0 auto;
  margin-top: 30px;
  border-collapse: collapse;
  font-family: "Open-sans", sans-serif;
  font-size: 1.2rem;
  th,
  td {
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
  }
  th {
    background-color: #f2f2f2;
  }
  .recipe-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid black;
    object-fit: cover;
  }
`;

//Recipe Detail
export const RecipeDetailDiv = styled.div`
  font-family: "Open-sans", sans-serif;
  margin-top: 10px;
  .image {
    width: 350px;
    height: 350px;
    border: 2px solid black;
    object-fit: cover;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  h2 {
    font-style: italic;
  }
  .title {

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .calories {
    font-size: 1.2rem;
  }
  .recipe-card {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: 2px solid #e6e6e6;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  .ingredients {
  }
`;
