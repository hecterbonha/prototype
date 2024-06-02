export const calculate = (a: unknown, b: unknown): number => {
    const num_A = (Number(a) as number);
    const num_B = (Number(b) as number);
    return num_A + num_B;
}