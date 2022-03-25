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
            className="btn btn-dark mx-2"
            onClick={() => dispatch(Increase(100))}
          >
            Add by 100
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={() => dispatch(Decrease(1))}
          >
            subtract
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={() => dispatch(Multiply(2))}
          >
            Multiply by 2
          </button>
        </div>
      </div>
    </>
  );
};
export default Counter;
