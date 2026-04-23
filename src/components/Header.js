const { useState, useEffect } = React;

const Header = () => {
    const [active, setActive] = useState('home');
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLightMode, setIsLightMode] = useState(() => {
        return localStorage.getItem('theme') === 'light';
    });

    useEffect(() => {
        if (isLightMode) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [isLightMode]);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);

            const sections = document.querySelectorAll('section');

            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    setActive(id);
                };
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        const newMode = !isLightMode;
        setIsLightMode(newMode);
        localStorage.setItem('theme', newMode ? 'light' : 'dark');
    };

    return (
        <header className={`header ${isSticky ? 'sticky' : ''}`}>
            <a href="#" className="logo">MM<span className="highlight">.</span></a>

            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <a href="#home" className={active === 'home' ? 'active' : ''} onClick={() => { setActive('home'); setMenuOpen(false) }}>Home</a>
                <a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => { setActive('about'); setMenuOpen(false) }}>About</a>
                <a href="#education" className={active === 'education' ? 'active' : ''} onClick={() => { setActive('education'); setMenuOpen(false) }}>Education</a>
                <a href="#skills" className={active === 'skills' ? 'active' : ''} onClick={() => { setActive('skills'); setMenuOpen(false) }}>Skills</a>
                <a href="#projects" className={active === 'projects' ? 'active' : ''} onClick={() => { setActive('projects'); setMenuOpen(false) }}>Projects</a>
                <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={() => { setActive('contact'); setMenuOpen(false) }}>Contact</a>
            </nav>

            <div className="header-actions">
                <div className="theme-toggle" id="theme-toggle" onClick={toggleTheme} title="Toggle Dark/Light Mode">
                    <i className={`fas ${isLightMode ? 'fa-moon' : 'fa-sun'}`}></i>
                </div>

                <div className={`menu-icon ${menuOpen ? 'fa-times' : ''}`} id="menu-icon" onClick={toggleMenu}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </header>
    );
};

window.Header = Header;
