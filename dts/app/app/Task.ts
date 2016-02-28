export class Task {
    summary: string;
    done: boolean;

    constructor(summary: string) {
        this.summary = summary;
        this.done = false;
    }
}
