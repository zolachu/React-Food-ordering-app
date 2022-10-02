import styles from "./MealsCarousel.module.css";
import Carousel from "react-bootstrap/Carousel";
import taiwaneseBoba from "../../assets/taiwaneseBoba.jpg";
import bobacups from "../../assets/bobaTea.jpg";
import bobacups2 from "../../assets/bobaTea2.jpg";

const MealsCarousel = (props) => {
  return (
    // <section className={styles.summary}>
    <Carousel className={styles.carousel}>
      <Carousel.Item className={styles.carouselItem}>
        <img className="d-block w-100" src={taiwaneseBoba} alt="First slide" />
        <Carousel.Caption>
          <h3>Delicious Boba</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img className="d-block w-100" src={bobacups} alt="First slide" />
        <Carousel.Caption>
          <h3>Delicious Boba</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img className="d-block w-100" src={bobacups2} alt="First slide" />
        <Carousel.Caption>
          <h3>Delicious Boba</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // </section>
  );
};

export default MealsCarousel;
