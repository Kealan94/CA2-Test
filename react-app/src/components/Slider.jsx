import React    from 'react';
import Carousel from 'react-bootstrap/Carousel';

 

class Slider extends React.Component {

  render() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
        
          />
      
          <Carousel.Caption>
        
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"

            alt="Third slide"
          />
      
          <Carousel.Caption>

            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

}

export default Slider;