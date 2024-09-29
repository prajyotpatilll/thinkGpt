import { createContext, useState } from "react";
import run from "../config/proz";



export const Context = createContext();

const ContextProvider = (props) =>{

    const [input , setinput] = useState(" ");
    const [recentprompt, setrecentpromptt] = useState(" ");
    const [preprompt, setprevprompt] = useState([]);
    const [showresult, setresult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultdata, setresultdata] = useState(" ");
    
    const delaypara = (index,nextword)=>{

    } 


 

const onsent = async (prompt) =>{
    setresultdata("")
    setloading(true)
    setresult(true)
    setrecentpromptt(input)
    const res = await run(input);
    console.log(res)
    let responsearr = res.split("**");
    let newArray="";
    for(let i=0; i< responsearr.length; i++){
        if(i===0 || i%2 !==1){
           newArray += responsearr[i]
        }
        else{
            newArray += "<b>" +responsearr[i]+"</b>";
        }
    }

    let newresponse2 = newArray.split("*").join("</br>")
    setresultdata(newresponse2)
    setloading(false)
    setinput("")
}



    const contextValue = {
        preprompt,
        setprevprompt,
        setrecentpromptt,
        recentprompt,
        showresult,
        loading,
        resultdata,
        input,
        setinput,
        onsent
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider