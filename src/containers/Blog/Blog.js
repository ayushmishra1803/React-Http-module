import React, { Component } from "react";
import "./Blog.css";
import {Route,Link} from "react-router-dom"
import Posts from "../../containers/Posts/post"
import NewPost from "../NewPost/NewPost"
class Blog extends Component {
	render() {
		return (
			<div className="block">
				<header>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/new-Post">New Post</Link>
							</li>
						</ul>
					</nav>
				</header>
				<Route path="/" exact component={Posts} />
				<Route path="/new-Post" exact component={NewPost} />
			</div>
		);
	}
}

export default Blog;
