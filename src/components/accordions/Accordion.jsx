import  { useState, useEffect } from "react";
import Arrow from "../../pictures/logo/arrow-down.webp";
import PropTypes from 'prop-types';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let timeoutId;
    // Vérifier si l'accordéon est actuellement fermé
    if (!isActive) {
      timeoutId = setTimeout(() => {
        setIsActive(true);
      }, 1000);
    }
    // Nettoyer le timeout lorsqu'un nouveau rendu se produit ou lorsque le composant est démonté
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isActive]);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={handleClick}>
        <div className="dropdownTitle">{title}</div>
        <div className="arrow">
          {" "}
          <img
            src={Arrow}
            alt="Flèche pour afficher le description"
            className={isActive ? "rotated" : "arrow"}
          />
        </div>
      </div>
      <div className={isActive ? "accordion-content-active" : "accordion-content"}>
        {content}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired, // Déclare que 'title' est une chaîne de caractères et est requis
  content: PropTypes.object.isRequired,
};

export default Accordion;
