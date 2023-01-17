import { useState } from "react";


const IterationComponentQ2 = () => {

    // 1 - select는 컴포넌트 반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    const newArr = select.map((item) => <option key={item}>{item}</option>)

    
    // 2. data는 state로 관리하고 화면에 li태그로 반복을 합니다.
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];

    const [list, setList] = useState(data);

    const newList = list.map((item) => <li key={item.id}>{item.type}-{item.teacher}</li>)

    // 3. 셀렉트박스가 체인지되면, 이벤트객체를 활용해서 선택된 값만 필터링해서 보여주면 됩니다.

    const handleList = (e) => {
        const handleArr = data.filter((item) => item.type === e.target.value); // list에 filter하면 버려지는 값들을 다시 쓸 수 없게 된다, data는 불변형 배열이라 상관없음
        setList(handleArr);
    }

    // 4. 숙제: 검색 기능 만들기


    return (
        <>
        <hr/>
        <h3>컴포넌트 반복 실습</h3>
        <h3>검색기능 - 대소문자를 구분하지 않고 teacher, type에 포함된 데이터만 필터링</h3>
        <select onChange={handleList}>
            {newArr}
        </select>
        <ul>
            {newList}
        </ul>
        </>
    )

}

export default IterationComponentQ2;