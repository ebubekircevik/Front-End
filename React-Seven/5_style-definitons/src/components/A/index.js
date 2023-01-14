import React from 'react'
import styles from './styles.module.css'

console.log(styles)

function A() {
  return (
    <div className={styles.title}>A</div> /*uniquess classlar atıyor. Bu sayede farklı componentlere ait aynı css kodları birbirlerini ezmiyor*/
  )
}

export default A