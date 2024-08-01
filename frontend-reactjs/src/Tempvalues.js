let studentDetails = [
    {
        studentname: "venkat",
        studentage: 29,
        studentemail: "venkatbuddy@gmail.com",
        studentplace: "salem",
        pinnumber: 636006
    },
    {
        studentname: "Annamalai ",
        studentage: 28,
        studentemail: "s.annamalai1995@gmail.com ",
        studentplace: "Salem",
        pinnumber: 636006
    },
    {
        studentname: "sathish",
        studentage: 28,
        studentemail: "sathish@gmail.com",
        studentplace: "salem",
        pinnumber: 636006
    }
];



export let Create = (obj) => {
    studentDetails.push(obj);
}


export const Listall = () => {
    return studentDetails;
}

export const Read = (myindex) => {
    return studentDetails[myindex];
}


export const Remove1 = (index) => {
    studentDetails = studentDetails.filter(
        (data, pos) => {
            return pos !== index;
        }
    )
    return studentDetails;
}

export const Fetchexact = (name) => {
    const temp = studentDetails.filter(
        (data, index) => {
            return data.studentname === name;
        }
    )

    return temp[0];
}


export const replace = (data, pos) => {
    studentDetails[pos] = data;
    // replace
}