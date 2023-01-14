import PropTypes from 'prop-types';

function User(props) {
  
  //erken render(early return)
  if(!props.isLoggedIn){
    return <div>Giriş Yapmadınız!</div>
  }

  return (
  <div>
  <h1>{props.isLoggedIn ? "giriş yaptınız" : "giriş yapmadınız"} {props.age}</h1 > 
  {props.friends && props.friends.map((firend, index) => <div key={index}> {firend} </div>)}
  </div>
  )
};

//component e hangi tip parametre gonderileceğini belirler.
//isRequired zorunlu gonderilmesi gereken parametre
//oneOfType: hangi tipte parametrelerin gonderilebileceğini belirler.
//shape: obje gonderildiği durumda hangi parametrelerin gonderileceğine belirler
User.propTypes={
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number
  })
}

//ataması yapılmamış propsların default ataması yapılır
User.defaultProps = {
  name: "İsimsiz",
  isLoggedIn: false
}

export default User;