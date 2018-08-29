import React, { Component, Fragment } from "react";

import Header from '../../components/Header';
import Blog from '../../components/Blog';
import Button from '../../components/Button';

import {
  Container,
  BlogWrapper,
} from './styles';

class HomePage extends Component {
  render() {
    const Blogs = [
      { id: 1, title: "The Best Blog evah", description: "This is the best blog ever. trust me!" },
      { id: 2, title: "Just a normal blog", description: "All about my self" },
      { id: 3, title: "My Diary", description: "This is my personal diary" },
    ];
    return (
      <Fragment>
        <Header />
        <Container>
          <h1>Welcome to Blogpedia!</h1>
          <h4>Temukan blog yang kamu suka!</h4>
          <h4>Atau <Button styles="success">buat blog</Button> kamu sendiri!</h4>
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
      </Fragment>
    );
  }
}

export default HomePage;
