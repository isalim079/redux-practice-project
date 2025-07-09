import "./App.css";
import { decrement, increment } from "./redux/features/Counter/CreateSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-blue-500 text-white rounded-l"
        >
          -
        </button>
        <span className="px-6 text-2xl">{count.count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded-r"
        >
          +
        </button>
      </div>
      <div className="mt-5 flex text-3xl font-black">
        {count.numberList?.map((item, index) => (
          <div key={index} className={`relative`}>
            <span
              className={`${(index + 1) % 6 === 0 ? "ml-2" : ""} ${(index + 1) % 5 === 0 ? "inline-block rotate-[60deg] absolute -left-7 -top-1 text-5xl" : ""}`}
            >
              |
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
