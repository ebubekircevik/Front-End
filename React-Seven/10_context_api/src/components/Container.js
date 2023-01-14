import {React} from 'react';
import Button from './Button';
import Header from './Header';

import {useTheme} from '../context/ThemeContext';
import Profile from './Profile';


function Container() {
  const {theme, setTheme} = useTheme();

  return (
    <div className={`app ${theme==='dark' ? theme : ''}`}>
      <Button/>
      <hr/>
      <Header/>
      <hr />
      <Profile/>
    </div>
  )
}

export default Container