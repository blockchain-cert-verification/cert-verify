import React from "react";
import PropTypes from "prop-types";

function Certificate(props) {
  const { title = "Masters of Computer Application", name="Shruti Mishra", date = "22-09-2021", hash="08983v73687v873bmjsh86", logo="https://upload.wikimedia.org/wikipedia/en/4/4e/Indira_Gandhi_Delhi_Technical_University_for_Women_logo.png" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1050"
      height="700"
      id="certificate"
    >
      <rect
        x="150"
        y="110"
        rx="20"
        ry="20"
        width="800"
        height="500"
        id="border"
        fill="#feffc4"
        stroke="pink"
        strokeWidth="3px"
        stroke-dasharray="10,10"
        fontFamily="Times New Roman"
      />
      <text x="550" y="150" text-anchor="middle" fill="black" id="bodyTitle" fontFamily="cursive">
        Certificate
      </text>
      <text x="550" y="175" text-anchor="middle" fill="black" id="bodySubTitle" fontFamily="cursive">
        of
      </text>
      <line x1="250" y1="250" x2="750" y2="260" id="titleUnderLine" />
      <text x="550" y="240" text-anchor="middle" fill="black" id="title" fontSize="25px" fontFamily="cursive" fontWeight="bold" fontStyle="italic" text-decoration="underline">
        {title}
      </text>
      <text
        x="550"
        y="300"
        text-anchor="middle"
        fill="black"
        id="subTitleHeader"
        fontFamily="cursive"
      >
        awarded to
      </text>
      <text x="550" y="350" text-anchor="middle" fill="black" id="name" fontSize="25px" fontFamily="cursive" fontWeight="bold" fontStyle="italic" text-decoration="underline">
        {name}
      </text>
      <line x1="250" y1="410" x2="800" y2="410" color="black" id="titleUnderLine" />
      <text x="550" y="400" text-anchor="middle" fill="black" id="bodySubTitle" fontFamily="cursive">
        on
      </text>
      <text x="550" y="450" text-anchor="middle" fill="black" id="date" fontWeight="bold"  fontFamily="cursive">
        {date}
      </text>
      <line x1="450" y1="510" x2="600" y2="510" id="titleUnderLine" />
      <text x="250" y="550" text-anchor="start" fill="black" id="hash"  fontWeight="bold" fontStyle="italic" fontFamily="cursive">
        ID: {hash}
      </text>
      <image
        x="725"
        y="480"
        height="100px"
        width="100px"
        id="logo"
        href={logo}
      />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
}

Certificate.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
}

export default Certificate;