import React, { PureComponent } from 'react';
import Notes from '../components/notes/';

function AllNotes({ notes }) {
    return (
      <>
        <Notes notes={notes} />
      </>
    )
  }
export default AllNotes;


