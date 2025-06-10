export default class Sin
{
    static generateSinusoid(frequency: number, amplitude: number) {
    const x : number[] = [] // Time axis (in seconds)
    const y : number[] = [] // Amplitude axis (sinusoidal values)
    const step = 0.1

    for (let i = 0; i <= 100; i += step) {
        x.push(i) // Add each time value
        y.push(amplitude * Math.sin(frequency * i)) // Calculates the sinusoid and adds the value
    }
    return { x, y }
    }
}
