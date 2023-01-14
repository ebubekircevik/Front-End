import {useTheme} from '../context/ThemeContext';

function Header() {

  const {theme, setTheme} = useTheme();

  return (
    <div>
      <div>Active Theme: {theme}</div>
      <br/>
      <button onClick={() => {setTheme(theme ==='light' ? "dark" : 'light')}}>Contro Theme</button>
    </div>
  )
}

export default Header