import React from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userID)
  }
  render() {

    const user = this.props.users.find((user)=>user.id === this.props.userID)

    if (!user) {
      return null;
    }
    
    return(
      <div>
        {user.name}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.reducers.user}
}

export default connect(mapStateToProps, {fetchUser})(UserHeader)