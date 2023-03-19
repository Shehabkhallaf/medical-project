import React from 'react'
import portfolio1 from '../../assets/images/portfolio1.jpg'
import portfolio2 from '../../assets/images/portfolio2.jpg'
import portfolio3 from '../../assets/images/portfolio3.jpg'
import portfolio4 from '../../assets/images/portfolio4.jpg'
import 'animate.css';

export default function Home() {

    return (
        <div>
            <div className='header' id="hero">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner container carousel carousel-fade">
                        <div className="carousel-item active">
                            <div className="carousel-container">
                                <h2 className='animate__animated animate__backInDown'>Lorem, ipsum dolor.1</h2>
                                <p className="animate__animated animate__fadeInUp animate__backInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum dignissimos quibusdam dicta, animi optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, harum?</p>
                                <button className="btn-get-started animate__animated animate__fadeInUp animate__backInUp">Read more</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-container">
                                <h2 className='animate__animated animate__backInDown'>Lorem, ipsum dolor.2</h2>
                                <p className="animate__animated animate__fadeInUp animate__backInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum dignissimos quibusdam dicta, animi optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, harum?</p>
                                <button className="btn-get-started animate__animated animate__fadeInUp animate__backInUp">Read more</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-container">
                                <h2 className='animate__animated animate__backInDown'>Lorem, ipsum dolor.3</h2>
                                <p className="animate__animated animate__fadeInUp animate__backInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum dignissimos quibusdam dicta, animi optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, harum?</p>
                                <button className="btn-get-started animate__animated animate__fadeInUp animate__backInUp">Read more</button>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            <div className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className='animate__animated animate__flip'>PORTFOLIO</h2>
                            <p className="content-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="row animate__animated animate__fadeInUpBig">
                        <div className="col-lg-3">
                            <div className="section">
                                <div className="section-photo"><img src={portfolio1} alt="" /></div>
                                <div className="section-content">
                                    <h4>Lorem impsum dolor</h4>
                                    <p><span>Lorem, ipsum. </span>18 Sep. 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="section">
                                <div className="section-photo"><img src={portfolio2} alt="" /></div>
                                <div className="section-content">
                                    <h4>Lorem impsum dolor</h4>
                                    <p><span>Lorem, ipsum. </span>18 Sep. 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="section">
                                <div className="section-photo"><img src={portfolio3} alt="" /></div>
                                <div className="section-content">
                                    <h4>Lorem impsum dolor</h4>
                                    <p><span>Lorem, ipsum. </span>18 Sep. 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="section">
                                <div className="section-photo"><img src={portfolio4} alt="" /></div>
                                <div className="section-content">
                                    <h4>Lorem impsum dolor</h4>
                                    <p><span>Lorem, ipsum. </span>18 Sep. 2018</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="rates">
                <div className="container">
                    <div className="rat">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="rate">
                                    <h2>555</h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="rate">
                                    <h2>222</h2>
                                    <p>Projects Finished</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="rate">
                                    <h2>444</h2>
                                    <p>Awards Won</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="rate">
                                    <h2>777</h2>
                                    <p>Drinked Pepsi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
