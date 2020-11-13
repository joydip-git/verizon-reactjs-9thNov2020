import React from 'react'

const DashBoard = () => {
    return (
        <nav className='navbar navbar-default'>
            <a href='/home'>
                Home
            </a>
            <a href='/products'>
                Products
            </a>
            <a href='/product/add'>
                Add
            </a>
        </nav>
    )
}

export default DashBoard
