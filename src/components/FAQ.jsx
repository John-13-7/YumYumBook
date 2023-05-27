import React from "react";
import { StyledFAQ, FAQItem, StyledArrow } from "./Styles";
import { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const [isVisible, setIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleVisibility = (index) => {
    setIsVisible((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <StyledFAQ>
      <h2>
        <span>What is </span>
        <span className="yyb">YumYumBook</span>
        <span>?</span>
      </h2>
      <FAQItem>
        <StyledArrow onClick={() => handleVisibility(0)} />
        {isVisible[0] && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="special-paragraph"
          >
            YumYumBook is a collection of recipes that software developers can
            use similar to an API. It also simulates the way a database works.
          </motion.p>
        )}
      </FAQItem>
      <h2>How is it implemented?</h2>
      <FAQItem>
        <StyledArrow onClick={() => handleVisibility(1)} />
        {isVisible[1] && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="special-paragraph"
          >
            Both the front-end and back-end are implemented in JavaScript. The
            back-end is built using Node.js and Express, while the front-end is
            built using the React framework.
          </motion.p>
        )}
      </FAQItem>
      <h2>How much does it cost?</h2>
      <FAQItem>
        <StyledArrow onClick={() => handleVisibility(2)} />
        {isVisible[2] && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="special-paragraph"
          >
            YumYumBook is open source and free to use. However, it does cost
            time because, as the saying goes, "It's not that life is too short,
            but the fact that we waste a lot of it."
          </motion.p>
        )}
      </FAQItem>
      <h2>What is the slope intercept formula?</h2>
      <FAQItem>
        <StyledArrow onClick={() => handleVisibility(3)} />
        {isVisible[3] && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="special-paragraph"
          >
            The slope intercept formula is y = mx + b, but I do not see the
            point in that question.
          </motion.p>
        )}
      </FAQItem>
      <h2>How does it work?</h2>
      <FAQItem>
        <StyledArrow onClick={() => handleVisibility(4)} />
        {isVisible[4] && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="special-paragraph"
          >
            The data is read and written in a file so changes are permanent.
            This ultimately simulates a database. There are several instructions
            to help the user understand some of the commands.
          </motion.p>
        )}
      </FAQItem>
    </StyledFAQ>
  );
}
export default FAQ;
