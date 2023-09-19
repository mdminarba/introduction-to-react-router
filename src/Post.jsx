
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
    const { id, userId, title,body }=post
  return (
    <div className='border bg-red-200 rounded-lg p-2 '>
      <h2 className="text-xl ">{userId}</h2>
      <h2 className="text-xl my-5">{title}</h2>
      <p className="mb-7">{body}</p>
      <Link className='font-bold text-white mb-5 flex-grow btn-primary py-2 px-2 rounded-xl' to={`/post/${id}`}><button>Show Details</button></Link>
    </div>
  )
}

Post.propTypes = {

}

export default Post
