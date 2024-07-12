// "use client";
// import { useEffect, useState } from 'react';
// import { getUser } from '../../services/api';

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         try {
//           const data = await getUser(token);
//           setUser(data);
//         } catch (error) {
//           console.error('Failed to fetch user:', error);
//         }
//       }
//     };
//     fetchUser();
//   }, []);

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Profile</h1>
//       <p>Username: {user.username}</p>
//       <p>Email: {user.email}</p>
//       <p>Phone: {user.phone}</p>
//       <p>Name: {user.name}</p>
//       <p>Surname: {user.surname}</p>
//       <p>Country: {user.country}</p>
//       <p>City: {user.city}</p>
//     </div>
//   );
// };

// export default ProfilePage;
