const Keyboard = props => {

    const green = {backgroundColor: 'rgb(52, 252, 52)'}
    const yellow = {backgroundColor: 'rgb(252, 252, 52)'}
    const yellowOrGreen = props.playing ? yellow : green
    const playOrPauseLabel = props.playing ? "Pause" : "Play"
    const playOrPause = props.playing ? props.onPause : props.onPlay

    return (
        <>
            <button style={yellowOrGreen} onClick={playOrPause}>
                {playOrPauseLabel}
            </button>
            <button className="btnStop" onClick={props.onStop}>
                Stop
            </button>
        </>
    )
}

export default Keyboard