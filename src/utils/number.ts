/*
** Checks if a string is a valid number.
** It returns true if the string
** is a number (like "123" or "-45.6")
**, and false if it's not (like "abc" or "12a").
*/
export default class NumberUtils
{
    static isNumeric(value: string) {
        return /^-?\d*\.?\d+$/.test(value)
    }
}
