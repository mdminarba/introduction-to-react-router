
import PropTypes from 'prop-types'

const Post = ({post}) => {
    const {title,body}=post
  return (
    <div className='border bg-red-200 rounded-lg p-2 '>
      <h2 className="text-xl my-5">{title}</h2>
      <p className="">{body}</p>
    </div>
  )
}

Post.propTypes = {

}

export default Post
