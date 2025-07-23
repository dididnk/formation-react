export default function Street({streetInfo, onStreetDelete}) {
    // functions

    // affichage
    return (
        <div>
            <li>{streetInfo.title}<button onClick={() => onStreetDelete(streetInfo.id)}>X</button> </li>
        </div>
    )
}