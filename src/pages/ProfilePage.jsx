import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth.context';
import axios from 'axios';


function ProfilePage() {



  const [dataOnlyForLoggedUsers, setData] = useState(null)
  const { loggedUserId } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5005/api/user/${loggedUserId}`);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [loggedUserId]);


  // loading handler here
  if (!userData) return <div>Cargando...</div>;

  return (
    <div>
      
      <h3>PROFILE PAGE</h3>
      <p>Solo usuarios resgistrados</p>

      <h1>{userData.username}</h1>
      <p>Email: {userData.email}</p>

    </div>
  )
}

export default ProfilePage