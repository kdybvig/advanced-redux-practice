import { connect } from 'react-redux';
import TransactionsPanel from '../components/TransactionsPanel'

const mapStateToProps = function (state) {
    return {
      orders: state.orders
    };
  };

  const TransactionsPanelContainer = connect(mapStateToProps)(TransactionsPanel);

  export default TransactionsPanelContainer;