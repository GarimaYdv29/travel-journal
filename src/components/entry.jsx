import "./entry.css"
function Entry(Props){
    return(
        <article>
                <img src={Props.img.src} alt={Props.img.alt} className="mount"/>
                <content>
                <img src={Props.marker} alt="marker" className="marker"/>
                <h1>{Props.title}</h1>
                <h3>{Props.country}</h3>
                <a href={Props.map}>
                view on google maps
                </a>
            <p>Dates: {Props.dates}</p>
            <p>Text: {Props.text}</p>
            </content>
        </article>
    )
}

export default Entry;