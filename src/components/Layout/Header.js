import styles from "./Header.module.css";
import bobaImage from "../../assets/boba.jpg";
import HeaderCart from "./HeaderCart";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  return (
    <Navbar className={styles.header}>
      <Container fluid>
        <Navbar.Brand className="ms-2">
          <img src={bobaImage} alt="boba" className="d-inline-block" />{" "}
          <span className={styles.brandName}>Bobachu</span>
        </Navbar.Brand>
        <Nav></Nav>
        <Nav className="me-3">
          <HeaderCart />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
