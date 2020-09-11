import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
	state = {
		Post: [],
	};
	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((re) => {
				const GetingPost = re.data.slice(0, 4);
				const UpdatedPost = GetingPost.map((re) => {
					return {
						...GetingPost,
						autor: "Ayush",
					};
				});
				this.setState({
					Post: UpdatedPost,
				});
				console.log(this.state.Post);
			})
			.catch((re) => {
				console.log(re);
			});
	}
	render() {
		const posts = this.state.Post.map((re,index) => {
			return <Post title={re.title} key={index} autor={re.autor} />;
		});
		return (
			<div>
				<section className="Posts">{posts}</section>
				<section>
					<FullPost />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
