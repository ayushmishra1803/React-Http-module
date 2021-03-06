import React, { Component } from 'react';
import Post from "../../components/Post/Post"
import axios from "axios";
import { Route } from 'react-router-dom';
import FullPost from "../FullPost/FullPost"
class Posts extends Component {
	state = {
		Post: [],
	};
	SelectedPostHandler = (id) => {
		this.props.history.push("/"+id);
};
	componentDidMount() {
		console.log(this.props.history);
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((re) => {
				const GettingPost = re.data.splice(0, 4);
				const UpdatedPost = GettingPost.map((re) => {
					return {
						...re,
						author: "Ayush",
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
		const posts = this.state.Post.map((re) => {
			return (
				<Post
					title={re.title}
					key={re.id}
					author={re.author}
					clicked={() => this.SelectedPostHandler(re.id)}
				/>
			);
		});
		return (
			<div>
				<section className="Posts">{posts}</section>
				<section>
					<Route path="/:id" component={FullPost}/>
				</section>
			</div>
		);
	}
}

export default Posts;