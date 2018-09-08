import { connect } from 'react-redux';
import Tasks from '../components/Tasks'

const mapStateToProps = function (state) {
    return {
      newTasks: state.newTasks
    };
  };

  const TasksContainer = connect(mapStateToProps)(Tasks);

  export default TasksContainer;