import Accordion from "../accordions/Accordion";
import PropTypes from 'prop-types';

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

PortfolioDropdown.propTypes = {
  description: PropTypes.string.isRequired,
  langages: PropTypes.array.isRequired,
};

export default PortfolioDropdown;
