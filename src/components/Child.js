import './Child.css'
const Child = (props)=>{
    return(
        <div className="container">
            {/* <h3>{props.parentSearch}</h3> */}
            <input type="text" value={`shitty hhhh ${props.parentSearch}`} placeholder="Reflection of what you type!" readOnly/>
        </div>
    )

}
export default Child