import './app.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Experience } from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experience />
    </div>
  );
}
