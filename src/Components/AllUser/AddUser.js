import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Action/UserAction";

const AddUser = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(userData));

    setUserData({
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <form
          className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Personal Inormation</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                name="firstname"
                value={userData.firstname}
                onChange={handleChange}
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full bg-gray-100 p-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                name="lastname"
                value={userData.lastname}
                onChange={handleChange}
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full bg-gray-100 p-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                name="email"
                value={userData.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 p-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                name="address"
                value={userData.address}
                onChange={handleChange}
                id="address"
                type="text"
                placeholder=""
                className="w-full bg-gray-100 p-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                name="city"
                value={userData.city}
                onChange={handleChange}
                id="city"
                type="text"
                placeholder=""
                className="w-full bg-gray-100 p-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                State / Province
              </label>
              <input
                name="state"
                value={userData.state}
                onChange={handleChange}
                id="state"
                type="text"
                placeholder=""
                className="w-full bg-gray-100 p-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                name="zip"
                value={userData.zip}
                onChange={handleChange}
                id="zip"
                type="text"
                placeholder=""
                className="w-full bg-gray-100 p-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white hover:bg-gray-500 p-4 col-span-full rounded w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </form>
    </section>
  );
};

export default AddUser;
