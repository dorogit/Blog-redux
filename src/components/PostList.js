import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return(
      this.props.posts.map((blog) => {
        return (
            <div className="item" key={blog.id}>
              <div className="content">
                <a className="header">{blog.title}</a>
                <div className="meta">
                  <span className="cinema"><UserHeader userID={blog.userId}/></span>
                </div>
                <div className="description">
                  <p>{blog.body}</p>
                </div>
              </div>
            </div>
        )
      })
    )
  }

  render() {
    return(
      <div className="ui divided items">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.reducers.posts}
}

export default connect(
  mapStateToProps
  ,{fetchPosts})(PostList);