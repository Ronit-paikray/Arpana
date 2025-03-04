import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://maps.app.goo.gl/HQg6gMPpAJ445cda6" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>TDDD, Odisha, India</p></a>
                            <a href="tel:+91-7815058462"><p><i className="fa fa-phone"></i>+91-7815058462</p></a>
                            <a href="mailto:Ronitpaikray@gmail.com"><p><i className="fa fa-envelope"></i>Ronitpaikray@gmail.com</p></a>
                            <div className="footer-social">
                                <a className="btn btn-custom" href="https://x.com/cutmindia?lang=en"><i className="fab fa-x-twitter"></i></a>
                                <a className="btn btn-custom" href="https://www.facebook.com/centurionuniversity/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom" href="https://www.instagram.com/_cutm_/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom" href="https://www.youtube.com/channel/UCy2a2NdleGSGlEd5FxyOcOA"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-custom" href="https://in.linkedin.com/school/centurion-university-of-technology-and-management/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/event">Popular Causes</a>
                            <a href="/event">Upcoming Events</a>
                            <a href="#">Latest Blog</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Useful Links</h2>
                            <a href="#">Terms of use</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Cookies</a>
                            <a href="#">Help</a>
                            <a href="#">FQAs</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Email goes here" autoComplete='email' required/>
                                <button className="btn btn-custom">Submit</button>
                                <h6>Don't worry, we don't spam!</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="#">Arpana</a> | 2025, All Right Reserved.</p>
                    </div>
                      <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="https://www.google.com/maps/place/SURYA+DIGITALS+%26+FLEX+ZONE/@18.7663222,84.0880139,749m/data=!3m1!1e3!4m6!3m5!1s0x3a3cf7ba59fc8e23:0x16680c3cdada56ef!8m2!3d18.7662922!4d84.0907143!16s%2Fg%2F11lznzvfsx?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">Surya Digitals</a> | Media Partner.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://the-desi-digital-defender.blogspot.com/">TDDD, Bhubaneswar, Odisha</a></p>
                    </div>
                </div>
            </div>
        </ div>
    );
}
