import { useState } from "react"
import './Form.css'

const Form = props =>{
    const [title,setTitle] = useState('')
    const [releaseDate,setReleaseDate] = useState('')
    const [openingText,setOpeningText] = useState('')

    const submitHandler = (e)=>{
        
        e.preventDefault()
        // console.log(title,releaseDate,openingText)
        let obj = {
            title: title,
            releaseDate:releaseDate,
            openingText:openingText,
            id: Math.random()
           

        }
        // console.log(obj)
        props.addMoiveFun(obj)

    }
    return(
        <form onSubmit={submitHandler} className="form">
            <div className="formdiv">
            <label htmlFor="title"> title</label>
            <input className="input" id="title" type="text" onChange={(e)=>setTitle(e.target.value)}></input>
            <br></br>
            <label htmlFor="openingText"> opening text</label>
            <input className="input" id="openingText" type="text" onChange={(e)=>setOpeningText(e.target.value)}></input>
            <br></br>
            <label htmlFor="releaseDate">release date</label>
            <input className="input" id="releaseDate" type="text" onChange={(e)=>setReleaseDate(e.target.value)}></input>
            <br></br>
            <button type="submit"> add Moive</button>
            </div>
        </form>
    )
}
export default Form;