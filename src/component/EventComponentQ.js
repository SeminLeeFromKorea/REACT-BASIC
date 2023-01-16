import { useState } from "react";



const EventComponentQ = () => {

    const [food, setFood] = useState('')

    const handleFood = (e) => {
        console.log(e.target.value);
        if(e.target.value === "선택"){
            setFood('');
        } else {
            setFood(e.target.value);
        }
    }

    return (
        <>
        <hr/>
        <h3>셀렉트 태그 핸들링(실습)</h3>
        <div>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</div><br/>
        <select onChange={handleFood}>
            <option>선택</option>
            <option>피자</option>
            <option>햄버거</option>
            <option>스시</option>
            <option>국밥</option>
        </select>
        <h3>선택한 결과</h3>
        <div>{food}</div>
        </>
    )
}

export default EventComponentQ;