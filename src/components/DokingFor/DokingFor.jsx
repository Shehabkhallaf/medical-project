import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../../assets/images/doking.jpg';
import logo2 from '../../assets/images/doking2.jpg';
import logo3 from '../../assets/images/doking3.jpg';
import logo4 from '../../assets/images/doking4.jpg';

export default function DokingFor() {
  return (
    <div className='doking-for w-100'>
      <Carousel>
      <Carousel.Item interval={1000}>
        <h2 className='carousel-item-header'>Doking steps</h2>
        <img
          className="d-block w-100"
          src={logo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Upload Your molecules or</h3>
          <h3>Search for them.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <h2 className='carousel-item-header'>Doking steps</h2>

        <img
          className="d-block w-100"
          src={logo2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>Ligands Energy</h3>
          <h3>Minimization.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo3}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className="section1">
          <h3>Protein Preparation through the following steps: add hydrogen, remove water, make the protein sequence as a single chain, and select an active site.</h3>
          </div>
          <div className="section2">
          <h3>After preparation</h3>
          </div>
          <div className="section3">
          <h3>Before preparation</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h2 className='carousel-item-header'>Doking Calculation Score.</h2>
        <img
          className="d-block w-100"
          src={logo4}
          alt="Third slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
