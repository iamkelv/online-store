import { useState, useEffect, useContext } from "react";
import { Product } from "./Product";
import classes from "./ProductSection.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ApiContext } from "../context/api-context";
import { Vcard } from "./Vcard";


const productTitle =[
  {name:"Flash Sale", url:"https://fakestoreapi.com/products?limit=5"},
  {name:"New Products",url:"https://fakestoreapi.com/products/category/men's clothing"},
  {name:"Featured Products",url:"https://fakestoreapi.com/products/category/jewelery"},
  {name:"Best Selling",url:"https://fakestoreapi.com/products/category/women's clothing"},
  {name:"Electronics",url:"https://fakestoreapi.com/products/category/electronics"},
  {name:"Jeweleries",url:"https://fakestoreapi.com/products/category/jewelery"},
  {name:'Men Clothing & Fashion',url:"https://fakestoreapi.com/products/category/men's clothing"},
  {name:"Women's Clothing",url:"https://fakestoreapi.com/products/category/women's clothing"},  
]
export const ProductSection = ({ children, title, timing, buttonText,url, headTitle }) => {
  const [product, setProduct] = useState([]);
  const [IsLoad, setIsLoad] = useState(false);
  const [leftArrow, setLeftArrow] = useState(20)
  const [rightArrow, setRightArrow] = useState(leftArrow)    
    

  const fetchProducts = async (props) => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    setProduct(data);    
    setIsLoad(true);
  };
  useEffect(()=>{fetchProducts()},[product])
  const left = ()=>{    
    if(leftArrow<=200){      
      setLeftArrow(leftArrow+20)
    }else{
      return leftArrow
    }            
  }
 const right = ()=>{
  if(leftArrow>=-200){    
    setLeftArrow(leftArrow-20)    
  }else{
    return leftArrow
  }
  }
  
  return (
    <div>    
      {productTitle.map(card=><Vcard   title={card.name} link={card.url}/>)}                 
    </div>
    
  );
};
