import { connect } from 'react-redux';
import Listing from '../Components/Listing';

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    users: state.users.username,
  }
}

export default connect(mapStateToProps)(Listing)