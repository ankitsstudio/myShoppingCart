import React from 'react';
import img1 from "../assets/macbook.jpg"
import img2 from "../assets/shoes.jpg"
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';


const Home = () => {

  const productList =[
    {
      name:"Mac",
      price:12000,
      imgSrc: img1,
      id:"kjgfhdgfdjhjg"
    },
    {
      name:"Shoes",
      price:700,
      imgSrc: img2,
      id:"kytfgvklnjhfdjhjg"
    },
  ];

  const dispatch =useDispatch();

  const addToCartHandler = (options) => {
    //  console.log(options);
    
     dispatch({type:"addToCart",payload:options});
     dispatch({ type: "calculatePrice" });
     toast.success("Added to Cart");
  }
  return (
    <div className='home'>
      {
        productList.map(i=>(
         <ProductCard 
           key={i.id}
           imgSrc={i.imgSrc}
           name={i.name}
           price={i.price}
           id={i.id}
           handler={addToCartHandler}
         />
        ))
      }
    </div>
  )
};

const ProductCard = ({name,id,price,handler,imgSrc})=>(
  <div className='productCart'>
    <img 
    src={imgSrc} 
    alt={name} 
    // height={"50%"}
    // width={"35%"}
    />
    <p>{name}</p>
    <h4>${price}</h4>
    <button 
    onClick={()=>handler(
      {name,id,price,quantity:1,imgSrc}
    )}>
    Add to Cart</button>
  </div>
)


export default Home
