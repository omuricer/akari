type BackAction = () => void;

export class BackHistory {
  histories: BackAction[];
  constructor() {
    this.histories = [];
  }

  push(backAction: BackAction): void {
    this.histories.push(backAction);
  }
  pop(): BackAction | null {
    return this.histories.pop() ?? null;
  }
  back(): void {
    this.pop();
    const backAction = this.pop();
    if (!backAction) return;
    return backAction();
  }
  flush(): void {
    this.histories.splice(0);
  }
}

const backhistory = new BackHistory();
export default backhistory;
