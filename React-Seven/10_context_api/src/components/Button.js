import {useTheme} from '../context/ThemeContext';

function Button() {

  /*
  const data = useContext(ThemeProvider)
  console.log(data)
  */

  const {theme, setTheme} = useTheme();

  return (
    <div>
      <div>Active Theme: {theme}</div>
      <br />
      <button onClick={() => {setTheme(theme ==='light' ? "dark" : 'light')}}>Contro Theme</button>
    </div>
  )
}

export default Button