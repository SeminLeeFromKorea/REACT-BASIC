
/*
이미지를 가져오는 방법
1. 외부 서버에서 경로를 참조받음 (가장 일반적인 방법)

2. src폴더 밑에 img파일 참조가능 (선호되진 않음)

3. public폴더 밑에 넣는경우 이미지를 바로 참조 가능
*/
/* import img1 from '../img/img1.png'; */

import { useState } from "react";


const IterationComponentQ = () => {

    // 1. 반복할 데이터 (state로 관리}
    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]

    const [list, setList] = useState(arr);

    // 2. map함수를 이용
    const newList = list.map((item, index) => {
        return (
        <div key={item.title} onClick={() => handleDisplay(item.src)}>
            <img src={item.src}/>
            <p>상품:{item.title}</p>
            <p>가격:{item.price}원</p>
        </div>
        )
    }); // 실행시킬 함수 안에서 return 구문 안에다가 함수를 호출함

    const [display, setDisplay] = useState(<img src={"/img/img1.png"} alt="제목" width="300" />);

    const handleDisplay = (a) => {
        const newImg = <img src={a} alt="제목" width="300" />;

        setDisplay(newImg);
    }


    return (
        <>
        <hr/>
        <h3>이미지 데이터 반복하기</h3>
        {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100"/>
        <img src={img1} alt="제목" width="100" /> */}
        {/* <img src={"/img/img1.png"} alt="제목" width="100" /> */}
        {display}

        <div style={{display: "flex", justifyContent: "space-around"}}>
            {/* 반복할 요소의 모형 */}
            {/* <div>
                <img src="img/img1.png" alt="제목" width="100" />
                <p>상품:아이폰</p>
                <p>가격</p>
            </div> */}
            {newList}
        </div>
        </>
    )

}

export default IterationComponentQ;