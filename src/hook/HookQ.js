import { useRef, useState, useEffect } from "react";


const HookQ = () => {

    /*
    1. 컴포넌트가 마운트된 이후 한번만 id태그에 포커스를 줍니다.
    
    2. id, pw는 state로 관리합니다
    로그인버튼 클릭시 공백이라면 공백인 태그에 포커스를 주세요.
    로그인버튼 클릭시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요.
    */
   
   useEffect(() => {
       idTag.current.focus();
   }, [])

    const idTag = useRef();
    const pwTag = useRef();

    const [data, setData] = useState({id: '', pw: ''});

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value});
    }


    const handleCheck = () => {
        if(data.id === "") {
            idTag.current.focus();
        } else if (data.pw === "") {
            pwTag.current.focus();
        } else {
            alert(`아이디 : ${data.id}, 비밀번호 : ${data.pw}`);
            setData({id:'', pw:''});
            idTag.current.focus();
        }
    }

    return(
        <>
        <hr/>
        <h3>훅 실습</h3>
        <input type="text" name="id" placeholder="아이디" ref={idTag} onChange={handleChange} value={data.id}/>
        <input type="password" name="pw" placeholder="비밀번호" ref={pwTag} onChange={handleChange} value={data.pw}/>
        <button onClick={handleCheck}>로그인</button>
        </>
    )
}

export default HookQ