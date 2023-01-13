import { Fragment } from "react";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";
import MyComponent from "./component/MyComponents";

const App = () => {

    return (
        <Fragment>
        <h3>나의 App.JS</h3>
        {/* props */}
        <MyComponent /> {/* 재활용가능 */}
        <MyComponent name={"홍길동"} age={20} email={"aaa@naver.com"}/>
        <MyComponent2 />
        <MyComponent3 />
        </Fragment>
    )

}

export default App;