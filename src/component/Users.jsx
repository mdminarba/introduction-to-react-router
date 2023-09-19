import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  console.log(users)
  return (
    <div>
      <h2 className="text-3xl"> our user:{users.length}</h2>
      <h2 className="text-2xl">This is a Users copmonent</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-10  ">
        {
            users.map(user=><User key={user.id} user={user}></User>)
        }

      </div>
    </div>
  );
};

Users.propTypes = {};

export default Users;
