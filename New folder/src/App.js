import React,{useState} from 'react'
import data from './data.js';
import './App.css';
const App = () => {

const [datas,setDatas]=useState(data);
const category = data.map((items)=>items.cat);
const item=new Set(category);
const [products,setProducts]=useState(['all',...item]);

const productFilter=(itemcat)=>{
  if(itemcat==='all'){
    setDatas(data);
    return;
  }
  const profil=data.filter((dt)=>dt.cat === itemcat)
  console.log(profil);
  setDatas(profil);
  return;
}

  return (
    <>
    <div className="header">
    <h2>PRODUCTS</h2>
    </div>
    <div className="btn">
    {
      products.map((product) =>
      {
        return <button onClick={()=>{productFilter(product)}}>{product.toUpperCase()}</button>
      }
      )
    }
    </div>
    <main>
    
    {
      datas.map((data)=>{
        return<article>
        <p>{data.id}</p>
        <img src={data.images} />
        <p><span>{data.price}</span></p>
        </article>
      })
    }
    </main>
    </>
  )
}

export default App
