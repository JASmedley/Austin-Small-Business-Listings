import { connect } from 'react-redux'
import AddListing from '../Components/AddListing'
import {addListing} from '../redux/actions'

const mapDispatchtoProps = (dispatch) => {
    return {
        addListing: (newListing) => dispatch(addListing(newListing)),
    }
}

export default connect(null,mapDispatchtoProps)(AddListing)
