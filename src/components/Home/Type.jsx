import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "LAMP Stack Developer",
			  "MEAN Stack Developer",
              "PHP, Angular, and React Enthusiast",
			  "Expert HTML5 and CSS3 Coder",
			  "Mobile Responsive Front End Specialist",
              "Committed Open Source Contributor",
              "Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type