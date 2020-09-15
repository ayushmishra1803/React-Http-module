import React, { Component } from "react";

import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
	state = {
		loadedPost: null,
	};
	componentDidMount() {
		console.log(this.props.match.params.id);
		this.loadData();
	}
	componentDidUpdate(){
		this.loadData();
	}
	loadData=()=>{
		if (this.props.match.params.id) {
			if (
				!this.state.loadedPost ||
				(this.state.loadedPost &&
					this.state.loadedPost.id !== this.props.match.params.id)
			) {
				axios
					.get(
						"https://jsonplaceholder.typicode.com/posts/" +
							this.props.match.params.id,
					)
					.then((re) => {
						console.log(re);
						this.setState({
							loadedPost: re.data,
						});
					})
					.catch((re) => {
						console.log(re);
					});
			}
		}
	}
	DeletePostHandler=()=>{
		console.log(this.props.match.params.id);
		axios.delete("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id).then(re=>{
			console.log(re);
		}).catch(re=>{
			console.log(re);
		});
	}
	render() {
		let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
		if (this.props.match.params.id) {
			post = <p style={{ textAlign: "center" }}> Loading POst</p>;
		}
		if (this.state.loadedPost) {
			post = (
				<div className="FullPost">
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.body}</p>
					<div className="Edit">
						<button className="Delete" onClick={this.DeletePostHandler}>Delete</button>
					</div>
				</div>
			);
		}

		return post;
	}
}

export default FullPost;
