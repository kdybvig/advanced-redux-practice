import { connect } from 'react-redux';
import TasksPanel from '../components/TasksPanel'

const mapStateToProps = function (state) {
    return {
      tasks: state.tasks
    };
  };

  const TasksPanelContainer = connect(mapStateToProps)(TasksPanel);

  export default TasksPanelContainer;