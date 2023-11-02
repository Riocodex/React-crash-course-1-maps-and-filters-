import {useState, useEffect} from "react";
import './App.css';

function App() {
 const URL = "https://jsonplaceholder.typicode.com/users";
 const [users, setUsers] = useState([]);
 const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10]);


  useEffect(()=>{
    const fetchData = async()=>{
      const result = await fetch(URL);
      result.json().then(json=>{
        setUsers(json);
      })
    }
    fetchData();
  },[])

//using mapping
  // const mapData = () =>{
  //   let mappedArray = users.map((user) => user.id * 2);
  //   console.log(mappedArray);
  // }

  //using filters
  // const mapData = () =>{
  //   let filteredData = users.filter((user) =>{
  //     // return user.name === ("Leanne Graham");//shhows the result of data with name leannegraham
  //    // return user.name.includes("a");//shows the results of names that include a
  //     return user.id < 5;//show data with id less than 5..shwo data of people with id less than 5
  //   });
  //   setUsers(filteredData);
  // }

  //adjusting and returning certain values
  // const mapData = () =>{
  //   let square = numbers.map((number) =>{
  //     return number * number;
  //   })
  //   console.log(square);
  // }

//numbers greater than 5squared
  const mapData = () =>{
    let numbersGreaterthan5 = numbers
    // .filter((number) => {
    //   return number >= 5;
    // })//getting numbers greater thhan 5
      .map((filtered) =>{
        return filtered * filtered
      })
      .filter((number) =>{
        return number <= 50;//getting squares less than 50
      })

      setNumbers(numbersGreaterthan5);
  }
  return (
    <div className="App">
      <h1>
        Users
      </h1>
      <div className="card">
      {/* {users.map((user, index) => (
        <div className="inner" key={index}>
            <p>{user.name}</p>
             <p>{user.username}</p>
        </div>
      ))} */}
        
        <div>
             
             {numbers.map((number,index) => (
        <div key={index} className="inner">
           <p>{number}</p>
        </div>
      ))}
      <button onClick={mapData}>Click me</button>
        </div>
      </div>
    </div>
  );
}

export default App;
