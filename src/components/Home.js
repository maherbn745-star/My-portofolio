const Home = () => (
    <section className="home" id="home">
        <div className="home-content hidden">
            <h3>Hello, It's Me</h3>
            <h1>Mohamed Maher</h1>
            <h3>And I'm a <span className="text-animate">Junior Front-End Engineer</span></h3>
            <p>I build immersive, user-centric web experiences with modern technologies. Passionate about clean code,
                pixel-perfect design, and smooth interactions.</p>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/bn-maher-83098332b" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/mohamed.maher.223686/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://wa.me/201556721544" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/mohvmed_mvher/?__pwa=1#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
            <a href="#contact" className="btn">Let's Talk</a>
        </div>
        <div className="home-img hidden">
            <div className="glowing-circle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="image">
                    <img src="assets/profile.jpg" alt="Profile Photo" />
                </div>
            </div>
        </div>
    </section>
);

window.Home = Home;
