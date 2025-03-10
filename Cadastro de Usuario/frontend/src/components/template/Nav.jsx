import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem 
            link="/"
            icon="home"
            content="Início"
            />
            <NavItem 
            link="/users"
            icon="users"
            content="Usuários"
            />
        </nav>
    </aside>