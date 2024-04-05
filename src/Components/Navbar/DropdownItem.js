import React from 'react'

function DropdownItem(props) {
  return (
    <li className='dropdown-item'>
        
        <a>{props.text}</a>
    </li>
  )
}

export default DropdownItem