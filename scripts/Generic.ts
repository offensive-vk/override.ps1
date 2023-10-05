export namespace Global {
    class Stack<T> {
        private elements: T[] = [];
        public static StackName: string | undefined = '';
    
        push(element: T): void {
            this.elements.push(element);
        }
    
        pop(): T | undefined {
            return this.elements.pop();
        }
    
        isEmpty(): boolean {
            return this.elements.length === 0;
        }
    }
    
    // Create a stack of numbers
    const numberStack = new Stack<number>();
    numberStack.push(1);
    numberStack.push(2);
    numberStack.push(3);
    
    while (!numberStack.isEmpty()) {
        const num = numberStack.pop();
        console.log(num);
    }
    
    // Create a stack of strings
    const stringStack = new Stack<string>();
    stringStack.push("Hello");
    stringStack.push("TypeScript");
    
    while (!stringStack.isEmpty()) {
        const str = stringStack.pop();
        console.log(str);
    }
}
type Special = string & boolean;

export interface Default {
    isDefault?: boolean | undefined;
    isPrivate?: boolean | undefined;
    isPermanent?: boolean | undefined;
    isMasterOrMain?: boolean | undefined;

    AllUserNames: Array<string> | null;
    displayStats: Special | undefined;
    callStats(): Array<Special> | Array<string> | null;
}

export class NewUsers implements Default{
    public static ClassName: string | undefined = `NewUsers`;
    public static DefaulUserName: string | null;
    
    constructor(
        protected isDefault?: boolean | undefined,
        protected isPrivate?: boolean | undefined,
        protected isPermanent?: boolean | undefined,
        protected isMasterOrMain?: boolean | undefined,
        protected AllUserNames: Array<string> | null,
        protected displayStats: Special | undefined
    ){}
    protected callStats(): Array<Special> | Array<string> | null{
        console.log(`Displaying All <Protected> Data from `)
    }

}