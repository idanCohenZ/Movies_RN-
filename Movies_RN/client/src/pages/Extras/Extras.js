import "./Extras.css";
import ImageSlider from "../../components/ImageSlider";
import React from "react";
//An extras- page component to help use and find sites to watch all these movies
function Extras() {
  const slides = [
    {
      url:
        "https://scontent.ftlv16-1.fna.fbcdn.net/v/t1.6435-9/46521416_729085187458689_7832920230685835264_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=aScX6AogOPwAX80szkz&_nc_ht=scontent.ftlv16-1.fna&oh=00_AT-k35GTnTx9GAG6_etB4DJ7S35P59PxD0GBtwV4gmH16w&oe=63192D3F",
      link: "https://psa.pm/",
      description:
        "  A large site focused on the newest releases. While it will be  difficult to find older, more aged shows and movies, it would normally  have the latest movies in very high definition."
    },
    {
      url: "https://pbs.twimg.com/media/FG3M8fyX0AkLoUz?format=jpg&name=large",
      link: "https://www.sratim.tv/",
      description:
        "A small , neat, little site that has all the most recent and even nostalgia movies, it is completletly free to watch, and only require a 30 seconds wait to watch your favorite movies"
    },
    {
      url: "https://www.wco.tv/logo.png",
      link: "https://www.wcostream.com/",
      description:
        "A cool site to watch anime, cartoon and everything in between. it rarely has any problems with the servers and there is no need for any kind of subscription. "
    }
  ];

  const containerStyles = {
    width: "700px",
    height: "300px",
    margin: "0 auto"
  };

  return (
    <div className="body-img">
      <h1 className="message">The sites I recommend watching in :</h1>
      <div className="innerBox" style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default Extras;
