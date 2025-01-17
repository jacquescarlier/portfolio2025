import { useRef } from "react";
import { Modal } from 'react-responsive-modal';
import { useState } from "react";
import Carousel from '../../components/carousel/Carousel.jsx'
import 'react-responsive-modal/styles.css';
import PortfolioDetail from "../../components/portfolioDetail/PortfolioDetail.jsx";
import PortfolioDropdown from "../../components/portfolioDropdown/PortfolioDropdown.jsx";
import "./custom-animation.css"
import PropTypes from 'prop-types';

function CardModal({ projects }) {
console.log(projects)
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const modalRef = useRef(null);

    const openModal = (id) => {
        setSelectedItem(projects.find(project => project.id === id));
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
/* srcSet= {`${project.srcsetlow} 576w, $ {project.cover} 1024w`}
 fetchpriority="high" as="image" 
*/
    return (
        <>
            <h2 className="cardProjectTitle">Projects</h2>
            <div className="card-style" id="project">
                {projects.map(project => (
                    <div key={project.id} className="card" onClick={() => openModal(project.id)} aria-label={project.alt}>
                        <img
                            src={project.cover}
                            alt={project.alt}
                            style={{ cursor: 'pointer' }}
                        />
                        <h3 className="card-title">{project.title}</h3>
                    </div>
                ))}
                <Modal
                    ref={modalRef}
                    open={modalOpen}
                    onClose={closeModal}
                    initialFocusRef={modalRef}
                    center
                    classNames={{
                        overlayAnimationIn: 'customEnterOverlayAnimation',
                        overlayAnimationOut: 'customLeaveOverlayAnimation',
                        modalAnimationIn: 'customEnterModalAnimation',
                        modalAnimationRotate: 'customEnterModalRotate',
                        modalAnimationOut: 'customLeaveModalAnimation',
                    }}
                    animationDuration={800}
                >
                    {selectedItem && (
                        <div className="modalContainer">
                            <Carousel pictures={selectedItem.pictures} title={selectedItem.title} />
                            <PortfolioDetail project={selectedItem.project} title={selectedItem.title} tags={selectedItem.tags} />
                            <PortfolioDropdown description={selectedItem.description} langages={selectedItem.logos} />
                            <button className="closeModal" onClick={closeModal}>Fermer</button>
                        </div>
                    )}
                </Modal>
            </div>
        </>
    );
}


CardModal.propTypes = {
  projects: PropTypes.array.isRequired, // Déclare que 'title' est une chaîne de caractères et est requis
  
};

export default CardModal;
