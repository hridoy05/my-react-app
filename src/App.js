import React ,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// name={products[0].name} price={products[0].price}

function App() {
  const nayoks = ['razzak','jasim','manna','salman','shuvo']
  const products = [
    {name:'Photoshop',price:'$99.9'},
    {name:'Illustrator',price:'$69.9'},
    {name:'PDF Reader',price:'$9.9'}
  ]
  const productNames = products.map(product =>{
    const {name,price}=product;
    console.log(name,price)
  })
  
  return (
    <div className="App">
      <header className="App-header">
      <Users></Users>
      <Counter></Counter>
      <ul>
        {
          nayoks.map(nayok=> <Person name={nayok} ></Person>)
        }
      </ul>
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      
      {/* <Person name={nayoks[0]} food="Birani"></Person> */}
      
      {/* <Person name={nayoks[1]} food="fuska"></Person> */}
      
        
        
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUsers(data));
  },[])
 
  return(
    <div>
    <h3>Dynamic Users: {users.length}</h3> 
    <ul>
    {
      users.map(user=> <li>{user.name} {user.email}</li>)
    }

    </ul>
   

    </div>
   
  )
}



function Product (props){
  const productStyle={
    border:'1px solid gray',
    borderRadius : '5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width :'200px',
    float:'left'
  }
  const {name,price} = props.product
  console.log(name,price);
  return(
    <div style={productStyle}>
    <h2>{name}</h2>
    <h3>{price}</h3>
    <button>BuyNow</button>

    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(1);
 // const handleIncrease =()=> setCount( count+1);
   // const newCount = count+1;
   
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount( count+1)}>Increase</button>
      <button onClick= {() => setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Person(props){
   const personStyle={
     border:'3px solid yellow',
     width:'400px',
     padding:'3px'
   }
  
  return(
    <div style={personStyle}>
    <h2>Name:{props.name}</h2>
    <h3>Food:{props.food}</h3>
    </div>

  )
    
  
}

   


export default App;
