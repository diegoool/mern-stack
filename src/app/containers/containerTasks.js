import { connect } from 'react-redux'
import Tasks from '../components/Tasks'

import {

} from '../store/tasksReducer'

const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
