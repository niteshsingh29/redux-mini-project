import { useSelector } from "react-redux";
const Display = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  console.log(myState);

  return (
    <>
      <div className="container text-center mt-5 " style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <div className="bg-primary text-white mt-2" style={{height:"150px", width:"150px", display:"flex", justifyContent:"center",alignItems:"center"}}>
          <p>{myState.addition}</p>
        </div>
        <div className="bg-danger text-white mt-2" style={{height:"150px", width:"150px", display:"flex", justifyContent:"center",alignItems:"center"}}>
          <p>{myState.subtract}</p>
        </div>

        <div className="bg-dark text-white mt-2" style={{height:"150px", width:"150px", display:"flex", justifyContent:"center",alignItems:"center"}}>
          <p>{myState.multiply}</p>
        </div>
      </div>
    </>
  );
};

export default Display;
