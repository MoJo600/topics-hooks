import React from 'react';
import styled from 'styled-components';
import { useTopicPostHook } from '../hooks';
import PostBody from './TopicPostBody';
import PostHeader from './TopicPostHeader';

export function TopicPost (props) {
    const topicPost = useTopicPostHook(props.selectedTopicId)
    const title = topicPost ? topicPost.title : null
    const author = topicPost ? topicPost.postedBy : null
    const content = topicPost ? topicPost.body : null
    return (
        <div className={`${props.className} user-posts`}>
            <PostHeader title={title} author={author} />
            <PostBody content={content} />
        </div>
    );

}



export default styled(TopicPost) `
  display: flex;
  flex-direction: column;
  margin: 20px;
  position: relative;
  padding-left: 420px;
`
