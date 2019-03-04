import { connect } from 'react-redux';
import { getTitle } from '../../selectors/notes';
import { updateTitle } from '../../actions/notesAction';
import NotesForm from '../../components/notes/NotesForm';

const mapStateToProps = state => ({
  title: getTitle(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(updateTitle(target.value));
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NotesForm);