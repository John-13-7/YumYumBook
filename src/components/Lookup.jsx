import React from "react";
import styled from "styled-components";
function Lookup() {
  return (
    <RecipeDiv>
      Search for a recipe
      <SearchBar>
        <input className="search-bar"></input>
      </SearchBar>
    </RecipeDiv>
  );
}

const RecipeDiv = styled.div`
  display: flex;
  text-align: center;
`;

const SearchBar = styled.form`
  .search-bar {
    margin-top: 10px;
    border: 2px solid black;
    width: 750px;
    padding: 10px;
    font-size: 1.5rem;
    font-family: "Open-sans", sans-serif;
  }
`;

export default Lookup;
