import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MoviePage from './pages/MoviePage';

function App() {

  // useEffect(()=>{
  //   fetch("https://cors-anywhere.herokuapp.com/https://cafenomad.tw/api/v1.2/cafes/taichung")
  //   .then((res)=>res.json())
  //   .then((response)=> console.log(response))
  // },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviePage />}/>
          <Route path='/movie' element={<MoviePage />}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
