import React, { Component, Fragment } from "react";

import Header from '../../components/Header';
import Blog from '../../components/Blog';
import Button from '../../components/Button';

import Input from '../../components/forms/Input';

import {
  Container,
  BlogWrapper,
  AddWrapper,
} from './styles';

class HomePage extends Component {

  state = {
    title: null,
    description: null,
  }

  render() {
    const Blogs = [
      { id: 1, title: "The Best Blog evah", description: "This is the best blog ever. trust me!" },
      { id: 2, title: "Just a normal blog", description: "All about my self" },
      { id: 3, title: "My Diary 1", description: "This is my personal diary" },
      { id: 4, title: "My Diary 2", description: "This is my personal diary" },
      { id: 5, title: "My Diary 3", description: "This is my personal diary" },
      { id: 6, title: "My Diary 4", description: "This is my personal diary" },
      { id: 7, title: "My Diary 5", description: "This is my personal diary" },
    ];
    const { title, description } = this.state;
    return (
      <Fragment>
        <Header />
        <Container>
          <h1>Welcome to Blogpedia!</h1>
          <h4>Find the best blog here!</h4>
          <BlogWrapper>
            {Blogs.length && Blogs.map((blog) => {
              return (
                <Blog
                  key={blog.id}
                  title={blog.title}
                  description={blog.description}
                />
              );
            })}
          </BlogWrapper>
        </Container>
        <AddWrapper>
          <h1>Make your own Blog!</h1>
          <br />
          <Input
            value={title}
            label="Blog Title"
            placeholder="My Super Great Blog"
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <Input
            value={description}
            label="Blog Description"
            placeholder="Whats your blog about?"
            onChange={(e) => this.setState({ description: e.target.value })}
          />
          <Button styles="success">Create Blog</Button>
        </AddWrapper>
      </Fragment>
    );
  }
}

export default HomePage;
