import React from 'react';
import styled from 'styled-components';

export class TopicCard extends React.Component {


    render () {
        let isSelectedClassName = this.props.isSelected ? 'selected' : ''
        return (
              <div className={`${this.props.className} ${isSelectedClassName} user row`} onClick={this.props.onClick}>
                    <span className="number">{this.props.number}.</span>
                    <span className="user-name">{this.props.name}</span>
              </div>

        );
    }
}



export default styled(TopicCard) `
    display: flex;
    align-items: center;
    padding: 10px 10px;
    margin: 0;
    cursor: pointer;
    transition: 0.3s;
    padding-left: 20px;

    &.selected {
        background-color: gainsboro;
    }

    &:hover:not(.selected) {
        background-color: ghostwhite;
    }

    span.number {
        margin-right: 5px;
    }

`
