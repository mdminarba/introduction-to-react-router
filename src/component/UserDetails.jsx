import PropTypes from "prop-types";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate()
  const { name } = user;
  const hanleClickGoback = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2 className="">Details About user : {name} </h2>
      <button onClick={hanleClickGoback} className=" btn btn-primary">
        Go Back
      </button>
    </div>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
