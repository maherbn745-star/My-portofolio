const { useState, useEffect } = React;

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <a
            href="#"
            className={`back-to-top ${isVisible ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToTop() }}
        >
            <i className="fas fa-arrow-up"></i>
        </a>
    );
};

window.BackToTop = BackToTop;
