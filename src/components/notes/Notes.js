import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Dogs({ dogs }) {
  const 
}
 
    return (
      <li key={note.title}>
        <Note title={note.title} body={note.body} />
      </li>
    );
  
  return (
    <ul>
      {listOfNotes}
    </ul>
  );

Notes.propTypes = {
  notes: PropTypes.array.isRequired
}
export default Notes;