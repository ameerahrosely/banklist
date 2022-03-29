//import {useSelector, useDispatch} from 'react-redux';
//import {increment, decrement} from './redux/actions';
import TopInfo from "./components/TopInfo";
import Masterlist from "./components/Masterlist";
import Detail from "./components/Detail";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="row">
          <div className="col-9">
              <h2 className="text-primary">Transaction History</h2>
              <p>Last updated <TopInfo/></p>
          </div>
          <div className="col-3">
              <table style={{ width: "100%" }}>
                <tbody>
                    <tr>
                        <td><i className="fas fa-calendar-day"></i>&nbsp; </td>
                        <td>
                            <input id="daterangeInput" className="form-control" type="text" style={{ width: "100%" }} placeholder="Search by date" />
                        </td>
                    </tr>
                  </tbody>
              </table>
          </div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Masterlist/>} />
          <Route path="/item/:itemId" element={<Detail/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </>
  );

  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector (state => state.isLogged);
  // const dispatch = useDispatch();

  // return (
  //   <div className="App">
  //     <h1>Hello</h1>
  //     <h2>Counter: {counter}</h2>
  //     <button onClick={() => dispatch(increment(5))}>+</button>
  //     <button onClick={() => dispatch(decrement())}>-</button>
  //     {isLogged ? <h3>You're logged in.</h3> : <h3>You're not logged in</h3>}
  //   </div>
  // );
}

export default App;
