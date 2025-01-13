import React from "react";
import Accordion from "../accordions/Accordion";

const title = ["Description", "Langages"];

const PortfolioDropdown = ({ description, langages }) => {
  return (
    <section className="accordionSection ">
      <div className="accordionBody">
        <Accordion
          key={title}
          title={title[0]}
          content={<p>{description}</p>}
        />
      </div>
      <div className="accordionBody">
        <Accordion
          key={title}
          title={title[1]}
          content={
            <ul>
              {langages.map((langage) => (
                <li key={langage}>
                  <img src={langage} alt={langage} />
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
};
export default PortfolioDropdown;
