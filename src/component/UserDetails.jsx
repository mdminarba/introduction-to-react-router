
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
    const user = useLoaderData();
    const {name}=user
  return (
    <div>
        <h2 className="">Details About user : {name} </h2>
        
        </div>
  )
}

UserDetails.propTypes = {}

export default UserDetails