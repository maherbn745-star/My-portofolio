const Education = () => (
    <section className="education" id="education">
        <h2 className="heading hidden">My <span className="highlight">Education</span></h2>
        <div className="education-container hidden">
            <div className="about-card education-card">
                <div className="about-img-box">
                    <div className="about-img education-icon-box">
                        <i className="fas fa-university" style={{ fontSize: '8rem', color: 'var(--main-color)' }}></i>
                        <span className="circle-spin"></span>
                        <span className="circle-spin second"></span>
                    </div>
                </div>
                <div className="about-content">
                    <h3>Faculty of Computer Science</h3>
                    <p style={{ fontSize: '2rem', marginBottom: '2rem' }}>Obour University</p>
                    <p>Focused on advanced computing concepts, software engineering, and modern web architectures. Building a strong foundation in problem-solving and algorithmic thinking within a professional academic environment.</p>
                </div>
            </div>
        </div>
    </section>
);

window.Education = Education;
