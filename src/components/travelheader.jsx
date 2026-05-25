import "./travelheader.css"
function Travel(Props){
    return(
        <header>
            <img src={Props.img.src} alt={Props.img.alt} />
            <h1>{Props.head}</h1>
        </header>
    )
}   

export default Travel;