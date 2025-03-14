import './NavItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <Link to={props.link}>
        <i className={`fa fa-${props.icon}`}>{` ${props.content}`}</i>
    </Link>