"use client";
// components

import AccountDashboardSidebar from "@/components/AccountDashboardSidebar";
import End from "@/components/EndPages";
import UserInfoHeader from "@/components/UserInfoHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserInfo = () => {
  const data = JSON.parse(localStorage.getItem("Data"));
  const [firstN, setFirstN] = useState(data === null ? "" : data.firstname);
  const [email, setEmail] = useState(data === null ? "" : data.email);
  const [lastN, setLastN] = useState(data === null ? "" : data.lastname);

  const router = useRouter();
  const datas = {
    firstname: firstN,
    lastname: lastN,
    email: email,
  };
  // if (data !== null) {
  // }

  const handleSave = () => {
    if (firstN !== "" && lastN !== "" && email !== "") {
      localStorage.setItem("Data", JSON.stringify(datas));
    } else {
      alert("Enter your data");
    }
  };
  if (data === null) {
    router.push("/sigin");
  } else {
  }

  return (
    <>
      <div>
        <UserInfoHeader />

        {/* main */}
        <main className="w-[90%] mx-auto h-screen flex items-center justify-between mt-5">
          <div className="w-[20%] h-screen">
            <AccountDashboardSidebar />
          </div>
          <div className="border w-[78%] ">
            <div>
              <div>
                <h1 className="text-[24px] m-10 font-[400]">
                  User Information
                </h1>
              </div>
              <form
                className="p-10 w-[50%]"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div>
                  <label htmlFor="inputEmal" className="text-xl">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="my-5 w-[100%] rounded-lg border-2 border-black px-5 py-5 focus:outline-[#ED165FFF]"
                    id="inputEmal"
                    value={firstN}
                    onChange={(e) => setFirstN(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="inputEmal" className="text-xl">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="my-5 w-[100%] rounded-lg border-2 border-black px-5 py-5 focus:outline-[#ED165FFF]"
                    id="inputEmal"
                    required
                    value={lastN}
                    onChange={(e) => setLastN(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="inputEmal" className="text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    className="my-5 w-[100%] rounded-lg border-2 border-black px-5 py-5 focus:outline-[#ED165FFF]"
                    id="inputEmal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="inputEmal" className="text-xl">
                    Gender
                  </label>
                  <select
                    required
                    name="select"
                    id="inputEmail"
                    className="my-5 w-[100%] rounded-lg border-2 border-black px-5 py-5 focus:outline-[#ED165FFF]"
                  >
                    <option value="optin1" className="p-5">
                      Male
                    </option>
                    <option value="optin2" className="p-5">
                      woman
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="inputPassword" className="text-xl">
                    Date of birth
                  </label>
                  <input
                    type="date"
                    className="my-5 w-[100%] rounded-lg border-2 border-black px-5 py-5 focus:outline-[#ED165FFF]"
                  />
                </div>
                <div className="flex items-center px-1 py-5">
                  <input type="checkbox" id="checkbox" required />
                  <label htmlFor="checkbox" className="ml-2">
                    Newsletter subsciption
                  </label>
                </div>
                <div>
                  <button
                    onClick={handleSave}
                    className="btn w-[100%] rounded-lg border bg-[#ED165FFF] px-5 py-3 text-2xl font-[500] text-white transition-none hover:bg-[#e85687]"
                  >
                    SAVE CHANGES
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      <div className="mt-[150px]">
        <End />
      </div>
    </>
  );
};

export default UserInfo;
