import { useEffect, useState } from "react";
import React from "react";

function View({ product_id, onClose }) {
    console.log(product_id)
  const handleClose = () => {
    onClose();
  };
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://bloom-beauty.onrender.com/products/${product_id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching user investor:', error);
      }
    };

    fetchData();
  }, [product_id]);


  return (
    <>
      <span className="close" onClick={handleClose}>
        &times;
      </span>

      <div className="max-h-80 mt-24 flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
  <div className="absolute opacity-80 inset-0 z-0"></div>
  <div className="w-2/3 p-5 mx-auto my-auto rounded-xl shadow-lg bg-white max-h-screen overflow-y-auto">

    <div className="">
            {product ? (
                <div>
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Product Details</h1>
              
                <div className="container mx-auto p-6">
                  <div className="mt-8">
                  <div className="relative mx-4 mt-4 ml-96 mr-96 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                  <img
                    src={product.image}
                    className="object-cover w-full h-full"
                    alt={product.pname}
                  />
                </div>
                    <h2 className="text-xl font-semibold text-center text-blue-800 mb-4">{product.pname}</h2>
              
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">Product </h3>
                      <p className="text-gray-700 mb-4">
                        {product.description}
                      </p>
                     
                    </div>
              
                    <div className="p-3 mt-6 text-center space-x-4">
                      <button
                        onClick={handleClose}
                        className="bg-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              


            ) : (
              <p>Loading products details...</p>
            )}



          </div>
        </div>
      </div>



    </>
  )
}
export default View