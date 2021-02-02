import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ColorType, StateType } from '../interfaces';

import Animation from './Animation';

interface BackgroundProps {
  backgroundColor: Array<ColorType>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Background({ backgroundColor }: BackgroundProps) {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Animation(backgroundColor);
  }, [backgroundColor]);
  return (
    <canvas
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: 0,
        top: 0,
        backgroundColor: `rgb(${backgroundColor[0].r}, ${backgroundColor[0].g}, ${backgroundColor[0].b})`,
      }}
      id="canvas-background"
    />
  );
}
const Canvas = styled.canvas`
  position: fixed;
  z-index: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

function mapStateToProps(state: StateType) {
  return {
    backgroundColor: state.backgroundColor,
  };
}

export default connect(mapStateToProps)(Background);
