import React from 'react'
import styles from './styles.module.css'


function Body() {
  return (
    <section className={styles.main}>
      <input className={styles.toggleall} type="checkbox"/>
      <label for={styles.toggleall}>
        Mark all as complete
      </label>

      <ul className={styles.todoList}>
        <li className={styles.completed}>
          <div className={styles.view}>
            <input className={styles.toggle} type="checkbox"/>
            <label>Learn JavaScript</label>
            <button className={styles.destroy}></button>
          </div>
        </li>
        <li>
          <div className={styles.view}>
            <input className={styles.toggle} type="checkbox"/>
            <label>Learn React</label>
            <button className={styles.destroy}></button>
          </div>
        </li>
        <li>
          <div className={styles.view}>
            <input className={styles.toggle} type="checkbox"/>
            <label>Have a life!</label>
            <button className={styles.destroy}></button>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Body
