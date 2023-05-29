import React from "react";
import { StyledLanding } from "./Styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <StyledLanding>
        <div className="heading">
          <h2>Welcome to </h2>
          <h1 className="yyb">YumYumBook</h1>
        </div>
        <div className="buttons">
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Link to="/DatabaseSimulation">
              <button>Delete and create recipes</button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Link to="/Lookup">
              <button>Search and update recipes</button>
            </Link>
          </motion.div>
        </div>
      </StyledLanding>
    </motion.div>
  );
}
export default Landing;
