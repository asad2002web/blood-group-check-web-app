import React from 'react'
import './Layout.css'
import { Card } from 'react-bootstrap'
const Layout = () => {
    return (
        <div className='main-layout bg-dark'>
            <h2 className='text-center text-white mb-3'>Check Your Blood Group</h2>
            <Card>
                <Card.Body>
                    <Card.Title>What is broken A antigen blood?</Card.Title>
                    <Card.Text>
                        <div className='d-flex gap-4'>
                            <div>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Yes
                                </label>
                            </div>
                            <div>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    No
                                </label>
                            </div>
                        </div>
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Layout