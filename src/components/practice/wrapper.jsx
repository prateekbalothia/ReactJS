import { Children } from "react";

function Wrapper({ children }) {
    return (
        <div className="container-fluid bg-dark text-secondary">
            <div className="row text-center">
                <div className="col">
                    <div style={{ color: "blue", border: "2px solid red" }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapper;