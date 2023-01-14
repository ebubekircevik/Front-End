import React from 'react'

function Header() {
  console.log('Header component Re-rendered !')
  return (
    <div>Header</div>
  )
}

export default React.memo(Header)