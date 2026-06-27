class TemperatureSensor {
    private readings: number[] = [];

    addReading(value: number): void {
        this.readings.push(value)
        // Only add if value is between -50 and 150 (inclusive)
    }

    getAverage(): number {
        // Return the average of all readings, or 0 if no readings exist
        if(this.readings.length === 0){
            return 0
        }

        const sum = this.readings.reduce((a,b)=>a+b,0)
        return Math.round((sum/this.readings.length)*100)/100
    }

    getReadingCount(): number {
        // Return how many readings have been recorded
        return this.readings.length
    }

    getReadings(): number[] {
        // Return a copy of the readings array (not the original)
        return [...this.readings]
    }
}

// Test your implementation
const sensor = new TemperatureSensor();
sensor.addReading(22.5);
sensor.addReading(23.1);
sensor.addReading(200.0);  // Should be rejected
sensor.addReading(-10.0);

console.log(`Count: ${sensor.getReadingCount()}`);  // 3
console.log(`Average: ${sensor.getAverage()}`);     // 11.87