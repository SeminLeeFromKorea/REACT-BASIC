import { useState } from "react";



const StateComponentQ = () => {

    const [count, setCount] = useState(0);

    let up = () => {
        setCount(count+1);
    }

    let down = () => setCount(count-1);

    // let reset = () => {
    //     setCount(count = 0);
    // }

    return (
        <>
            <hr/>
            <h3>실습</h3>
            <h3>카운트:{count}</h3>
            <button onClick={up}>증가</button>
            <button onClick={down}>감소</button>
            <button onClick={() => setCount(0)}>초기화</button>
        </>
    )


}

export default StateComponentQ;