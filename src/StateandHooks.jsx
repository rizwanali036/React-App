import { useState } from "react";
function app(){
    const [fruit, setFruit] = useState("Apple");
    const handleFruit = () => {
        setFruit("Banana")
    }
    return(
        <div>
            <h1>State in React Js</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change Fruit name</button>
        </div>
    )
}

export default app;