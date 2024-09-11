import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import LeftSidebar from '../../components/Leftsidebar'

const Register = () => {
    return (
        <>
            <Header />
            <div className="container mt-4">
                <div className="row justify-content-center">

                    <div className="col-lg-3">
                        <LeftSidebar/>
                    </div>

                    <div className="col-lg-8">
                        <form>
                            <div class="card">
                                <h5 class="card-header">Register</h5>
                                <div class="card-body">

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Select Course*</label>
                                        <select className="form-control">
                                            <option>---select course---</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Select Subject*</label>
                                        <input type="text" className="form-control" placeholder="Enter your subject" />
                                    </div>

                                    {/* <div className="mb-3 d-flex justify-content-between">
                                            <input type="submit" className='btn btn-primary' />
                                            <Link to={`/`} className='btn btn-success'>Login</Link>
                                        </div> */}


                                </div>
                            </div>

                            {/* Personal Informations */}
                            <div class="card mt-4">
                                <h5 class="card-header">Personal Informations</h5>
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">First Name*</label>
                                                <input type="text" className='form-control'/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name*</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Guardian  Name*</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Gender*</label><br></br>
                                                <input type="radio" name='gender' value="male"/> Male &nbsp;
                                                <input type="radio" name='gender' value="female"/> Female

                                            </div>
                                            <div className="mb-3" style={{marginTop:"30px"}}>
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Category*</label>
                                                <select className='form-control'>
                                                    <option>SELECT</option>
                                                    <option>General</option>
                                                    <option>OBC</option>
                                                    <option>SC</option>
                                                    <option>ST</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Nationality*</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* contact information */}
                            <div class="card mt-4">
                            <h5 class="card-header">Contact Informations</h5>
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number*</label>
                                            <input type="number" className='form-control'/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Country*</label>
                                            <select className="form-control">
                                                <option>---select country---</option>
                                                <option>India</option>
                                                <option>U.k</option>
                                                <option>U.s.a</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">City*</label>
                                            <select className="form-control">
                                                <option>---select city---</option>
                                                <option>Surat</option>
                                                <option>Vadodara</option>
                                                <option>Ahemdabad</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Email*</label>
                                            <input type="text" className='form-control'/> 
                                        </div>
                                        <div className="mb-3" style={{marginTop:"30px"}}>
                                            <label htmlFor="exampleFormControlInput1" className="form-label">State*</label>
                                            <select className='form-control'>
                                                <option>---select state---</option>
                                                <option>Gujarat</option>
                                                <option>Rajasthan</option>
                                                <option>Maharashtra</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Address*</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                             <div className="mt-4 mb-4 d-flex">
                                            <input type="submit" className='btn btn-primary' />
                                           
                                        </div>

                        </form>
                    </div>
                </div>





            </div >
        </>
    )
}

export default Register
