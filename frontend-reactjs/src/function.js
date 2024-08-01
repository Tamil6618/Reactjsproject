import './External.css'
function Orderlist()
{
    return(
        <>
        <ol>
            name
            <li>
                annamalai
            </li>
            <li>
                sathish
            </li>
        </ol>
        </>
    );

}

function Fun1()
{
    return(
        <>
        <h1>data flow</h1>
        </>
    )
}
export let Table1=()=>
{
    return(
        <>
        <table >
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Studentname</th>
                    <th>Lovers Name</th>
                    <th>Bestie Names</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Annamalai</td>
                    <td>Gowthami,Priyanka,Vidhya,Nithya</td>
                    <td>Sathish,Rajesh</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Tamil</td>
                    <td>Swetha,riya,Ashwini,Ashwitha</td>
                    <td>kumar,Deva</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Annamalai</td>
                    <td>Annamalai,Tamil,Kumar,Ganesh</td>
                    <td>Sathish,Viji</td>
                </tr>
            </tbody>
        </table>
        
        </>

    );
}
export default Fun1;
export{Orderlist};