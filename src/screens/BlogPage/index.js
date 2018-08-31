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
    name: 'The Best Blog evah',
    description: 'This is the best blog ever. trust me!',

    title: '',
    body: '',
    author: '',
    date: 1535533429,
  }

  componentDidMount() {
    this.props.fetchBlogPost(this.state.id);
  }

  render() {
    const { posts } = this.props.blog;
    const { title, body, author } = this.state;
    return (
      <Fragment>
        <Header />
        <Container>
          <h1>{name}</h1>
          <h4>{description}</h4>
          <BlogWrapper>
            {blogs.length && blogs.map((blog) => {
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

export default connect(
  state => ({ blog: state.blog }),
  { addBlog, fetchBlogs }
)(HomePage);
