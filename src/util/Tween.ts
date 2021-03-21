function lerp(start: number, end: number, factor: number) {
    return start + (end - start) * factor;
}

export class Tween {
    private duration: number;
    private startValue: number;
    private endValue: number;
    private startTime: number | null;

    constructor(initialValue: number, duration: number = 400) {
        this.duration = duration;
        this.startValue = 0;
        this.endValue = initialValue;
        this.startTime = null;
    }

    public get() {
        if (this.startTime === null) {
            return this.endValue;
        } else {
            const passedTime = Date.now() - this.startTime;

            if (passedTime >= this.duration) {
                this.startTime = null;
                return this.endValue;
            }

            const factor = passedTime / this.duration;
            return lerp(this.startValue, this.endValue, factor);
        }
    }

    public set(value: number, immediate: boolean = false) {
        if (immediate) {
            this.startTime = null;
        } else {
            this.startValue = this.get();
            this.startTime = Date.now();
        }

        this.endValue = value;
    }

    public isDone() {
        if (this.startTime === null) {
            return true;
        }
        if (Date.now() >= this.startTime + this.duration) {
            this.startTime = null;
            return true;
        }
        return false;
    }
}
