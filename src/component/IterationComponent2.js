import { useState } from "react";

const IterationComponent2 = () => {
    
    // 1. 반복할 데이터 (state로 관리)
    const arr = [
        {id: 1, topic: 'hello'},
        {id: 2, topic: 'bye'},
        {id: 3, topic: 'see you'}
    ];
    
    const [list, setList] = useState(arr);
    
    // 2. map함수를 이용해서 li태그로 생성
    const newList = list.map((item, index) => <li key={item.id} onDoubleClick={() => handleRemove(item.id)}>{item.topic}</li>); // 실행시킬 함수 안에서 return 구문 안에다가 함수를 호출함
    
    // 3. 인풋데이터 관리
    const [data, setData] = useState('');
    
    const handleChange = (e) => {
        setData(e.target.value);
    }
    
    // 4. 추가하기 버튼 클릭시 input의 값을 list의 마지막에 추가
    
    const handleClick = () => {
        let obj = {id : list[list.length-1].id + 1, topic : data};
        // list.push(obj); state를 직접 바꿔서 리렌더링이 안됨
        let newArr = list.concat(obj); // 원본리스트(arr)를 수정하진 않는다. 리스트에 obj가 합쳐진 새로운 리스트 반환
        setList(newArr); // state변경
        setData(''); // input값 초기화
    }
    
    // 5. 삭제기능
    // 화살표함수는 익명함수이므로 호이스팅이 불가
    // 이벤트 안에서 함수를 호출로 연결하는 방법
    // onClick = {() => return {함수호출()}}
    const handleRemove = (a) => {
        // console.log(a); //키

        // filter - 콜백의 리턴이 true인 값을 가지고 새로운 배열을 생성
        const newList = list.filter(item => item.id !== a);
        setList(newList);
    }
    

    return(
        <>
        <hr/>
        <h3>목록 추가하기</h3>
        <input type="text" onChange={handleChange} value={data}/>
        <button type="button" onClick={handleClick}>추가하기</button>
        <ul>
            {newList}
        </ul>
        </>
    )
}

export default IterationComponent2;