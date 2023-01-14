import React from 'react'; // her dosyada eklenmeli

const TodoItem = (props) => {
  return (
      <li>
          {props.item}
          <button onClick={() => {props.deleteItem(props.item) }}>x</button>
      </li>
  );
}

export default TodoItem;