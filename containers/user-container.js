import { connect } from 'react-redux'
import { getUser } from './../selectors'


function mapStateToProps (state) {
  return getUser(state)
}

export default connect(mapStateToProps)
