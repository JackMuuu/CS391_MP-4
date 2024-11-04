// app/interfaces/weather.ts
export interface Weather {
    datetime: string;
    conditions: string;
    description: string;
    tempmin: number;
    tempmax: number;
}