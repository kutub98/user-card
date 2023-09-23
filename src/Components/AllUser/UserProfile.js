// // src/components/UserProfile.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const UserProfile = () => {
//   const { id } = useParams();
//   const users = useSelector((state) => state.users);
//   const user = users.find((user) => user.id === id);

//   if (!user) {
//     return <div>User not found</div>;
//   }

//   return (
    

//         <div class="grid grid-cols md:grid-cols-2 lg:grid-cols-2 gap-4">
  
//         <div class=" h-[250px] col-span-2 md:h-[350px] lg:h-[350px] relative flex justify-center  bg-gradient-to-r from-violet-500 to-fuchsia-500 z-0 ">
          
//           <img src={user.image} alt={user.username} className=' w-60 h-60 lg:h-80 lg:w-80 md:h-80 md:w-80 rounded-full absolute bottom-0 m-auto border-spacing-4 border-4 border-white' />
//         </div>
         
//         <div class="grid  col-span-2 grid-cols md:grid-cols-2 lg:grid-cols-2 px-12">
//           <div className='grid  md:grid-cols-2 lg:grid-cols-2 px-12'>
//             <h1 className='text-center col-span-2 bg-black'>Personal Information</h1>
            
//             <h1>First Name:{user?.first_name}</h1>
//             <h1>last Name:{user?.last_name}</h1>
//             <h1 className=''>Email:{user?.email}</h1>
//             <h1>Age:{user?.age}</h1>
//           </div>
//           <div className='grid  md:grid-cols-2 lg:grid-cols-2 px-12'>
//             <h1 className='text-center col-span-2 bg-black'>Name</h1>
            
//             <h1>Street:{user?.address?.street}</h1>
//             <h1>City:{user?.address?.city}</h1>
//             <h1 className=''>State:{user?.address?.state}</h1>
//             <h1>Zip Code:{user?.address?.zip_code}</h1>
//           </div>
//           </div>
//         </div>
  
       
        
        
//   );
// };

// export default UserProfile;
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="col-span-1 md:col-span-3 lg:col-span-4 h-60 md:h-80 lg:h-[320px] relative flex justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 z-0">
        <img
          src={user.image}
          alt={user.username}
          className="w-60 h-60 md:h-80 md:w-80 lg:h-80 lg:w-80 rounded-full absolute bottom-0 m-auto border-spacing-4 border-4 border-white"
        />
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 md:px-12">
        <div className='m-2'>
          <h1 className="text-center bg-black text-white">Personal Information</h1>
          <h1>First Name: {user?.first_name}</h1>
          <h1>Last Name: {user?.last_name}</h1>
          <h1>Email: {user?.email}</h1>
          <h1>Age: {user?.age}</h1>
        </div>
        <div className='m-2'>
          <h1 className="text-center bg-black text-white">Address</h1>
          <h1>Street: {user?.address?.street}</h1>
          <h1>City: {user?.address?.city}</h1>
          <h1>State: {user?.address?.state}</h1>
          <h1>Zip Code: {user?.address?.zip_code}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
