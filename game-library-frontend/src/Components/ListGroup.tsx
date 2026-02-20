
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
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => <li className="list-group-item" key={item} onClick={() =>console.log(item, index)}>{item}</li>)}
            </ul>

        </>
        )
}

export default ListGroup;