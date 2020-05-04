import React from 'react';
import styled from 'styled-components';

export class PostBody extends React.Component {

    render () {
        return (
            <div className={`${this.props.className} post-body`}>
                {this.props.content && this.props.content.map((paragraph, idx) => (
                    <div key={idx} className="paragraph">
                        {paragraph}
                    </div>
                ))}
            </div>
        );
    }
}



export default styled(PostBody) `
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    .paragraph {
        margin: 10px 0;
    }

`
