
function ListGroup(){
    const items = [
        'New York',
        'London',
        'Paris',
        'Amsterdam',
        'Berlin'
    ];


    return(
        <>
            <h1>List of jaja czyste</h1>
            <ul className="list-group">
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>

        </>
        )
}

export default ListGroup;