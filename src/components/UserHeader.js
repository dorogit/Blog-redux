import React from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userID)
  }
  render() {

    if (!this.props.user) {
      return null;
    }

    return(
      <div>
        {this.props.user.name}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {user: state.reducers.users.find((user)=>user.id === ownProps.userID)}
}

export default connect(mapStateToProps, {fetchUser})(UserHeader)