import React from 'react';
import styled from 'styled-components';

export function PostHeader (props) {
    return (
        <div className={`${props.className} post-header`}>
            <div className="title">
                <h2>
                    {props.title}
                </h2>
            </div>
            <div className="author">
                <h4>
                    by {props.author}
                </h4>
            </div>
        </div>
    );
}



export default styled(PostHeader) `
  display: flex;
  flex-direction: column;
`
