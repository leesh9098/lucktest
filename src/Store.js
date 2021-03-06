import { createStore } from "redux";
import Result from "./pages/Result";
import Explain from "./routes/Explain";
import Home from "./routes/Home";
import Loading from "./routes/Loading";

export const StepNum = [
    <Home />,
    <Explain />,
    <Loading />,
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
        return { stage: StepNum[0] }
    }

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())