import { Carousel } from "react-bootstrap"
const Home =()=>{
    return(
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Official-Business-Flyer-Design-Free-PSD-1180x664.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>FLAYER</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.vistaprint.fr/hub/wp-content/uploads/sites/18/2022/01/Img-6-scaled.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>CARTE VISITE</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbor.comeup.com/unsafe/fit-in/630x354/filters:quality(90):no_upscale()/uploads/media/picture/2020-06-25/383099bf-72df-43ab-9db9-67d9208b6ba4.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default Home