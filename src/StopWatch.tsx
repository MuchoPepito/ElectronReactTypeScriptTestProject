import React, { Component } from 'react'
import moment, { Moment } from 'moment'

class StopWatch extends Component<any, any> {

    private _time: any;
    private _intervalId: any;

    public get intervalId(): any {
        return this._intervalId;
    }
    public set intervalId(value: any) {
        this._intervalId = value;
    }

    public get time(): any {
        return this._time;
    }
    public set time(value: any) {
        this._time = value;
    }

    constructor(props: any) {
        super(props)
        this.state = {
            toggle: true,
            currentTime: "00:00:00"
        }
        this.time = null;
    }

    componentDidMount() {
        this.initializeTime();
        this.createInterval();
    }

    initializeTime = (): any => {
        this.time = 0;
        this.setState({
            currentTime: this.formatTime(this.getTime())
        })
    }
    createInterval = (): any => {
        this.intervalId = setInterval(this.updateTime, 100)
    }
    updateTime = (): void => {
        console.log('update time');
        this.time += 100;
        const newTime = this.getTime();
        const formattedTime = this.formatTime(newTime);

        this.setState({ currentTime: formattedTime })
    }
    formatTime = (momentJsObject: Moment): String => {
        return momentJsObject.format("HH:mm:ss");
    }
    getTime = (): Moment => {
        return moment.utc(this.time);
    }

    playTime = (): void => {
        if (!this.state.toggle) {
            this.startTime()
        } else {
            this.pauseTime()
        }
    }
    startTime = (): void => {
        this.createInterval()
        this.toggle()
    }
    pauseTime = (): void => {
        clearInterval(this.intervalId);
        this.toggle();
    }
    resetTime = (): void => {
        this.initializeTime()
        clearInterval(this.intervalId)
        this.setState({ toggle: false })
    }
    toggle = () => {
        this.setState(
            (prevState: any) => ({ toggle: !prevState.toggle })
        )
    }

    render() {

        let toggleText = !this.state.toggle ? "Play" : "Stop";

        return (
            <div className="mdl-cell mdl-cell--12-col">
                <div>
                    <div className="mdl-card__title--expand">
                        <h1 ref="time" className='p-5 m-0' id='time'>{this.state.currentTime}</h1>
                    </div>

                    <div className="mdl-card__actions">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onClick={this.playTime}>
                            {toggleText}
                        </button>

                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--primary float--right" onClick={this.resetTime}>
                            Reset
                </button>
                    </div>
                </div>

            </div>
        )
    }

}

export default StopWatch