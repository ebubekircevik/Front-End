import React from 'react'; // her dosyada eklenmeli

const Header = (props) => {
  return (
      <div>
          <h1>{props.title}</h1>
          <div>{props.description}</div>
      </div>
  ); 
}


export default Header;