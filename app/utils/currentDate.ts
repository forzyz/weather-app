export const getCurrentDate = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: "long"
    });
    
    
    return currentDate;
}
