import { Hash } from "crypto";

export declare namespace SRC {
    async function fetchPath() : Promise<void> {
        throw DOMException.NAMESPACE_ERR
    }
    export declare class Module<M> {
        constructor(
            private List: Stack<>,
            private Private_List: HashMap<never>,
            private Public_List: HashSet<number>, 
        ) { }

        private getList(L: Stack<>): ReturnType<List> {
            console.log(`Fetching List....${L}`);
            return this.List;
        }

        private getPrivateList(L: HashMap<number>): Hash<never> | any {
            if(L instanceof Module) { }
            return null;
        }
    }
}