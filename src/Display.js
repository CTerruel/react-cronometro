const Display = props => {

    const formatt = unit => unit < 10 ? `0${unit}` : unit

    const hour = formatt(props.state.h)
    const minutes = formatt(props.state.m)
    const seconds = formatt(props.state.s)
    const milliSeconds = formatt(props.state.ms)

    return (
        <span>{hour}:{minutes}:{seconds}:{milliSeconds}</span>
    )
}

export default Display