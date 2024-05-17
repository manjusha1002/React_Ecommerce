import logo1 from '../assets/newimage.jpg';
import logo2 from '../assets/dress.jpg';
import logo3 from '../assets/new dress.jpg';
import Carousel from "react-bootstrap/Carousel";

function Header() {
    return (
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>New Collections</h3>
                        <p>Flipkart sale is live now</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-30"
                        src={logo2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Festive Season</h3>
                        <p>Buy these product at 50% off</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Diwali Sale</h3>
                        <p>
                            Buy ethenic wear at discount of 60% </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

    );
}

export default Header;