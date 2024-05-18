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
}