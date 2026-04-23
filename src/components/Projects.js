const Projects = () => (
    <section className="projects" id="projects">
        <h2 className="heading hidden">Latest <span className="highlight">Projects</span></h2>
        <div className="projects-container">
            <div className="project-box hidden">
                <img src="https://via.placeholder.com/600x400/081b29/0ef?text=Project+1" alt="Project 1" />
                <div className="project-layer">
                    <h4>Web Design</h4>
                    <p>Modern and sleek portfolio design with smooth animations.</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div className="project-box hidden">
                <img src="https://via.placeholder.com/600x400/081b29/0ef?text=Project+2" alt="Project 2" />
                <div className="project-layer">
                    <h4>Mobile App</h4>
                    <p>Clean and intuitive mobile application interface.</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div className="project-box hidden">
                <img src="https://via.placeholder.com/600x400/081b29/0ef?text=Project+3" alt="Project 3" />
                <div className="project-layer">
                    <h4>E-Commerce</h4>
                    <p>Full-featured online shopping experience.</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
    </section>
);

window.Projects = Projects;
