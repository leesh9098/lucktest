import { createStore } from "redux";
import Result from "./pages/Result";
import Explain from "./routes/Explain";
import Home from "./routes/Home";
import countapi from "countapi-js";

export const StepNum = [
    <Home />,
    <Explain />,
    <Result />
]

export default createStore((state, action) => {
    if (state === undefined) {
        return { stage: StepNum[0] }
    }

    if (action.type === 'NEXTSTEP') {
        return { stage: StepNum[action.stepLocation + 1] }
    }

    if (action.type === 'RESET') {
        countapi.update('numberofuser', 'users', 1)
            .then(res => action.hitCount = res.value)
        return { stage: StepNum[0] }
    }

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())