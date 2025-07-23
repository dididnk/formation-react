export default function Street({streetInfo, onStreetDelete}) {
    // functions

    // affichage
    return (
        <div>
            <li key={streetInfo.id}>{streetInfo.title}<button onClick={() => onStreetDelete(streetInfo.id)}>X</button> </li>
        </div>
    )
}