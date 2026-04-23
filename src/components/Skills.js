const Skills = () => (
    <section className="skills" id="skills">
        <h2 className="heading hidden">My <span className="highlight">Skills</span></h2>
        <div className="skills-container hidden">
            <div className="skill-box">
                <i className="fab fa-html5"></i>
                <h3>HTML5</h3>
                <p>Structure</p>
            </div>
            <div className="skill-box">
                <i className="fab fa-css3-alt"></i>
                <h3>CSS3</h3>
                <p>Styling</p>
            </div>
            <div className="skill-box">
                <i className="fab fa-js"></i>
                <h3>JavaScript</h3>
                <p>Logic</p>
            </div>
            <div className="skill-box">
                <i className="devicon-cplusplus-plain colored"></i>
                <h3>C++</h3>
                <p>Development</p>
            </div>
            <div className="skill-box">
                <i className="fas fa-layer-group"></i>
                <h3>Data Structures</h3>
                <p>C++</p>
            </div>
            <div className="skill-box">
                <i className="fas fa-cubes"></i>
                <h3>OOP</h3>
                <p>C++</p>
            </div>
            <div className="skill-box">
                <i className="fas fa-brain"></i>
                <h3>Problem Solving</h3>
                <p>Codeforces</p>
            </div>
            <div className="skill-box">
                <i className="fas fa-diagram-project"></i>
                <h3>System Analysis</h3>
                <p>and Design</p>
            </div>
        </div>

        <h3 className="heading hidden soft-skills-heading">Soft <span className="highlight">Skills</span></h3>
        <div className="skills-container hidden soft-skills-container">
            <div className="skill-box soft-skill">
                <i className="fas fa-comments"></i>
                <h3>Communication</h3>
            </div>
            <div className="skill-box soft-skill">
                <i className="fas fa-lightbulb"></i>
                <h3>Problem Solving</h3>
            </div>
            <div className="skill-box soft-skill">
                <i className="fas fa-users"></i>
                <h3>Teamwork</h3>
            </div>
            <div className="skill-box soft-skill">
                <i className="fas fa-search"></i>
                <h3>Attention to Detail</h3>
            </div>
            <div className="skill-box soft-skill">
                <i className="fas fa-sync-alt"></i>
                <h3>Adaptability</h3>
            </div>
            <div className="skill-box soft-skill">
                <i className="fas fa-clock"></i>
                <h3>Time Management</h3>
            </div>
        </div>
    </section>
);

window.Skills = Skills;
