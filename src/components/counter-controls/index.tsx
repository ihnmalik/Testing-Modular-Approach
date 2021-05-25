import { useReducer } from "react";
import { useSelector } from "react-redux";
import { store } from "root"
import { connect } from "react-redux"

const { counter } = store;

interface Props {
    incCount: () => void;
    decCount: () => void;
    resetCount: () => void;
}

const CounterControls = ({ incCount, decCount, resetCount }: Props) => {
    return (
        <div>
            <button onClick={incCount}>+</button>
            <button onClick={decCount}>-</button>
            <button onClick={resetCount}>reset</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    incCount: () => dispatch(counter.actions.incCounter()),
    decCount: () => dispatch(counter.actions.decCounter()),
    resetCount: () => dispatch(counter.actions.resetCount())
})

export default connect(undefined, mapDispatchToProps)(CounterControls)
