import React from 'react'
import {Link} from 'react-router-dom'

//functional component (no states)
function Header(){
    return ( //acts as render
        <header style={headerStyle}>
            <h1>Todo List App</h1>
            <Link to='/' style={linkstyle}>Home</Link>
            |
            <Link to='/about' style={linkstyle}>About</Link>
        </header>
    )
}

const headerStyle ={
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkstyle ={
    color: '#fff',
    textAlign: 'left'
}

export default Header