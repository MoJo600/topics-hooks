import React from 'react';
import styled from 'styled-components';

export class Post extends React.Component {

    render () {
        return (
            <div className={`${this.props.className} post`}>
                <div className="body">
                    {this.props.body && this.props.body.map(paragraph => (
                        <div className="paragraph">
                            {paragraph}
                       </div>
                    ))}
                </div>
            </div>
        );
    }
}



export default styled(Post) `
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  .paragraph {
      margin: 20px 0;
  }
`
