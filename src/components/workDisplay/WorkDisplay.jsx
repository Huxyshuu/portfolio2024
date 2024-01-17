import './WorkDisplay.scss';

export default function WorkDisplay() {

    return (
        <div className="wrapper">
            <div className="container">
                <input type="radio" name="slide" id="c1" defaultChecked />
                <label htmlFor="c1" className="card">
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>KokkiKawaii</h4>
                            <p>A homemade recipe website to store the best dishes</p>
                        </div>
                        <div className="buttonContainer">
                            <button>VIEW</button>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="card">
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>Crypto Storage</h4>
                            <p>A software solution for bookkeeping transactions</p>
                        </div>
                        <div className="buttonContainer">
                            <button>VIEW</button>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c3" />
                <label htmlFor="c3" className="card">
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <h4>Pipe Flow</h4>
                            <p>A course project for simulating fluid flow in pipes</p>
                        </div>
                        <div className="buttonContainer">
                            <button>VIEW</button>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c4" />
                <label htmlFor="c4" className="card">
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
                </label>
            </div>
        </div>
    )
}
