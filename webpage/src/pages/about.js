import React from "react";
import '../style.css';

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
  
      <div style={{float:"left" , marginTop:10, paddingLeft:"25%", paddingRight:"25%"}}>
        <p>
          I have 10 years experience in <b>Haptics</b>, walking the line between Industry R&d and Academic Research. 
          With this website, I will share my learnings, developments in the field and key ressources.  
        </p>

        <p>
          As you read these posts, I will be learning web development. Mostly Node.js and React. Nothing fancy, but we'll get there.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;