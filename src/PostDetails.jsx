import PropTypes from "prop-types";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { userId, title } = post;
  const hanleClickGoback = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2 className="">Details About user : {userId} </h2>
      <h2 className=""> {title} </h2>
      <button onClick={hanleClickGoback} className=" btn btn-primary">
        Go Back
      </button>
    </div>
  );
};

PostDetails.propTypes = {};

export default PostDetails;
