import { useState } from "react";
import PropTypes from "prop-types";
import ArrowRight from "../../pictures/logo/red_arrow_right1.png";
import ArrowLeft from "../../pictures/logo/red_arrow_left1.png";

const Carousel = ({ pictures, title , alt}) => {
  const pictureLength = pictures.length;
  const [currentPictureIndex, setcurrentPictureIndex] = useState(0);
  //counter display constant at  the bottom of the image "currentPictureIndex +1" because ID starts at 0
  const pictureCounter = `${currentPictureIndex + 1} / ${pictureLength}`;

  const nextPicture = () => {
    const nextIndex = currentPictureIndex + 1;
    setcurrentPictureIndex(nextIndex >= pictureLength ? 0 : nextIndex);
  };
  const previousPicture = () => {
    const prevIndex = currentPictureIndex - 1;
    setcurrentPictureIndex(prevIndex < 0 ? pictureLength - 1 : prevIndex);
  };
  //No direction arrow and counter if only one image
  const currentPicture = pictures[currentPictureIndex];
  if (pictures.length === 1) {
    return (
      <section className="carousel">
        <img src={currentPicture} alt={alt} className="carouselPicture" />
      </section>
    );
  }
  return (
    <section className="carousel">
      <img src={currentPicture} alt={title} className="carouselPicture" />
      <img
        src={ArrowRight}
        alt="Fléche droite "
        onClick={nextPicture}
        className="carouselArrow carouselArrowRight "
      ></img>
      <img
        src={ArrowLeft}
        alt="Fléche gauche"
        onClick={previousPicture}
        className="carouselArrow carouselArrowLeft"
      ></img>
      <div className="carouselCounter"> {pictureCounter}</div>
    </section>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired, // Validation pour la prop 'title',
  alt: PropTypes.string,
};

export default Carousel;
