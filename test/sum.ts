export default function sum(...args: number[]): number | void {
    return args.reduce((acc, curr) => acc + curr, 0) || 0;
}

// export default function sum(x: any, y: any): number | void {

// }