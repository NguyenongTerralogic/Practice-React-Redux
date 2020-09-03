import React, { useEffect } from "react";
import { connect } from "react-redux";
import User from "./User";
import { saveUserList } from "../redux/actions/CallAPI";
const UserList = (props) => {
  useEffect(() => {
    props.onSave();
  }, [props]);
  const renderList = () => {
    return props.User.map((u, index) => {
      return (
        <div className="col-4" key={index}>
          <User user={u} />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="w-100 text-center mb-4">
          <h1 className="display-4">User List</h1>
        </div>
        {renderList}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    User: state.UserReducer.User,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: () => {
      dispatch(saveUserList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
