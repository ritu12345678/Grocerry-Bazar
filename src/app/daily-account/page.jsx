"use client"
import React from "react";
import SalesTreeTable from "./component/DailyAccountTable";
import Link from "next/link";
import { useRouter } from "next/navigation";
function DailyAccountPage() {
    const router = useRouter()
  return (
    <>
      <div className="mt-3 mb-5 row">
        <div className="col-md-6">
         <h4> Daily Account</h4>
        </div>
        <div className="col-md-6 text-end">
        
          <button
            type="btn"
            className="btn btn-orange w-25 py-2"
            onClick={()=>router.push("/daily-account/add-daily-account")}
          >
           Add Daily Account
          </button>
        </div>
      </div>

      <div className="">
        <div className="card">
          <div className="card-body">
    <SalesTreeTable/>
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyAccountPage;
