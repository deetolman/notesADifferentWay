import { connect } from 'react-redux';
import { getTitle, getSubtitle } from '../../selectors/notes';
import { updateTitle, updateSubtitle } from '../../actions/notesAction';
import NotesForm from '../../components/notes/NotesForm';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      title: updateTitle,
      subtitle: updateSubtitle
    };
    dispatch(factoryMethod[target.name](target.value));
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NotesForm);