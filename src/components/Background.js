const Background = () => {
    return (
        <React.Fragment>
            <div className="blob-container">
                <div className="blob blue"></div>
                <div className="blob purple"></div>
                <div className="blob green"></div>
                <div className="blob cyan"></div>
            </div>
            <div className="bg-noise"></div>
        </React.Fragment>
    );
};

window.Background = Background;
