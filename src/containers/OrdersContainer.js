import { connect } from 'react-redux';
import Orders from '../components/Orders'

const mapStateToProps = function (state) {
    return {
      newOrders: state.newOrders
    };
  };

  const OrdersContainer = connect(mapStateToProps)(Orders);

  export default OrdersContainer;