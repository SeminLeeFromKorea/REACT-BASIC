

const IterationComponent = () => {
    
    const arr = [1,2,3,4,5];
    
    /* const newArr = arr.map(function(item, index, arr) {
        return item * 10;
    }); */

    const newArr = arr.map((item, index, arr) => item * 10);
    console.log(newArr);

    // 2. ....

    return (
        <>
            
        </>
    )
}

export default IterationComponent;