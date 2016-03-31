import { connect } from 'react-redux'
import { getJokes } from './../selectors'


function mapStateToProps (state) {
  return {jokes: getJokes(state)}
}

export default connect(mapStateToProps)
