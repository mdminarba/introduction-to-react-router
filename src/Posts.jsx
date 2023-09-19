
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import Post from './Post'

const Posts = () => {
  const posts = useLoaderData() 
    console.log(posts)
  return (
    <div>
        <h2 className="">This is thi post component: {posts.length}</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 my-10  ">
        {
            posts.map(post=> <Post key={post.id} post={post}></Post>)
        }
        </div>
        
    </div>
  )
}

Posts.propTypes = {}

export default Posts

