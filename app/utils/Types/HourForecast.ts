export type HourForecast = {
    time: string;
    temp_c: number;
    temp_f: number;
    condition: {
        text: string;
    }
}