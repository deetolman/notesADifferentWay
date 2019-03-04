import { connect } from 'react-redux';
import Notes from '../../components/notes/Notes';
import { getTitle, getSubtitle } from '../../selectors/notes';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
})

//const mapDispatchToProps 

export default connect (
  mapStateToProps
)(Notes);
