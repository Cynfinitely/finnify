import React from "react";

const listening = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h2>Listening</h2>
      <ol>
        <li>
          <a href="https://yle.fi/selkouutiset">Selkouutiset</a>
        </li>
        <li>
          <iframe
            width="400"
            height="400"
            src="https://www.youtube.com/embed/Or0bohcTulI?list=PL632D60E299A69D9A"
            title="Kuulostaa Hyvältä - Sounds Good 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </li>
      </ol>
    </div>
  );
};

export default listening;
