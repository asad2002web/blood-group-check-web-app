import React from 'react'
import './Layout.css'
import CardAns from '../CardAns'
import { Button } from 'react-bootstrap'
const Layout = () => {
    return (
        <div className='main-layout bg-dark'>
            <h2 className='text-center text-white mb-3'>Check Your Blood Group</h2>
            {
                antigen.map((item, i) => <CardAns key={i} antigen={item} />)
            }
            <div className='mt-3 d-flex gap-5'>
            <Button variant="danger">Check Blood</Button>
      <Button variant="info">Reset</Button>
            </div>
            <div>
                <h1 className='text-warning fs-3'>Your Blood Group Result : {"A+"}</h1>
            </div>
        </div>
    )
}

export default Layout

const antigen = [
    {
        "title": "What is broken A antigen blood?",
        "response": "antigen-a"
    },
    {
        "title": "What is broken B antigen blood?",
        "response": "antigen-b"
    },
    {
        "title": "What is broken Rh Factor blood?",
        "response": "antigen-rh"
    }
]