import React from 'react'
import styles from './styles.module.css'

function Header() {
  return (
    <header className="header">
    <h1>todos</h1>
    <form>
      <input className={styles.newTodo} placeholder="What needs to be done?" autofocus/>
    </form>
  </header>
  )
}

export default Header