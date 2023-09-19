
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const User = ({user}) => {
    const { id,name,username,email,phone} = user
  return (
    <div className="border rounded-lg bg-fuchsia-300 px-1 py-5">
      <h2 className="text-2xl my-2">Nam: {name}</h2>
      <p className="my-2">Email: {email}</p>
      <p className="my-2">Phone: {phone}</p>
      <h2 className="text-xl mb-5 ">Username: {username}</h2>
    <Link className='font-bold text-white  btn-primary py-2 px-2 rounded-xl' to={`/user/${id}`}><button>Show Details</button></Link>
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
