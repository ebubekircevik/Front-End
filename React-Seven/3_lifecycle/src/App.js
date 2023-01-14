import UseEffectLearn from "./components/UseEffectLearn";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {

  const[isVisible, setIsVisible] = useState(true)

  return (
    <>
      {/*<UseEffectLearn />*/}
      {isVisible && <Counter/>}{/*isVisible true dan false e geçtiği zaman Counter component i unmount oluyor */}
      <button onClick={()=> {setIsVisible(!isVisible)}}>Toggle</button>
    </>
  );
}

export default App;
