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
        <div className = "heading">
          <motion.div
          initial = {{ opacity: 0, y: 500}}
          animate = {{ opacity: 1, y: 200}}
          transition = {{ duration: 1.5 }}
          >
            <h2> About Us </h2>
          
          <p>This website is designed for anyone to use. No matter your dietary needs, we have recipes to satisfy your desire for flavor. Each recipe has a description, the type of cuisine the recipe is taken from, and caloric information to help you find what meals would be best for you.</p>
          <p>To get started, just click on one of the above 2 buttons:</p>
          <p>The left one will bring you to the database and let you make changes to it if you want to create new recipes or find some that are not necessary or are plain incorrect.</p>
          <p>The right one will bring you to the Recipe Lookup and allows you to search for whatever you want to cook. As long as we have the recipe for it, you'll be able to find it!</p>
          <p>You can also access these via the buttons on the top right of the page. The FAQ also tells you a little more about us and how the recipe book works.</p>
          <p>Come over, share with your friends, and have fun cooking to your heart's content with these fabulous recipes.</p>
          </motion.div>
        </div>
      </StyledLanding>
    </motion.div>
  );
}
export default Landing;
