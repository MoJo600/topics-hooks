import React from 'react';
import styled from 'styled-components';

function Dashboard(props) {
  return (
    <div className={`${props.className} dashboard`}>
        {props.children}
    </div>
  );
}



export default styled(Dashboard) `
display: flex;
`
