import App from "../App";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
    return {
        stepNumber: state.stage
    }
}

export default connect(mapReduxStateToReactProps)(App);