
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

const Post = ({post}) => {
    const { id, userId, title,body }=post;
    const navigate = useNavigate()
    const hanleClick=()=>{
        navigate(`/post/${id}`)
    }
  return (
    <div className='border bg-red-200 rounded-lg p-2 '>
      <h2 className="text-xl ">{userId}</h2>
      <h2 className="text-xl my-5">{title}</h2>
      <p className="mb-7">{body}</p>
      <button onClick={hanleClick} className=" btn btn-primary">Show Details</button>
    </div>
  )
}

Post.propTypes = {

}

export default Post
