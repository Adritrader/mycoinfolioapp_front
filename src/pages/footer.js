import React from 'react';


class Footer extends React.Component {

    render() {

        return (

                        <footer id="dk-footer" className="dk-footer bg-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-4">
                                        <div className="dk-footer-box-info">
                                            <div className="row d-flex justify-content-center">
                                    
                                            <a href="/" className="d-flex footer-logo justify-content-center">
                                                <img src="img/logo-mycoinfolio.png" width="80" height="80" alt="footer_logo" className="mt-4" />
                                            </a>
                                            </div>
                                            <p className="footer-info-text px-3 mt-2">
                                                Reference site cryptocurrencies, news and investor tools.
                                            </p>
                                            <div className="px-3 mb-1">
                                                <h3 className='text-dark'>Follow us</h3>
                                                <ul>
                                                    <div className="col-md-12">
                                                        <ul className="social-network social-circle">
                                                            <li><a href="#" className="icoFacebook" title="Facebook"><i
                                                                className="fab fa-facebook-f"></i></a></li>
                                                            <li><a href="#" className="icoTwitter" title="Twitter"><i
                                                                className="fab fa-twitter"></i></a></li>
                                                            <li><a href="#" className="icoGoogle" title="Google +"><i
                                                                className="fab fa-google-plus"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-12 col-lg-8">
                                        <div className="row">

                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 col-lg-6">
                                                <div className="footer-widget footer-left-widget">
                                                    <div className="section-heading">
                                                        <h3>Useful Links</h3>
                                                        <span className="animate-border border-black"></span>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="#">About us</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Services</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Projects</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Our Team</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a href="#">Contact us</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Blog</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Testimonials</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Faq</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>

                                            <div className="col-md-12 col-lg-6">
                                                <div className="footer-widget">
                                                    <div className="section-heading">
                                                        <h3>Subscribe</h3>
                                                        <span className="animate-border border-black"></span>
                                                    </div>
                                                    <p className={'text-white-50'}>
                                                        Get crypto analysis, news and updates right to your inbox!
                                                        Sign up here so you don't miss a single newsletter.</p>
                                                    <form action="#">
                                                        <div className="form-row">
                                                            <div className="col dk-footer-form">
                                                                <input type="email" className="form-control" placeholder="Email Address" />
                                                                <button type="submit" className="h-80">
                                                                    <i className="far
                                                                       fa-paper-plane ml-3"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>



                            <div className="copyright">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <span>Copyright © 2021, All Right Reserved VaporRick</span>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="copyright-menu">
                                                <ul>
                                                    <li>
                                                        <a href="#">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Terms</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Privacy Policy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Contact</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div id="back-to-top" className="back-to-top">
                                <button className="btn btn-dark" title="Back to Top">
                                    <i className="fa fa-angle-up"></i>
                                </button>
                            </div>
                        </footer>

        );

    }

}

export default Footer;