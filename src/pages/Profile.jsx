import { useParams } from "react-router-dom"

const Profile = () => {
  const {username} = useParams();

  return (
    <>
      <h1>welcome {username} to your profile</h1>
    </>
  )
}

export default Profile