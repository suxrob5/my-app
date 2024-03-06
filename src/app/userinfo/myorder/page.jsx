import AccountDashboardSidebar from "@/components/AccountDashboardSidebar";
import UserInfoHeader from "@/components/UserInfoHeader";
import React from "react";

const MyOrder = () => {
  return (
    <>
      <div>
        <UserInfoHeader />

        {/* main */}
        <main className="w-[90%] mx-auto h-screen flex items-center justify-between">
          <div className="shadow-xl w-[20%] h-screen">
            <AccountDashboardSidebar />
          </div>
          <div className="border w-[78%] h-screen">
            <div>
              <div>
                <h1>User Information</h1>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MyOrder;
