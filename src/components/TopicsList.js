import React from 'react';
import styled from 'styled-components';
import TopicCard from './TopicCard';
import ListFooter from './TopicListFooter';
import ListHeader from './TopicListHeader';

export class TopicsList extends React.Component {

    render () {
        return (
            <div className={`${this.props.className}`}>
                <div className="topic-list">
                    <ListHeader/>
                    {this.props.topics && this.props.topics.map((topic, idx) => (
                        <TopicCard
                            number={idx + 1}
                            key={topic.id}
                            name={topic.name}
                            isSelected={this.props.selectedTopicId && this.props.selectedTopicId === topic.id}
                            onClick={this.props.onClickTopic(topic.id)}
                        />
                    ))}
                    <ListFooter/>
                </div>
                <div className="divider"/>
            </div>
        );
    }
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
