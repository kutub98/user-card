import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUser } from "../Redux/ActionType/ActionType"; // Correct import path
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [viewAllUser, setViewAllUser] = useState(false); // Initially, display 3 users

  useEffect(() => {
    // Replace with actual data fetching logic
    const fetchData = async () => {
      try {
        const response = await fetch("/users.json"); // Replace with your API endpoint
        const data = await response.json();
        console.log(data);

        // Dispatch the action using the correct action type
        dispatch(allUser(data.users));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className=" block m-auto items-center justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 ">
        {viewAllUser
          ? users.map((user) => (
              <div key={user.id} className="cols-span-12 justify-center ">
                <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl md:mx-4 mb-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                  <img
                    src={user?.image}
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                  />
                  <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                      <h2 className="text-xl font-semibold sm:text-2xl">
                        {user.username}
                      </h2>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                      <Link
                        to={user?.email}
                        rel="noopener noreferrer"
                        aria-label="Dribble"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      ></Link>
                      <Link
                        to={user?.email}
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      ></Link>
                      <Link
                        to={user?.email}
                        rel="noopener noreferrer"
                        aria-label="Email"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      ></Link>
                    </div>
                    <Link
                      className="p-2 rounded text-white bg-green-600"
                      to={`/user/${user?.id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : users.slice(0, 3).map((user) => (
              <div key={user.id} className="cols-span-12 justify-center ">
                <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl md:mx-4 mb-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                  <img
                    src={user?.image}
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                  />
                  <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                      <h2 className="text-xl font-semibold sm:text-2xl">
                        {user.username}
                      </h2>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                      <Link
                        to={user?.email}
                        rel="noopener noreferrer"
                        aria-label="Dribble"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      ></Link>
                      <Link
                        to={user?.email}
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      ></Link>
                      <Link
                        to={user?.email}
                        rel="noopener noreferrer"
                        aria-label="Email"
                        className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                      ></Link>
                    </div>
                    <Link
                      className="p-2 rounded text-white bg-green-600"
                      to={`/user/${user?.id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <div className="w-full flex justify-center">
        <button
          className=" hover:bg-red-600 m-auto p-4 bg-green-500 text-white"
          onClick={() => setViewAllUser(!viewAllUser)}
        >
          {viewAllUser ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Home;
