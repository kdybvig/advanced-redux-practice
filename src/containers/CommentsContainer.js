import { connect } from 'react-redux';
import Comments from '../components/Comments'

const mapStateToProps = function (state) {
    return {
      newComments: state.newComments
    };
  };

  const CommentsContainer = connect(mapStateToProps)(Comments);

  export default CommentsContainer;