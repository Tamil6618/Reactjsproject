
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { SamplebootstrapExample } from "./BootstrapSample";
// import { TernaryOperator } from "./TernaryOpearator";
// import { Table1 } from "./function";
// import { Parameter } from "./ParameterComponent";
// import { Mainpage } from "./HomePage";

import { SamplebootstrapExample } from "./BootstrapSample";
import { Mainpage1 } from "./Mainpage";
import { Parameter } from "./ParameterComponent";
import { TernaryOperator } from "./TernaryOpearator";
import { FirstHook } from "./UseStateExample";
import { UseState2 } from "./UseStateNumber";
import Fun1, { Orderlist, Table1 } from "./function";
import { Usingobotstrap } from "./usingboostrap";

// import { Readpage } from "./readpage";
// import { Mainpage1 } from "./Mainpage";
// import { FirstHook } from "./UseStateExample";
// import { UseState2 } from "./UseStateNumber";
//  import Fun1, { Orderlist } from "./function";

function App() {
  return (
<>
{/* 
  <Fun1/>
<Orderlist/>
<Table1/>  


<FirstHook/> 

 <UseState2/>
 
 <SamplebootstrapExample/>
 
 <TernaryOperator/> */}

 {/* <Parameter where="./sa.jpg" uyram="500px" agalam="200px" />  */}



{/* 
<BrowserRouter>

<Mainpage/>
 
 <Routes>

 <Route path="Update" exact element={<Table1/>}/>
 <Route path="Create" exact element={<h1> hello world</h1>}/>

 </Routes>
</BrowserRouter>  */}



<Mainpage1/>
{/*  
 <Fun1/>
 <Orderlist/>
 <Table1/>
 <FirstHook/>
 <UseState2/>
 <TernaryOperator/>
 <Usingobotstrap/>
 <Parameter/>
<SamplebootstrapExample/>  */}


 </>

 )
}
export default App;