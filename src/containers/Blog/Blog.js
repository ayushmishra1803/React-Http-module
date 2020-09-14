import React, { Component } from "react";
import "./Blog.css";
import {Route} from "react-router-dom"
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
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/new-Post">New Post</a>
							</li>
						</ul>
					</nav>
				</header>
				<Route path="/" exact component={Posts}/>
				<Route path="/new-Post" exact component={NewPost}/> 
			</div>
		);
	}
}

export default Blog;
