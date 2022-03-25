import {useSelector} from 'react-redux';
const Display = () => {
    const myState = useSelector((state) => state.changeTheNumber)


    return (
        <>
            <div className="container text-center mt-5">
                <input type="text"  placeholder="Wait" value={myState}></input>


            </div>
        </>
    )
}

export default Display;
