// css파일 경로 링크
import './css/App.css';

//CSS모듈 파일 링크
import styled from './css/App.module.css';

const App = () => {

    // p.261 - CSS스타일링

    //직접스타일링하기: -은 카멜표기법으로 변경됩니다.
    const myStyle = {
        color : "red",
        textAlign : "center",
    }



    return (
        <>
        <header style={{backgroundColor : "black"}} className="app_header">
            <p style={myStyle}>헤더입니다(직접스타일링)</p>
        </header>

        <article className="app_article">
            css파일로 디자인하기
        </article>

        <section className={styled.app_wrap}>
            <div className={styled.app_item}> {/* 마지막 선택자를 표기 */}
                <p>CSS디자인</p>
                <input type="text" className="input_control"/> {/* global은 className에 바로 주면 됨 */}
                <input type="password" />
            </div>
        </section>
        </>
    )
}

export default App;