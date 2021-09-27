import './assets/App.css';
import './assets/mainPage.css'
import './assets/about.css'
import { MainPage } from './MainPage'

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