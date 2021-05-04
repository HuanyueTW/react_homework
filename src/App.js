import logo from './logo.svg';
import './App.css';
import LockIcon from './LockIcon'
import Enput from './Enput'

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';

function App() {
  return (
    <div className = "App">
      <div>
        { LockIcon() }
      </div>
      <div>
        { Enput() }
      </div>
    </div>
    );
   }

export default App; 



