import React from 'react';
import { Button } from 'antd';

const Submit = ({ onSave, onCancel }) => (
  <div>
    <Button onClick={onSave}>Save</Button>
    <Button onClick={onCancel}>Cancel</Button>
  </div>
);

export default Submit;
