"use client"
import React from "react";


import ProductTable from "./components/ProductTable";
import Link from "next/link";
import { useRouter } from "next/navigation";
function ProductList() {
    const router = useRouter()
  return (
    <>
      <div className="mt-3 mb-5 row">
        <div className="col-md-6">
         <h4> Products</h4>
        </div>
        <div className="col-md-6 text-end">
        
          <button
            type="btn"
            className="btn btn-orange w-25 py-2"
            onClick={()=>router.push("/items/add-items")}
          >
           Add Product
          </button>
        </div>
      </div>

      <div className="">
        <div className="card">
          <div className="card-body">
            <ProductTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
