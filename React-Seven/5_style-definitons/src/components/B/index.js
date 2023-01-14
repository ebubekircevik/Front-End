import React from 'react'
import styles from './styles.module.css'

console.log(styles)

function B() {
  return (
    <div className={styles.title}>B</div>/*unique classlar atıyor. Bu sayede farklı componentlere ait aynı css kodları birbirlerini ezmiyor*/
  )
}

export default B