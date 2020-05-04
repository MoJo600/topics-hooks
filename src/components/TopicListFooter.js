import React from 'react';
import styled from 'styled-components';


export class ChapterFooter extends React.Component {
    render () {
        return (
              <div className={`${this.props.className} chapter-footer`}/>
        );
    }
}



export default styled(ChapterFooter) `
    display: flex;
    /* background-color: #9abaed; */
    height: 100%;
`
