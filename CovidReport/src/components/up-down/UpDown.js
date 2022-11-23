import React from 'react';

import {Up, Down} from '../../assets/icons/index.js';

export default function UpDown(props) {
  const {recovered} = props;

  const upDownArrowRendering = () => {
    if (recovered < 10000000) return <Up height={40} width={40} />;
    else return <Down height={40} width={40} />;
  };
  return upDownArrowRendering();
}
