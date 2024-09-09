import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div class="card">
                            <h5 class="card-header">Register</h5>
                            <div class="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                        <input type="password" className="form-control" placeholder="Enter your password" />
                                    </div>
                                    <div className="mb-3 d-flex justify-content-between">
                                        <input type="submit" className='btn btn-primary' />
                                        <Link to={`/`} className='btn btn-success'>Login</Link>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Register
