import React from 'react'
import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}> {/* This footer should hidden by default and shown when there are todos */}
      <span className={styles.todoCount}> {/* This should be `0 items left` by default */}
        <strong>2</strong>
        items left
      </span>
      <ul className={styles.filters}>
        <li>
          <a className={styles.selected}>All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>      
      <button className={styles.clearCompleted}>{/* Hidden if no completed items are left ↓ */}
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
