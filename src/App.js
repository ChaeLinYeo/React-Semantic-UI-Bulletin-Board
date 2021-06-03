import './App.css';
import AllPost from './Components/AllPost';
import { HashRouter, Route } from "react-router-dom"; //라우터는 사용자가 입력한 url을 통해 특정 컴포넌트를 불러준다.
import Detail from './Components/Detail'

function App() {
  return (
    // <div className="App">
    //     <AllPost />
        
    // </div>
    <HashRouter>
      <Route path="/" exact={true} component={AllPost}/>
      <Route path='/detail/:id' component={Detail} />
    </HashRouter>
  );
}

export default App;
