/*
** Creates a sinusoidal wave based on a given frequency
** and amplitude.
** It returns two arrays:
** x: time values from 0 to 100 (with a step of 0.1)
** y: corresponding sine values calculated with the
** formula amplitude * sin(frequency * time)
*/
export default class Sin
{
    static generateSinusoid(frequency: number, amplitude: number) {
    const x : number[] = []
    const y : number[] = []
    const step = 0.1

    for (let i = 0; i <= 100; i += step) {
        x.push(i) // Add each time value
        y.push(amplitude * Math.sin(frequency * i))
    }
    return { x, y }
    }
}
