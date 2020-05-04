import React from 'react';
import styled from 'styled-components';
import { fetchTopicPost } from '../api';
import PostBody from './TopicPostBody';
import PostHeader from './TopicPostHeader';


export class TopicPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topicPost: null,
        }
    }

    fetchPosts = () => {
        fetchTopicPost(this.props.selectedTopicId)
                .then(topicPost => this.setState({ topicPost  }))
    }

    componentDidUpdate (prevProps) {
        if (this.props.selectedTopicId !== prevProps.selectedTopicId) {
            this.fetchPosts()
        }
    }

    componentDidMount() {
        if (this.props.selectedTopicId) {
            this.fetchPosts()
        }
    }

    render () {
        return (
            <div className={`${this.props.className} user-posts`}>
                <PostHeader title={this.state.topicPost && this.state.topicPost.title} author={this.state.topicPost && this.state.topicPost.postedBy} />
                <PostBody content={this.state.topicPost && this.state.topicPost.body} />
            </div>
        );
    }
}



export default styled(TopicPost) `
  display: flex;
  flex-direction: column;
  margin: 20px;
  position: relative;
  padding-left: 420px;
`
