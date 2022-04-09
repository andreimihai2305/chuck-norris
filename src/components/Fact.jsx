import React from "react";
import './Fact.css';

export default function Fact ({text}) {
  return (
    <div className="container">
        <p>{text}</p>
    </div>
  );
}
