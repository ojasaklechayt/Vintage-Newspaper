import "./sectionone.css";
import ojas from "../../assets/ojasinhd.jpg";
const Sectionone = () => {
    return (
        <div className="section-one">
            <div className="subsection-one">
                <img src={ojas} alt="Ojas Aklecha" />
            </div>
            <div className="subsection-two">
                <h1>Entitled for actions, not for fruit</h1>
            </div>
        </div>
    )
}

export default Sectionone