export default class NumberUtils
{
    static isNumeric(value: string) {
        return /^-?\d*\.?\d+$/.test(value)
    }
}
