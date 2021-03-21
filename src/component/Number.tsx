import { Component } from "react";
import { combineClasses } from "../util/combineClasses";
import { Tween } from "../util/Tween";

interface IProps {
    unit?: string;
    children: number | null;
}

type DirectionType = "increasing" | "decreasing" | null;

interface IState {
    outputText: string;
    direction: DirectionType;
}

export class Number extends Component<IProps, IState> {
    animationFrameRequest: number | null = null;
    tween: Tween;
    direction: DirectionType = null;
    isDefined: boolean = true;

    handleAnimationFrame = () => {
        const animationDone = this.tween.isDone();
        const showNumber = this.isDefined || !animationDone;
        const value = showNumber ? this.tween.get() : null;

        const outputText = this.formatValue(value);
        const direction = animationDone ? null : this.direction;

        this.setState({ outputText, direction });

        if (animationDone) {
            this.animationFrameRequest = null;
        } else {
            this.requestAnimationFrame();
        }
    };

    constructor(props: IProps) {
        super(props);

        const { children: initialValue } = props;
        this.tween = new Tween(initialValue || 0);

        this.state = {
            outputText: this.formatValue(initialValue),
            direction: null,
        };
    }

    formatValue(value: number | null) {
        if (value === null) {
            return "-";
        } else {
            return Math.floor(value).toLocaleString();
        }
    }

    requestAnimationFrame() {
        this.animationFrameRequest = window.requestAnimationFrame(this.handleAnimationFrame);
    }

    shouldComponentUpdate(nextProps: Readonly<IProps>) {
        const { children: from } = this.props;
        const { children: to } = nextProps;

        if (from !== to) {
            const fromFormatted = this.formatValue(from);
            const toFormatted = this.formatValue(to);

            if (toFormatted !== fromFormatted) {
                this.setupAnimation(from, to);
            }
        }

        return true;
    }

    setupAnimation(from: number | null, to: number | null) {
        if (to !== null) {
            this.isDefined = true;
            this.tween.set(to);

            if (from === null) {
                this.startAnimation("increasing");
            } else {
                this.startAnimation(to > from ? "increasing" : "decreasing");
            }
        } else {
            this.isDefined = false;
            this.tween.set(0);

            this.startAnimation("decreasing");
        }
    }

    startAnimation(direction: DirectionType) {
        this.direction = direction;

        if (this.animationFrameRequest === null) {
            this.requestAnimationFrame();
        }
    }

    render() {
        const { unit } = this.props;
        const { outputText, direction } = this.state;

        return (
            <span className={combineClasses("number", direction)}>
                <span className="number-value">{outputText}</span>
                {unit && <span className="number-unit">{` ${unit}`}</span>}
            </span>
        );
    }

    componentWillUnmount() {
        const { animationFrameRequest } = this;

        if (animationFrameRequest !== null) {
            window.cancelAnimationFrame(animationFrameRequest);
        }
    }
}
