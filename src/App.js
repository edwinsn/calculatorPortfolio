import './assets/App.css';
import './pages/mainpage/mainPage.css'
import './pages/about/about.css'
import { MainPage } from './pages/mainpage/MainPage'

function App() {
  console.log("Main Page rendened!")
  return (
    <div className="App">
      {/*<Progres />*/}
      <MainPage />
      {/*<About />
      <Contact />
*/}
    </div>
  );
}

export default App;