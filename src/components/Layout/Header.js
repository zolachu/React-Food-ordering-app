import styles from "./Header.module.css";
import bobaImage from "../../assets/boba.jpg";
import HeaderCart from "./HeaderCart";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Navbar>
        <Container fluid>
          <Navbar.Brand className="ms-2">
            <img src={bobaImage} alt="boba" className="d-inline-block" />{" "}
            <span className={styles.brandName}>Bobachu</span>
          </Navbar.Brand>
          <Nav></Nav>
          <Nav className="me-3">
            <HeaderCart onShowCart={props.onShowCart} />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
