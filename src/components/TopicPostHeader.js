import React from 'react';
import styled from 'styled-components';

export class PostHeader extends React.Component {

    render () {
        return (
            <div className={`${this.props.className} post-header`}>
                <div className="title">
                    <h2>
                        {this.props.title}
                    </h2>
                </div>
                <div className="author">
                    <h4>
                        by {this.props.author}
                    </h4>
                </div>
            </div>
        );
    }
}



export default styled(PostHeader) `
  display: flex;
  flex-direction: column;
`
