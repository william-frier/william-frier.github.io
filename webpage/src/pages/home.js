import React from "react";
import '../style.css'


function HomePage() {
  return (
    <div>
        <h1>
          Hello!
        </h1>

        <div style={{float:"left" , marginTop:10, paddingLeft:"25%", paddingRight:"25%"}}>
          <p>
            I am William. Nice meeting you.
          </p>
          <p>
            I have 10 years experience in <b>Haptics</b>, walking the line between Industry R&D and Academic Research. 
            But who cares about this...
          </p>
          <p>
            This is not about a blog, this is not even a personal page. 
            This is practice, while I learn web development. 
            Most of what you see here, is somewhat an experiment. 
            A mean to learn a new react component, to practice a bit of javascript.
            The main experiments are on the project page. 
          </p>
        </div>
      </div>
  );
}

export default HomePage;