import Carousel from 'react-bootstrap/Carousel';



function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src="https://i.pinimg.com/736x/cc/42/6e/cc426e863461cc3d44e8153c0a8e568b.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://i.pinimg.com/736x/cc/42/6e/cc426e863461cc3d44e8153c0a8e568b.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://i.pinimg.com/736x/cc/42/6e/cc426e863461cc3d44e8153c0a8e568b.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;