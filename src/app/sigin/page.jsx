"use client";
import End from "@/components/EndPages";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sigin = () => {
  const router = useRouter();
  //create Account
  const [firsrtname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //sig in
  const [emailSig, setEmailSig] = useState("");
  const [passwordSig, setPasswordSig] = useState("");
  const data = {
    firstname: firsrtname,
    lastname: lastname,
    email: email,
    password: password,
  };

  const LocalData = JSON.parse(localStorage.getItem("Data"));
  return (
    <>
      <div className="flex h-screen w-[100%] items-center justify-between">
        <div className="h-screen w-[50%]  p-5">
          <h1 className="text-[30px] font-semibold">Hello there!</h1>
          <p className="text-xl font-[500]">
            Please sign in or create account to continue
          </p>

          <div>
            <div className="mx-auto mt-20 w-[70%]">
              <h1 className="text-2xl font-[500]">SIG IN</h1>
              <form
                className="p-10"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div>
                  <label htmlFor="inputEmal" className="text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    className="my-5 w-[100%] rounded-lg border-2 border-black px-5 py-5 focus:outline-[#ED165FFF]"
                    id="inputEmal"
                    value={emailSig}
                    onChange={(e) => setEmailSig(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="inputPassword" className="text-xl">
                    Pasword
                  </label>
                  <input
                    type="password"
                    className="my-5 w-[100%] rounded-lg border-2 border-black px-5 py-5 focus:outline-[#ED165FFF]"
                    id="inputPassword"
                    value={passwordSig}
                    onChange={(e) => setPasswordSig(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center px-1 py-5">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">Remeber my details</label>
                </div>
                <div>
                  <button
                    onClick={() => {
                      const { email, password } = LocalData;
                      if (emailSig == email && passwordSig == password) {
                       router.push("/")
                      } else {
                        alert(
                          "Please enter your email and password or try again",
                        );
                      }
                    }}
                    className="w-[100%] rounded-lg border bg-[#ED165FFF] px-5 py-3 text-2xl font-[500] text-white transition-none hover:bg-[#e85687]"
                  >
                    Sig in
                  </button>
                </div>
              </form>
              <Link href={"/login"} className="decoration-current">
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
        {/* create accaunt -----------------------------------------------------------------------------------------------------------------------------------------*/}
        <div className="h-screen w-[50%]">
          <p className="p-5 text-xl text-white">
            Please sign in or create account to continue
          </p>
          <div className="p-5">
            <h1 className="text-2xl font-semibold">CREATE ACCOUNT</h1>
            <form
              className="p-10"
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
                  value={firsrtname}
                  onChange={(e) => setFirstname(e.target.value)}
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
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
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
                />
              </div>
              <div>
                <label htmlFor="inputEmal" className="text-xl">
                  Create password
                </label>
                <input
                  type="password"
                  className="my-5 w-[100%] rounded-lg border-2 border-black px-5 py-5 focus:outline-[#ED165FFF]"
                  id="inputEmal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="inputPassword" className="text-xl">
                  Confirm passowrd
                </label>
                <input
                  type="password"
                  className="my-5 w-[100%] rounded-lg border-2 border-black px-5 py-5"
                  id="inputPassword"
                />
              </div>
              <div className="flex items-center px-1 py-5">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  I want to receive Safari newsletters with the best deals and
                  offers
                </label>
              </div>
              <div>
                <button
                  onClick={() => {
                    if (
                      firsrtname !== "" &&
                      lastname !== "" &&
                      password !== "" &&
                      email !== ""
                    ) {
                      localStorage.setItem("Data", JSON.stringify(data));
                      router.push("/home");
                      console.log(data);
                    } else {
                      alert("Please enter your data");
                    }
                  }}
                  className="btn w-[100%] rounded-lg border bg-[#ED165FFF] px-5 py-3 text-2xl font-[500] text-white transition-none hover:bg-[#e85687]"
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <End />
      </div>
    </>
  );
};

export default Sigin;
