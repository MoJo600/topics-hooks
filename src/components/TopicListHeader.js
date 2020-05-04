import React from 'react';
import styled from 'styled-components';

export class ChapterHeader extends React.Component {
    render () {
        return (
              <div className={`${this.props.className} chapter-header`}>
                 <h2> Main Concepts</h2>
              </div>
        );
    }
}



export default styled(ChapterHeader) `
    display: flex;
    /* background-color: #9abaed; */
    height: 150px;
    text-align: center;
    margin: 0;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-bottom: 20px;
`
