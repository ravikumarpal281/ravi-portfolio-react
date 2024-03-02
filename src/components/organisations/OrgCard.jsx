import React from "react";
import { GoDot } from "react-icons/go";
import "./organisations.css";

const OrgCard = (props) => {
  return (
    <div className="container companies__container">
      <article className="company">
        <div className="company_head">
          <h3>{props.company}</h3>
        </div>

        <ul className="roles__list">
          <li>
            <GoDot className="roles__list-icon"></GoDot>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoDot className="roles__list-icon"></GoDot>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoDot className="roles__list-icon"></GoDot>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          <li>
            <GoDot className="roles__list-icon"></GoDot>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default OrgCard;
