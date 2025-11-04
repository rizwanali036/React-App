import "./Ev.css";
export const EventPropagation = () => {
    const handleGrandParent = () =>{
        console.log("Grand Parent clicked");
    };
    const handleParentClick = () =>{
        console.log("Parent Clicked");
    };
    const handleChildClick = () =>{
        console.log(event);
        console.log("child Clicked");
    };
    return(
        <section className="main-div">
            <div className="g-div" onClick={handleGrandParent}>
                <div className="P-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChildClick}>
                        Child div
                    </button>
                </div>
            </div>
        </section>
    )
};