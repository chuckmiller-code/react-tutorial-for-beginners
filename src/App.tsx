// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {

  return (
    <>
      <Button onClick={() => console.log('Clicked')} color='danger'>Test</Button>
    </>
  )

  // return (
  //   <>
  //     <Alert>Hello World</Alert>
  //   </>
  // );

  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: String) => {
  //   console.log(item);
  // }

  // return <div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/></div>
}

export default App;
