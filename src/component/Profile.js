function Profile() {
    return (
     <>
            <header id="header" >
                <div className="container-fluid d-flex">

                    <div className="logo mr-auto">
                        <h1 className="text-light"><a href="index.html"><span>Ninestars</span></a></h1>
                        {/* <a href="index.html"><img src="../public/assets/img/logo.png" alt="" className="img-fluid" /></a> */}
                    </div>
                    <div className="header-links">
                        <div className="social-links mt-3">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                </div>
            </header>
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>Hi , I am Moushree Debnath</h1>
                            <h2>We are team of talanted designers making websites with Bootstrap</h2>
                            <a href="file:///C:/Users/User/Downloads/Marvel%20Free%20Website%20Template%20-%20Free-CSS.com/2115_marvel/index.html" target="_blank" className="btn-get-started scrollto"><i className='bx bx-file'></i> download resume</a>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="assets/img/hero-img.svg" className="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container">

                        <div className="row justify-content-between">
                            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                <img src="assets/img/about-img.svg" className="img-fluid" alt="" data-aos="zoom-in"/>
                            </div>
                            <div className="col-lg-6 pt-5 pt-lg-0">
                                <h3 data-aos="fade-up">What I do</h3>
                                <p data-aos="fade-up" data-aos-delay="100">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                </p>
                                <div className="row skill-img">
                                    <div className="skill-box col-4">
                                        <div className="skill-title">
                                            <div className="img">
                                                <img src="assets/img/portfolio/html3.png"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-box col-4">
                                        <div className="skill-title">
                                            <div className="img">
                                                <img src="assets/img/portfolio/css2.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-box col-4">
                                        <div className="skill-title">
                                            <div className="img">
                                                <img src="assets/img/portfolio/js4.png"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-box col-4">
                                        <div className="skill-title">
                                            <div className="img">
                                                <img src="assets/img/portfolio/react.jpg"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-box col-4">
                                        <div className="skill-title">
                                            <div className="img">
                                                <img src="assets/img/portfolio/react-redux.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="skill-list" className="skill-list">
                                    <ul className="list">
                                        <li data-aos="fade-up" data-aos-delay="200">
                                            <p>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="icofont-simple-up"></i></p>
                                        </li>
                                        <li data-aos="fade-up" data-aos-delay="300">
                                            <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="icofont-simple-up"></i></p>
                                        </li>
                                        <li data-aos="fade-up" data-aos-delay="400">
                                            <p>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="icofont-simple-up"></i></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="proficiency" className="proficiency section-bg">
                    <div className="container">
                        <div className="section-title">
                            <p>Proficiency</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="circle">
                                        <div className="bar"></div>
                                        <div className="box"><span></span></div>
                                    </div>
                                    <div className="text">Frontend</div>
                                </div>
                            </div>
                            <div className="col-md-4 align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box backend">
                                    <div className="circle">
                                        <div className="bar"></div>
                                        <div className="box"><span></span></div>
                                    </div>
                                    <div className="text">Backend</div>
                                </div>
                            </div>
                            <div className="col-md-4 align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box programming">
                                    <div className="circle">
                                        <div className="bar"></div>
                                        <div className="box"><span></span></div>
                                    </div>
                                    <div className="text">Programming</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="education" className="education">
                    <div className="container">
                        <div className="section-title">
                            <p>Education</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 details">
                                <h4 className="title">Camellia Institute Of Technology</h4>
                                <p>Bachalor Of Technology in Computer Science And Engineering</p>
                                <p className="year">August 2016-July 2020</p>
                                <p>Completed My B.Tech on Information Technology with Aggregate of 8.23 CGPA</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 education-img">
                                <img src="assets/img/education-img.png" className="img-fluid animated" alt="education-img"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="experience" className="experience section-bg">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <p>Experience</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className='bx bxs-briefcase-alt-2'></i></div>
                                    <h4 className="title"><a href="">Wipro</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                                </div>
                            </div>



                        </div>

                    </div>
                </section>
                <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <p>Projects</p>
                        </div>



                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className='bx bxl-github'></i></a>
                                            <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                        </div>
                                        <div className="portfolio-info">
                                            <h4>App 1</h4>
                                            <p>App</p>
                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className='bx bxl-github'></i></a>
                                            <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                        </div>
                                        <div className="portfolio-info">
                                            <h4>Web 3</h4>
                                            <p>Web</p>
                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className='bx bxl-github'></i></a>
                                            <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                        </div>
                                        <div className="portfolio-info">
                                            <h4>App 2</h4>
                                            <p>App</p>
                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6 footer-contact">
                                <h3>Reach Out to me!</h3>
                                <p>
                                    DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL<br/><br/>
                                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                                    <strong>Email:</strong> info@example.com<br/>
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>My Social Networks</h4>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 profile-img">
                                <img src="assets/img/profile.png" alt="profile-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
        </>
    );
  }
    document.addEventListener('scroll',()=>{
    const header = document.querySelector('header');

    if(window.scrollY>0)
    {
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
    })

    // let options = {
    //     startAngle: -1.55,
    //     size: 150,
    //     value: 0.85,
    //     fill: {gradient: ['#eb5d1e']}
    //   }
    //   $(".circle .bar").circleProgress(options).on('circle-animation-progress',
    //   function(event, progress, stepValue){
    //     $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    //   });
    //   $(".backend .bar").circleProgress({
    //     value: 0.70
    //   });
    //   $(".programming .bar").circleProgress({
    //     value: 0.90
    //   });   
export default Profile;