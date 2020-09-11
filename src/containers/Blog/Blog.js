import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
    state={
        Post:[],
        SelectedPost:[]
    }
	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((re) => {
                this.setState({
                    Post:re.data.splice(0,4)
                })
				console.log(this.state.Post);
			})
			.catch((re) => {
				console.log(re);
			});
    }
    SelectedPostHandler=(id)=>{
        console.log(id);
    }
	render() {
        const posts =this.state.Post.map((re)=>{
          return <Post title={re.title} key={re.id} clicked={()=>this.SelectedPostHandler(re.id)}/>;
        })
		return (
			<div>
				<section className="Posts">
					{posts}
				</section>
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
