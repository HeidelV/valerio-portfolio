import "./Home.css";

import graphPaper from "../../assets/elements/graph-paper.png";

function Home() {
    return (
        <div className="container" id = "home">
            <img
                className="graph-paper"
                src={graphPaper}
                alt=""
            />

            <div className="welcome-texts">
                <h1 className="welcome-heading">
                    Heidel Berg Valerio
                </h1>

                <p className="job-title">
                    Front-End Developer
                </p>
            </div>
        </div>
    );
}

export default Home;