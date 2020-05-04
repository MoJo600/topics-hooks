import React from 'react';
import styled from 'styled-components';

export function PostBody (props) {
    return (
        <div className={`${props.className} post-body`}>
            {props.content && props.content.map((paragraph, idx) => (
                <div key={idx} className="paragraph">
                    {paragraph}
                </div>
            ))}
        </div>
    );
}



export default styled(PostBody) `
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    .paragraph {
        margin: 10px 0;
    }

`
