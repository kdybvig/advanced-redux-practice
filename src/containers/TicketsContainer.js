import { connect } from 'react-redux';
import Tickets from '../components/Tickets'

const mapStateToProps = function (state) {
    return {
      tickets: state.tickets
    };
  };

  const TicketsContainer = connect(mapStateToProps)(Tickets);

  export default TicketsContainer;