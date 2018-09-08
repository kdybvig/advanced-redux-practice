import { connect } from 'react-redux';
import TopNav from '../components/TopNav'

const mapStateToProps = function (state) {
    return {
      messages: state.messages
    };
  };

  const TopNavContainer = connect(mapStateToProps)(TopNav);

  export default TopNavContainer;