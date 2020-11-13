import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
    return (
        <nav className='navbar navbar-default'>
            <Link to='/home'>
                Home
            </Link>
            <Link to='/products'>
                Products
            </Link>
            <Link to='/product/add'>
                Add
            </Link>
        </nav>
    )
}

export default DashBoard
