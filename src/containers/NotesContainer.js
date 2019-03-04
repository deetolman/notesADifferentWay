import { connect } from 'react-redux';
import Notes from '../components/notes/Notes';

const mapStateToProps = state => ({
  title: 'This is a title',
  subtitle: 'This is a subtitle'
})

//const mapDispatchToProps 

export default connect (
  mapStateToProps
)(Notes);
