const Contact = () => (
    <section className="contact" id="contact">
        <h2 className="heading hidden">Contact <span className="highlight">Me</span></h2>
        <div className="contact-container hidden">
            <div className="contact-card contact-social-card">
                <h3>Let's Connect</h3>
                <p>Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                <div className="social-media contact-social">
                    <a href="https://www.linkedin.com/in/bn-maher-83098332b" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.facebook.com/mohamed.maher.223686/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://wa.me/201556721544" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/mohvmed_mvher/?__pwa=1#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </section>
);

window.Contact = Contact;
