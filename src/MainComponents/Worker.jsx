import './Worker.css'

function Worker({name, opitYear, opitPlasec }) {
    return (
        <div className="cardWorker">
            <div className="first-content">
                <span>{name}</span>
            </div>
            <div className="second-content">
                <p className="pWorkerClass">{opitYear}</p>
                <p className="pWorkerClass">{opitPlasec}</p>
            </div>
        </div>
    );
}

export default Worker;