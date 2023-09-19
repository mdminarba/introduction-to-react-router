import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { userId,title } = post;
  return (
    <div>
      <h2 className="">Details About user : {userId} </h2>
      <h2 className=""> {title} </h2>
    </div>
  );
};

PostDetails.propTypes = {};

export default PostDetails;
