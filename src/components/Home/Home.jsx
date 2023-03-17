import React from 'react'
import logo from '../../assets/images/logo.jpg'
import portfolio1 from '../../assets/images/portfolio1.jpg'
import portfolio2 from '../../assets/images/portfolio2.jpg'
import portfolio3 from '../../assets/images/portfolio3.jpg'
import portfolio4 from '../../assets/images/portfolio4.jpg'
import portfolio5 from '../../assets/images/portfolio5.jpg'
import portfolio6 from '../../assets/images/portfolio6.jpg'


export default function Home() {
    return (
        <div>
            <div className='header' id="hero">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner container carousel carousel-fade">
                        <div className="carousel-item active">
                            <div className="carousel-container">
                            <h2 className='animate__animated animate__fadeInDown'>Lorem, ipsum dolor.1</h2>
                            <p className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum dignissimos quibusdam dicta, animi optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, harum?</p>
                            <button className="btn-get-started animate__animated animate__fadeInUp">Read more</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-container">
                            <h2 className='animate__animated animate__fadeInDown'>Lorem, ipsum dolor.2</h2>
                            <p className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum dignissimos quibusdam dicta, animi optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, harum?</p>
                            <button className="btn-get-started animate__animated animate__fadeInUp">Read more</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-container">
                            <h2 className='animate__animated animate__fadeInDown'>Lorem, ipsum dolor.3</h2>
                            <p className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum dignissimos quibusdam dicta, animi optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, harum?</p>
                            <button className="btn-get-started animate__animated animate__fadeInUp">Read more</button>
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
            <div className='home d-flex justify-content-around align-items-center'>

                <div className='home-content'>
                    <h2><span>Molecular</span> Doking For</h2>
                    <h2>Durg Degisn</h2>
                </div>
                <div className='home-logo'>
                    <img src={logo} className='w-100' alt="" />
                </div>
            </div>
            <div class="portfolio">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center mb-5">
                            <h2>PORTFOLIO</h2>
                            <p class="content-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="section">
                                <div class="section-photo"><img src={portfolio1} alt="" /></div>
                                <div class="section-content">
                                    <h4>Lorem impsum dolor</h4>
                                    <p><span>Lorem, ipsum. </span>18 Sep. 2018</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="section">
                                <div class="section-photo"><img src={portfolio2} alt="" /></div>
                                <div class="section-content">
                                    <h4>Lorem impsum dolor</h4>
                                    <p><span>Lorem, ipsum. </span>18 Sep. 2018</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="section">
                                <div class="section-photo"><img src={portfolio3} alt="" /></div>
                                <div class="section-content">
                                    <h4>Lorem impsum dolor</h4>
                                    <p><span>Lorem, ipsum. </span>18 Sep. 2018</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="section">
                                <div class="section-photo"><img src={portfolio4} alt="" /></div>
                                <div class="section-content">
                                    <h4>Lorem impsum dolor</h4>
                                    <p><span>Lorem, ipsum. </span>18 Sep. 2018</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="section">
                                <div class="section-photo"><img src={portfolio5} alt="" /></div>
                                <div class="section-content">
                                    <h4>Lorem impsum dolor</h4>
                                    <p><span>Lorem, ipsum. </span>18 Sep. 2018</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="section">
                                <div class="section-photo"><img src={portfolio6} alt="" /></div>
                                <div class="section-content">
                                    <h4>Lorem impsum dolor</h4>
                                    <p><span>Lorem, ipsum. </span>18 Sep. 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
