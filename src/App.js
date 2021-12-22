import './App.css';
import { Content } from './components/content/Content';
import { SideNav } from './components/sideNav/sideNav';
import { UpperNav } from './components/upperNav/upperNav';

function App() {
  return (
    <div>
      <div className="flex flex-col">
        <UpperNav />
        <div className="content-section flex">
          <SideNav />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
