import React from 'react'
import style from "./Navigation.module.css"
const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}>
        <div className="logo">
            <h1>ANSHU</h1> 
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    </nav>
  )
}

export default Navigation