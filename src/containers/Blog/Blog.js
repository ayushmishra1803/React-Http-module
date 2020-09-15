import React, { Component } from "react";
import "./Blog.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Posts from "../../containers/Posts/post";
import NewPost from "../NewPost/NewPost";
class Blog extends Component {
	render() {
		return (
			<div className="block">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/new-Post">New Post</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					<Route path="/new-Post" exact component={NewPost} />
					<Route path="/"  component={Posts} />
				</Switch>
			</div>
		);
	}
}

export default Blog;
