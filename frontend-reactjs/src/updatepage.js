import { useState } from "react";
import { replace } from "./Tempvalues";

export const Updatepage = (myindex) => {

    const [pos, setpos] = useState(myindex.who)

    const [studentdetails, setStudentdetails] = useState(
        {
            studentname: myindex.mention.studentname,
            studentage: myindex.mention.studentage,
            studentemail: myindex.mention.studentemail,
            studentplace: myindex.mention.studentplace,
            pinnumber: myindex.mention.pinnumber
        })

    let setter = (temp) => {
        const { name, value } = temp.target;

        setStudentdetails(
            (mydata) => {
                return {
                    ...mydata,
                    [name]: value,
                }
            }
        )

    }

    const update = () => {
        alert(" Updated ...! " + JSON.stringify(studentdetails));
        replace(studentdetails, pos)
    }

    return (
        <>
            <div className='row justify-content-center '>
                <div className='col-lg-7 col-sm-12  col-md-10'>
                    <h1 className='text-center text-decoration-underline fst-italic'>Student Form</h1>
                    <div className='row'>
                        <div className='col'>
                            <label className='form-label'>Studentname</label>
                            <input
                                className='form-control'
                                name='studentname'
                                type='text'
                                onChange={setter}
                                placeholder='enter your name'
                                value={studentdetails.studentname}
                            />
                        </div>
                        <div className='col'>
                            <label className='form-label'>Studentage</label>
                            <input
                                className='form-control'
                                name='studentage'
                                type='number'
                                onChange={setter}
                                placeholder='enter your age'
                                value={studentdetails.studentage}
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>StudentEmail</label>
                            <input
                                className='form-control'
                                name='studentemail'
                                type='email'
                                onChange={setter}
                                placeholder='enter your email'
                                value={studentdetails.studentemail}
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>StudentPlace</label>
                            <input
                                className='form-control'
                                name='studentplace'
                                type='text'
                                onChange={setter}
                                placeholder='enter your native'
                                value={studentdetails.studentplace}
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Pin Number</label>
                            <input
                                className='form-control'
                                name='pinnumber'
                                type='number'
                                onChange={setter}
                                value={studentdetails.pinnumber}
                                placeholder='enter your postal code'
                            />
                        </div>
                        <div className=' mt-5 row justify-content-center'>
                            <button className='btn btn-outline-success col-5'
                                onClick={update}>Update</button>
                            <button className='btn btn-outline-danger col-5 ms-2'>cancel</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}