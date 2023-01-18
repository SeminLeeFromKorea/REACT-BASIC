import { useReducer } from "react";
import { nameReducer } from "./HookReducerComponent";



/* const nameReducer = (state, action) => {
    // console.log(action.name); // e.target.name

    if(action.name == "name"){
        state = {...state, ["name"]: action.value};
    } else if (action.name == "age"){
        state = {...state, ["age"]: action.value};
    } 

    state = {...state, [action.name]: action.value};
    
    return state;
} */


const HookReducer2 = () => {
    //[스테이트, 리듀서제어함수] = useReducer(리듀서, 초기값)
    const [state, func] = useReducer(nameReducer/* 실행시킬 함수 */, {name: '', age: ''}/* 초기값 */);

    const {name, age} = state; // 스테이트값 구조분해할당 - 객체이기 때문에 중괄호

    return (
        <>
            <hr/>
            이름: <input type="text" name="name" onChange={(e) => func(e.target)}/>
            나이: <input type="text" name="age" onChange={(e) => func(e.target)}/>

            결과값: {name}<br/>
            결과값: {age}<br/>
        </>
    )

}

export default HookReducer2;