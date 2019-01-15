import React from "react";
import Rainbow from "../HOC/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
        laudantium, tempore adipisci perspiciatis itaque impedit praesentium
        reprehenderit! Iste natus cumque nesciunt veniam, obcaecati quidem
        dolorum unde, iusto tenetur, laudantium est.
      </p>
    </div>
  );
};

export default Rainbow(About);
