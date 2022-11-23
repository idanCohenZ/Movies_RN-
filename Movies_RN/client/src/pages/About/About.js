import "./About.css";
import React from "react";
//My about page- tells everything you need to know

function alertUser() {
  alert(
    "Glad you are intrested, my details are : \n idan85t@gmail.com- please not on Shabat :)"
  );
}

function About() {
  return (
    <section className="about">
      <div className="main">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffxiRdeQxfwIyiBbAm5FG5HWxMEbMHTiCsw&usqp=CAU"
          alt="Picture of a study-man"
        ></img>
        <div className="about-text">
          <h1>About Us</h1>
          <h5>
            Developer <span className="span"> & Designer</span>
          </h5>
          <p>
            About me: my name is Idan Cohen, the creator of this wonderful
            little site. I am a programmer who enjoys writing everything from
            sites to algorithms, games and recursive head-crackers. In it you
            can find my personal movie prefrences that include movies from all
            around the genres. Whether it's Anime, cartoon, action, adventure,
            live-action drama, or anything else, my site will grant you the joy
            of finding new, thrilling stories and the ability to explore them.
            Apart from intros and searching you could also go to the "Extras"
            page where i have recommended several sites in which you could watch
            most of said movies. So, what are you waiting for? go out on your
            next adventure...
          </p>
          <button className="bt" onClick={alertUser}>
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
export default About;
