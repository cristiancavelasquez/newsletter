import { useState } from "react";
import { Item } from "../components/Item";
import imgDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import imgMobile from "../assets/images/illustration-sign-up-mobile.svg";
import check from "../assets/images/icon-list.svg";

const items = [
  "Product discovery and building what matters",
  "Measruing to ensure updates are a success",
  "And much more!",
];

export const App = () => {
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(false);
  const [success, setSuccess] = useState(false);

  const isEmailValid = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onChange = (e) => {
    setEmail(e.target.value);
    setActive(isEmailValid(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    email !== "" && setSuccess(true);
  };

  return success ? (
    <main className="font-roboto text-paragraph w-screen h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-White text-DarkSlateGrey lg:rounded-3xl flex p-4 h-screen lg:h-auto">
        <div className="flex flex-col p-6 max-w-[380px] gap-10">
          <img className="w-12" src={check} alt="ddd" />
          <h1 className="text-4xl font-bold">Thanks for subscribing!</h1>
          <p className="text-sm">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className=" rounded-lg py-3 text-White text-xs font-bold bg-gradient-to-r from-pink-500 via-tomato to-orange-500 hover:shadow-lg hover:shadow-tomato transition-shadow duration-300"
          >
            Dismiss message
          </button>
        </div>
      </div>
    </main>
  ) : (
    <main className="font-roboto text-paragraph w-screen h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-White text-DarkSlateGrey lg:rounded-3xl flex flex-col lg:flex-row lg:p-4 h-screen lg:h-auto">
        <div className="lg:hidden">
          <img className="w-full" src={imgMobile} alt="ddd" />
        </div>
        <div className="flex flex-col justify-center p-6 lg:p-0 lg:mx-14">
          <div className="flex flex-col gap-5 text-wrap max-w-sm">
            <h1 className="lg:text-[56px] text-4xl font-bold">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="flex flex-col gap-2 max-w-xs lg:max-w-max">
              {items.map((item, index) => (
                <Item key={index}>{item}</Item>
              ))}
            </ul>
          </div>
          <form action="" className="flex flex-col mt-8" onSubmit={onSubmit}>
            <label className="text-xs font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@company.com"
              className="rounded-md px-4 py-3  border border-Grey mb-4"
              onChange={onChange}
            />
            <button
              className={`${
                active
                  ? "bg-gradient-to-r from-pink-500 via-tomato to-orange-500 hover:shadow-lg hover:shadow-tomato transition-shadow duration-300 "
                  : "bg-DarkSlateGrey"
              } py-4 rounded-lg text-White font-bold text-sm `}
            >
              Suscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="hidden lg:block">
          <img src={imgDesktop} alt="ddd" />
        </div>
      </div>
    </main>
  );
};
