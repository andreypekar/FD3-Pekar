import React from 'react';
import PropTypes from 'prop-types';

const ColorFrame = props => (
      <div style={{border:"solid 5px "+props.color,padding:"10px"}}>
        {props.children}
      </div>
);

ColorFrame.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorFrame;
