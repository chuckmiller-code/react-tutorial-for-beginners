
function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={handleClick} key={item}>{item}</li>
        ))}
      </ul>
    </> 
  );
}

export default ListGroup;
