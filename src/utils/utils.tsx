export default class utils {
    static anyFalseyValues(obj: { [key: string]: any }): boolean {
        for (const key in obj) {
          if (obj.hasOwnProperty(key) && !obj[key]) {
            return true;
          }
        }
        return false;
    }
    static isValidEmail(string: string): boolean {
        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(string);
    }
    static isValidPhoneNumber(number: string): boolean {
        const phoneRegex: RegExp = /^\d{10}$/;
        return phoneRegex.test(number);
    }
    static convertImageToBase64(file: File): Promise<string> {
      
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            resolve(reader.result.toString().split(',')[1]);
          } else {
            reject(new Error("Failed to convert file to base64."));
          }
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    }
    static combineDateAndTime(date: string, time: string): Date {
      const dateObj = new Date(date);
      const [hours, minutes] = time.split(':').map(Number);
      dateObj.setHours(hours, minutes, 0, 0);
      return dateObj;
    }
    static formatDate(date: Date): string {
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: '2-digit',
        month: 'long'
      };
      const formattedDate = date.toLocaleDateString('en-US', options);
      const [weekday, month, day] = formattedDate.split(' ');
      return `${weekday} ${day} ${month}`;
    }
    static formatTime(date: Date): string {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      
      return `${hours}:${minutes}`;
    }
    static formatDateToDateString(date: Date): string {
      const day = String(date.getDate()).padStart(2, '0'); 
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const year = date.getFullYear(); 
    
      return `${year}-${month}-${day}`;
    }
    static formatTimeToTimeString(date: Date): string {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0'); 
    
      return `${hours}:${minutes}`;
    }
}