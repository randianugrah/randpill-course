import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Randpill</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              earum at necessitatibus molestias nobis nesciunt veritatis commodi
              error similique nisi.
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 8137 192 9440 </p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">randinugrah@gmail.com </p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h3 className="fw-bold">Menu</h3>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">Faq</Link>
            <Link to="syaratketentuan">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe Untuk Info Menarik</h5>
            <div className="subcribes">
              <input type="text" placeholder="Subcribe.." />
              <button className="btn btn-danger rounded-end rounded-0">
                Subcribe
              </button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <p className="text-center px-md-0 px-3">
            &copy; Copyright {new Date().getFullYear()} by{" "}
            <strong>Randpill</strong>, All Right Reserved
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
