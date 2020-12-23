import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
