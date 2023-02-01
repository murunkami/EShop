import React, {useState, useEffect} from "react";  
import '../App.css';
import axios from "axios";
import { ProgressBar } from "react-loader-spinner";

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url : "https://fakestoreapi.com/products",
        })
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }, []);

    //   console.log("test " ,  loading)

    return (
        <div className="lay">
{loading ? (
                <div> 
                    <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>
                </div>
            ) : (
<div className="products-container">
            

            {product.map((data) => (
                <div key = {data.id} className="product">
                <div><img src={data.image} alt="#" /></div>
                <div className="product-detail">
                    {data.title}
                    <h6 >{`Price : $${data.price}`}</h6>
                    {/* <h6>{`Description: ${data.description}`}</h6> */}
                    </div>    
                </div>
            ))}
        </div>
            )}

        
        </div>
    );
};

export default Products;