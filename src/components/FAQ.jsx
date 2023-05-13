import React from "react";
import { StyledFAQ } from "./Styles";
function FAQ() {
  return (
    <StyledFAQ>
      <div className="left-bar"></div>
      <div className="content">
        <h2>
          <span>What is </span> <h1 className="yyb">YumYumBook</h1>
        </h2>
        <p className="special-paragraph">
          YumYumBook is a collection of recipes that software developers can use
          similar to an API. It also simulates the way a database works.
        </p>
        <h2>How is it implemented?</h2>
        <p>
          Both the front-end and back-end are implemented in JavaScript. The
          back-end is built using Node.js and Express, while the front-end is
          built using the React framework.
        </p>
        <h2>How much does it cost?</h2>
        <p>
          YumYumBook is open source and free to use. However, it does cost time
          because, as the saying goes, "It's not that life is too short, but the
          fact that we waste a lot of it."
        </p>
        <h2>What is the slope intercept formula?</h2>
        <p>
          The slope intercept formula is y = mx + b, but I do not see the point
          in that question.
        </p>
        <h2>How does it work?</h2>
        <p>
          The data is read and written in a file so changes are permanent. This
          ultimately simulates a database. There are several instructions to
          help the user understand some of the commands.
        </p>
      </div>
    </StyledFAQ>
  );
}
export default FAQ;
