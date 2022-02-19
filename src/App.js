import { useState } from 'react';
import './App.css';
import { Content } from './components/content/Content';
import { SideNav } from './components/sideNav/sideNav';
import { UpperNav } from './components/upperNav/upperNav';

function App(props) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleFunc = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className="flex flex-col">
        <UpperNav toggleMenu={toggleFunc} />
        <div className="content-section flex">
          <SideNav toggleState={showMenu} />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
