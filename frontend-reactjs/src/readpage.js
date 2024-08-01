import { useEffect, useState } from "react"
import { Read } from "./Tempvalues"

export let Readpage = (pos) => {
    const [studentdetails, setStudentdetails] = useState({
        studentname: "",
        studentage: 0,
        studentemail: "",
        studentplace: "",
        pinnumber: 0
    })


    useEffect(() => {
        setStudentdetails(Read(pos.who))
    })

    return (
        <>
            <div className="row justify-content-center">
                <div className="card col-5">
                    <h1 className="card-title"> MY Record</h1>
                    <p className="card-text">
                        
                    </p>
                    <ul className="list-group">
                        <li className="list-group-item">{studentdetails.studentname}</li>
                        <li className="list-group-item">{studentdetails.studentage}</li>
                        <li className="list-group-item">{studentdetails.studentplace}</li>
                        <li className="list-group-item">{studentdetails.studentemail}</li>
                        <li className="list-group-item">{studentdetails.pinnumber}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}