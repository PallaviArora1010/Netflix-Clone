import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '9742217c6f243a719b8c0d0406e6cc87', 
};

const App = () => {
  return (
    <div>
      {/* Nav Component */}
      <Nav />
      {/* Header background image with buttons and title */}
      <Header />
      {/* Content with movies */}
      <Content />
    </div>
  );
};

export default App;