import React from "react";

function GradientSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="746"
      height="746"
      fill="none"
      viewBox="0 0 746 746"
    >
      <ellipse
        cx="373"
        cy="373"
        fill="url(#paint0_radial_2233_414)"
        rx="373"
        ry="373"
        transform="rotate(90 373 373)"
      ></ellipse>
      <defs>
        <radialGradient
          id="paint0_radial_2233_414"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(40.937 -401.773 545.703) scale(408.22)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7453F8"></stop>
          <stop offset="0" stopColor="#7352F5" stopOpacity="0.99"></stop>
          <stop offset="1" stopColor="#18171F" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default GradientSvg;
