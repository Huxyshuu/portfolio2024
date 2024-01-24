import './WorkDisplay.scss';

export default function WorkDisplay() {

    return (
        <div className="wrapper">
            <div className="container">
                <input type="radio" name="slide" id="c1" defaultChecked />
                <label htmlFor="c1" className="card">
                    <div>
                        <div className="name-image-container">
                            <h4 className="workName">KokkiKawaii<span className="workDot">.</span></h4>
                            <img src={'/kokkikawaii.png'} loading="lazy" alt="kokkikawaii" />
                        </div>
                        
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                                <h4>KokkiKawaii</h4>
                                <p>A homemade recipe website to store the best dishes</p>
                            </div>
                            <div className="buttonContainer">
                                <button onClick={() => window.open("https://reclib.vercel.app/", "_blank")}>VIEW</button>
                            </div>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="card">
                    <div>
                        <div className="name-image-container">
                            <h4 className="workName">Crypto Storage<span className="workDot">.</span></h4>
                            <img src={'/cryptostorage.png'} loading="lazy" alt="cryptostorage" />
                        </div>
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <h4>Crypto Storage</h4>
                                <p>A software solution for bookkeeping transactions</p>
                            </div>
                            <div className="buttonContainer">
                                <button onClick={() => window.open("https://github.com/Huxyshuu/cryptostorage", "_blank")}>VIEW</button>
                            </div>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c3" />
                <label htmlFor="c3" className="card">
                    <div>
                        <div className="name-image-container">
                            <h4 className="workName">Pipeflow<span className="workDot">.</span></h4>
                            <img src={'/pipeflow.png'} loading="lazy" alt="pipeflow" />
                        </div>
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <h4>Pipe Flow</h4>
                                <p>A course project for simulating fluid flow in pipes</p>
                            </div>
                            <div className="buttonContainer">
                                <button onClick={() => window.open("https://github.com/Huxyshuu/CS-A1121_course_project", "_blank")}>VIEW</button>
                            </div>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c4" />
                <label htmlFor="c4" className="card">
                    <div>
                        <div className="name-image-container">
                            <h4 className="workName">Hair dryer<span className="workDot">.</span></h4>
                            <img src={'/cadproject.png'} loading="lazy" alt="picture of hair dryer" />
                        </div>
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                                <h4>Hair dryer - CAD MODEL</h4>
                                <p>A School project</p>
                            </div>
                            <div className="buttonContainer">
                                <button>VIEW</button>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}
