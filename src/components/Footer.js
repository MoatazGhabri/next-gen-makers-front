import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import phone & email icons

export const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#0d1117", color: "#ffffff", padding: "40px 20px" }}>
      <Container>
        <Row>
          {/* Left Column */}
          <Col sm={12} md={4}>
            <img src={logo} alt="Logo" style={{ width: "120px", marginBottom: "20px" }} />
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
              <li>UX/UI Design</li>
              <li>Développement web</li>
              <li>Site Vitrine</li>
              <li>Site E-commerce</li>
              <li>Développement Mobile</li>
              <li>Création des Affiches</li>
              <li>Création des Logos</li>
            </ul>
          </Col>

          {/* Middle Column */}
          <Col sm={12} md={4}>
           
          </Col>

          {/* Right Column */}
          <Col sm={12} md={4}>
            <h5>Contactez-nous</h5>
            <p>
              <FaPhoneAlt style={{ marginRight: "8px" }} /> +216 52 030 150
            </p>
            <p>
              <FaEnvelope style={{ marginRight: "8px" }} /> nextgenmakers.contact@gmail.com
            </p>
            <div className="social-icon" style={{ marginTop: "20px" }}>
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center mt-4">
            <p>© 2024 Next Gen Makers. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
