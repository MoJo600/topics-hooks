import React from 'react';
import styled from 'styled-components';
import ListFooter from './TopicListFooter';
import ListHeader from './TopicListHeader';
import TopicListRow from './TopicListRow';

export function TopicsList (props) {
    return (
        <div className={`${props.className}`}>
            <div className="topic-list">
                <ListHeader/>
                {props.topics && props.topics.map((topic, idx) => (
                    <TopicListRow
                        number={idx + 1}
                        key={topic.id}
                        name={topic.name}
                        isSelected={props.selectedTopicId && props.selectedTopicId === topic.id}
                        onClick={props.onClickTopic(topic.id)}
                    />
                ))}
                <ListFooter/>
            </div>
            <div className="divider"/>
        </div>
    );
}

export default styled(TopicsList) `

    position: relative;
    z-index: 1;
    background-color: #f7f7f7;

    .topic-list {
        display: flex;
        flex-direction: column;
        border-right: 1px solid #d9d2c1;

        position: fixed;
        height: 100%;
        /* position: relative; */
        width: 400px;
        /* margin: 20px 20px; */
        overflow: auto;
        padding: 0px 0 0 0px;
         overflow: scroll;
    }
`
