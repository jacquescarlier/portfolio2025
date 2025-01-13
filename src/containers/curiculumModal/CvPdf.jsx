import * as React from "react";

const Curiculum = () => {
  const handlePrint = () => {
    window.print();
  };
  window.scrollTo(0, 0);
  return (
    <div className=" modalContainer">
      <button className="imprimerPdf" onClick={handlePrint}>
        Imprimer
      </button>
      <div className="retour">
        <object
          data="./cv2024-1.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            Alternative text - include a link{" "}
            <a href="./cv2024-1.pdf">to the PDF!</a>
          </p>
        </object>
      </div>
    </div>
  );
};

export default Curiculum;
