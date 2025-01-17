import PropTypes from 'prop-types';


const LangageComponent = ({ imgLangages }) => {
  return (
    <div className="imgProject" aria-label="langage de programmation">
      {imgLangages.map(function (langage) {
        return (
          <div key={langage.id} className="langage-container">
            <img src={langage.img} alt={langage.alt} aria-label={langage.alt} />
            <div className="tip">{langage.tips}</div>
          </div>
        )
      })}
    </div>
  );
};


LangageComponent.propTypes = {
  imgLangages: PropTypes.array.isRequired, // Déclare que 'title' est une chaîne de caractères et est requis
  
};

export default LangageComponent;
