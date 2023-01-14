/*
Function olarak tanımlama

const Header = function(){
  return <h1>Hello React</h1>
}
const template =  <Header />

const template = (
  <div class="comp-main">
    < Header/>
    < Header/>
    < Header/>
  </div>
)

ReactDOM.render(template, document.getElementById('root'));
*/

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <TodoList/>
        <Action/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo Application</h1>
        <div>Lorem, ipsum dolor.</div>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </ul>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    return (
      <li>Todo item</li>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <p>
          <button>Clear Items</button>
        </p>
        <form>
          <input type="text" name="txtItem"/>
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

// var template = <TodoApp /> ReactDOM.render(template,
// document.getElementById('root'));

ReactDOM.render(<TodoApp/>, document.getElementById('root'));
