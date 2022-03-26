import { useDispatch } from "react-redux";
import { Increase, Decrease, Multiply } from "../../action/index";
const Counter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center">
        <div className="Text-box">
          <h1>Welcome to Counter App</h1>
          <button
            className="btn btn-primary mx-2"
            onClick={() => console.log(dispatch(Increase()))}
          >
           Add
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => dispatch(Decrease())}
          >
            subtract
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={() => dispatch(Multiply())}
          >
            Multiply by 2
          </button>
        </div>
      </div>
    </>
  );
};
export default Counter;
