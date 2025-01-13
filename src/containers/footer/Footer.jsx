import { Modal } from 'react-responsive-modal';
import Curiculum from "../curiculumModal/CvPdf";
import { useState, useRef } from "react";
import BackLinks from "../../components/backLinks/BackLinks";
function Footer() {

  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = (id) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <footer>
        <ul className="socialMediaLinks">
          <li> <a href="https://github.com/jacquescarlier/" target="_blank" rel="noopener" title= " mon Github"> <img src="./images/github.webp" alt="logo github" aria-label="liens vers mon github" /> </a> </li>
          <li><a href="https://www.linkedin.com/in/jacques-carlier-9a39121bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener" title=" mon Linkedin"> <img src="./images/linkedin.png" alt="logo linkedin" aria-label="liens vers mon Linkedin" /> </a></li>
          <li><a href="https://monsite-eta.vercel.app/" target="_blank" rel="noopener" title="mon site de liens"> <img src="./images/pinguoin.png" alt="logo linkedin" aria-label="liens vers mon site de liens" /> </a></li>
          <li><a href="#" onClick={() => openModal()} title="Curriculum Vitae"><img src="./images/logoCV.webp" alt="logo email" id="email"  aria-label="liens vers curriculum-vitae"/></a></li>
        </ul>
        <span className="button"><a href="#top">Back To Top</a></span>
        <BackLinks />
      </footer>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        ref={modalRef}
        center
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={1000}
      >
        <div>
          <Curiculum />
        </div>
      </Modal>
    </>
  );
}
export default Footer;
