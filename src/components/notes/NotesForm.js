import React from 'react';
import PropTypes from 'prop-types';

function NotesForm({ title, onChange }) {
  return (
    <input name="title" value={title} onChange={onChange} />

  )
}

NotesForm.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NotesForm;