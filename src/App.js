import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";


function App() {
  const details = [
    {
      pic: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Fancy Product",
      rating: "",
      price: "$40.00 - $80.00",
      button: "Add to cart",
      disble:true
    },
    {
      pic: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Special Item",
      rating: "false",
      sprice: "$20.00",
      price: " $18.00",
      button: "Add to cart",
      disble:false
    },
    {
      pic: "https://images.unsplash.com/photo-1522125123931-9304d91a42ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y3R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Sale Item",
      rating: "",
      sprice: "$50.00",
      price: " $25.00",
      button: "Add to cart",
      disble:false
    },
    {
      pic: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Popular Item",
      rating: "false",
      price: "$40.00",
      button: "Add to cart",
      disble:false
    },
    {
      pic: "https://images.unsplash.com/photo-1522125123931-9304d91a42ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y3R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Sale Item",
      rating: "",
      sprice: "$50.00",
      price: " $25.00",
      button: "Add to cart",
      disble:false
    },
    {
      pic: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Fancy Product",
      rating: "",
      price: "$120.00 - $280.00",
      button: "Add to cart",
      disble:true
    },
    {
      pic: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Special Item",
      rating: "false",
      sprice: "$20.00",
      price: " $18.00",
      button: "Add to cart",
      disble:false
    },
    {
      pic: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Popular Item",
      rating: "false",
      price: "$40.00",
      button: "Add to cart",
      disble:false
    },
  ];
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar count={count} />
      <div className="headerr">
        <div>
          <h1>Shop in style</h1>
          <h3 style={{color: "rgba(255, 255, 255, 0.5)"}}>With this shop hompeage template.</h3>
        </div> 
      </div>

      <div className="container">
        <div className="row">
          {details.map((m, index) => (
            <Caart
              key={index}
              index={index}
              detoils={m}
              setCount={setCount}
              count={count}
            />
          ))}
        </div>
      </div>
      <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
      </footer>
    </div>
  );
}
function Caart({ detoils, setCount, count }) {
  const [show, setShow] = useState(true);

  function addtocart() {
    setShow(!show);
    setCount(count + 1);
  }
  function remove() {
    setShow(!show);
    setCount(count - 1);
  }

  return (
    <div className="cards-main col-lg-3">
      <div className="card">
        <img className="card-img-top" src={detoils.pic} alt={detoils.pic} />
        <div className="card-body">
          <h5 className="card-title">{detoils.name}</h5>
          <p className="card-text">
            {" "}
            <strike> {detoils.sprice} </strike> {detoils.price}
          </p>
          {detoils.rating ? (
            <div className="card-text star bi-star-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi  "
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
          ) : (
            ""
          )}
          {show ? ( 
            <div>
              {detoils.disble?<button href="" className="btn" >
              View Options
            </button>:<button href="" className="btn" onClick={addtocart}>
              Add To Cart
            </button>}
            </div>
          ) : (
            <button href="" className="btn" onClick={remove}>
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
