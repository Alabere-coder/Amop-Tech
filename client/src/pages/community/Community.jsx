import React from "react";
import { useEffect, useState } from "react";

export default function Community() {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, );

  const change = () => {
    if (photo === 5) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return "../images/bg4.jpeg";
      case 2:
        return "../images/bg6.jpeg";
      case 3:
        return "../images/bg7.jpeg";
      case 4:
        return "../images/bg8.jpeg";
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${returnPhotoURL()})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
}

// import React from 'react'

// const Community = () => {
//   return (
//     <div>Community</div>
//   )
// }

// export default Community