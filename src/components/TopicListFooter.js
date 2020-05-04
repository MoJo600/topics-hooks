import React from 'react';
import styled from 'styled-components';

export function ChapterFooter (props) {
    return (
         <div className={`${props.className} chapter-footer`}/>
    );
}


export default styled(ChapterFooter) `
    display: flex;
    /* background-color: #9abaed; */
    height: 100%;
`
