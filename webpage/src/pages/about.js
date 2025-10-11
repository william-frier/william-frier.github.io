import React from "react";
import '../style.css';

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
  
      <div style={{float:"left" , marginTop:10, paddingLeft:"25%", paddingRight:"25%"}}>
        <p>
          I have 10 years experience in <b>Haptics</b>, walking the line between Industry R&D and Academic Research. 
          With this website, I will share my learnings, developments in the field and key ressources.  
        </p>

        <p>
          As you read these posts, I will be learning web development.  
          Nothing fancy, mostly Node.js and React. 
          So bare with me, as the content and the form improves.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;