import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    console.log(this.props)
    return(
      this.props.posts.map((blog) => {
        return (
        <div className="card">
          <div className="content">
            <div className="header">{blog.title}</div>
            <div className="description">
              {blog.body}
            </div>
          </div>
        </div>
        )
      })
    )
  }

  render() {
    return(
      <div className="ui cards">
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