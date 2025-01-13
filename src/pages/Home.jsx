import React from "react";
import Header from "../containers/header/Header";
import Banner from "../components/banner/Banner";
import HardSkillsContainer from "../containers/hardSkills/HardSkillsContainer";
import Footer from "../containers/footer/Footer";
import picture from "../pictures/banner_codeurL.webp";
import smallPicture from "../pictures/banner_codeur-mobile.webp"
import About from "../containers/about/About";
import { projects } from '../datas/data';
import Email from "../containers/contactEmail/Email";
import CardModal from "../containers/cardAndModal/CardModal";

const Home = () => {

  return (
    <div className="parallax">
      <div className="container-general">
        <Header />
        <Banner
          image={picture}
          smallImage={smallPicture}
          alt="photo écran de code"
          title1="Welcome !"
          title2="Hi, i'm Jacques, web integrator."
        />
        <HardSkillsContainer />
        <CardModal projects={projects} />
        <About />
        <Email />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
