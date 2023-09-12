import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./index.css"

const MiniAPILab = () => {

    const [productsObjects, setProductsObjects] = useState([]);
    

    useEffect( () => {
        // get all products
        axios("https://dummyjson.com/products").then((response) => {
        console.log(response);
        let productsData = response.data.products
        setProductsObjects(productsData)

        })
        console.log("worked?");
    },[])
    
    // create a function that will show me the data i need

    const productNameAndPrice = productsObjects.map( (product) => {
        // creating an array for each product 
        return (
            <div key={product.id} id="products">
                <div className='info'>
                    <p>Name: {product.title}</p>
                    <p>Price: ${product.price}.00</p>
                </div>
                <p className='description'>{product.description}</p>
                <img id="product-img" src={product.images[1]} alt="" />
            </div>
        )
    })

  return (
    <>
        {productNameAndPrice}
    </>
  )
}

export default MiniAPILab