
import PropTypes from 'prop-types'

const User = ({user}) => {
    const {name,username,email,phone} = user
  return (
    <div className="border rounded-lg bg-fuchsia-300 p-3">
      <h2 className="text-2xl my-2">Nam: {name}</h2>
      <p className="my-2">Email: {email}</p>
      <p className="">Phone: {phone}</p>
      <h2 className="text-xl">Username: {username}</h2>
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
