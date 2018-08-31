import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Blog from '../../components/Blog';
import Button from '../../components/Button';

import Input from '../../components/forms/Input';

import {
  addBlog,
  fetchBlogs,
} from '../../redux/actions/blog';

import {
  Container,
  BlogWrapper,
  AddWrapper,
} from './styles';

class HomePage extends Component {

  state = {
    name: '',
    description: '',
  }

  componentDidMount() {
    this.props.fetchBlogs();
  }

  render() {
    const { blogs } = this.props.blog;
    const { name, description } = this.state;
    return (
      <Fragment>
        <Header />
        <Container>
          <h1>Welcome to Blogpedia!</h1>
          <h4>Find the best blog here!</h4>
          <BlogWrapper>
            {blogs.length && blogs.map((blog) => {
              return (
                <Blog
                  key={blog.id}
                  name={blog.name}
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
            value={name}
            label="Blog name"
            placeholder="My Super Great Blog"
            onChange={(e) => this.setState({ name: e.target.value })}
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

export default connect(
  state => ({ blog: state.blog }),
  { addBlog, fetchBlogs }
)(HomePage);
