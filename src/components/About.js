const About = () => (
    <section className="about" id="about">
        <div className="about-container hidden">
            <div className="about-card">
                <div className="about-img-box">
                    <div className="about-img">
                        <img src="assets/profile.jpg" alt="About Me" />
                        <span className="circle-spin"></span>
                        <span className="circle-spin second"></span>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="heading">About <span className="highlight">Me</span></h2>
                    <h3>Junior Front-End Engineer!</h3>
                    <p>I am a Junior Front-End Engineer with a strong foundation in modern web technologies and a
                        keen eye for design. My expertise lies in building responsive, high-performance, and visually
                        stunning web applications using individual HTML, CSS, and pure JavaScript. I thrive on
                        solving complex problems and constantly pushing the boundaries of what's possible in the
                        browser.</p>

                    <div className="about-info">
                        <div className="info-box">
                            <i className="fas fa-code"></i>
                            <h4>Experience</h4>
                            <span>2+ Years</span>
                        </div>
                        <div className="info-box">
                            <i className="fas fa-briefcase"></i>
                            <h4>Projects</h4>
                            <span>15+ Completed</span>
                        </div>
                        <div className="info-box">
                            <i className="fas fa-headset"></i>
                            <h4>Support</h4>
                            <span>Online 24/7</span>
                        </div>
                    </div>

                    <div className="btn-box">
                        <a href="#" className="btn">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

window.About = About;
