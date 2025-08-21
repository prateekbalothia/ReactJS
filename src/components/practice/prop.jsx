function Prop({ name, age }) {
    return (
        <>
            <div className="container-fluid bg-dark text-secondary">
                <div className="row text-center">
                    <div className="col">
                        <h2>{name}</h2>
                        <h2>{age}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prop