import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUser } from "../Redux/ActionType/ActionType"; // Correct import path
import { Link } from "react-router-dom";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/users.json");
        const data = await response.json();
        console.log(data);

        dispatch(allUser(data.users));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 px-16">
      {users.map((user) => (
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
  );
};

export default UsersList;
