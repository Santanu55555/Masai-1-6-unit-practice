function Clickme({title, onClick,disabled,id}){
return(
     <button disabled={disabled} onClick={onClick}
 id={id} > {title} </button>
)
}

export default Clickme;