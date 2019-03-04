import React from 'react';
import PropTypes from 'prop-types';

function Notes({ title, subtitle }) {
  return (
    <>
      <h1>{ title }</h1>
      {subtitle && <h2>{ subtitle }</h2>}
    </>
  );
}

Notes.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Notes;
