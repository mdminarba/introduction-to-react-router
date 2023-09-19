
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

const User = ({user}) => {
    const { id,name,username,email,phone} = user
    const navigate = useNavigate();
    const hanleClick=()=>{
    navigate(`/user/${id}`)
    } 
    
  return (
    <div className="border rounded-lg bg-fuchsia-300 px-1 py-5">
      <h2 className="text-2xl my-2">Nam: {name}</h2>
      <p className="my-2">Email: {email}</p>
      <p className="my-2">Phone: {phone}</p>
      <h2 className="text-xl mb-5 ">Username: {username}</h2>
      <button onClick={hanleClick} className=" btn btn-primary">Show Details</button>
    </div>
  )
}

User.propTypes = {
    user:PropTypes.object,
    name:PropTypes.object,
    username:PropTypes.object,
    email:PropTypes.object,
    phone:PropTypes.object,

}

export default User
