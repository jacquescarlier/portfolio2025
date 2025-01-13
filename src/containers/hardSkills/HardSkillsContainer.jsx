import LangageComponent from "../../components/langagesComponents/LangagesComponent"
import { imgLangages } from "../../datas/data"

export default function HardSkillsContainer() {
  return (
    <div className="projectTitle">
      <h2 className="bloc">
        <span className="letter01">H</span>
        <span className="letter02">A</span>
        <span className="letter03">R</span>
        <span className="letter04">D</span>
        <span className="letter05">-</span>
        <span className="letter06">S</span>
        <span className="letter07">K</span>
        <span className="letter08">I</span>
        <span className="letter09">L</span>
        <span className="letter10">L</span>
        <span className="letter11">S</span>
      </h2>
      <div className="content">
        <LangageComponent imgLangages={imgLangages} />
      </div>
    </div>
  )
}