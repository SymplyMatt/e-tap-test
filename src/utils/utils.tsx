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
    static createErrorNotification(error : string, time: number) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'p-20 flex items-center bg-errorBg rounded-12 text-white relative w-[400px] justify-between slide-in';
  
      const p1 = document.createElement('p');
      const p2 = document.createElement('p');
      p1.innerHTML = 'ERROR!';
      p1.className = 'text-[#AA2924] font-bold text-[18px] text-left';
      p2.innerHTML = error;
      p2.className = 'text-[#C4736F] text-left';
  
      const textContainer = document.createElement('div');
      textContainer.className = 'flex flex-col justify-between p-0 h-full';
      textContainer.appendChild(p1);
      textContainer.appendChild(p2);
  
      const cancel = document.createElement('div');
      cancel.className = 'flex items-center cursor-pointer text-[28px] text-[#CB9B99]';
      cancel.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  
      const errorIconContainer = document.createElement('div');
      errorIconContainer.className = 'flex items-center justify-center p-10 w-[40px] h-[40px] rounded-50 bg-[#E1B0AC]';
      const errorIcon = document.createElement('i');
      errorIcon.className = 'fa-solid fa-xmark text-[#AA2924] text-[28px]';
      errorIconContainer.appendChild(errorIcon);
  
      const infoContainer = document.createElement('div');
      infoContainer.className = 'flex gap-10 items-center justify-center h-full';
      infoContainer.appendChild(errorIconContainer);
      infoContainer.appendChild(textContainer);
  
      errorDiv.appendChild(infoContainer);
      errorDiv.appendChild(cancel);
  
      const notificationContainer = document.querySelector('.notification-container');
      if (notificationContainer) {
        notificationContainer.appendChild(errorDiv);
        setTimeout(() => {
          errorDiv.classList.add('slide-out');
          errorDiv.addEventListener('animationend', () => {
            if (notificationContainer.contains(errorDiv)) {
              notificationContainer.removeChild(errorDiv);
            }
          });
        }, time);
        cancel.addEventListener('click', () => {
          errorDiv.classList.add('slide-out');
          errorDiv.addEventListener('animationend', () => {
            if (notificationContainer.contains(errorDiv)) {
              notificationContainer.removeChild(errorDiv);
            }
          });
        });
      }
    }
    static createSuccessNotification(message : string, time: number) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'p-20 flex items-center bg-successBg rounded-12 text-white relative w-[400px] justify-between slide-in';
  
      const p1 = document.createElement('p');
      const p2 = document.createElement('p');
      p1.innerHTML = 'SUCCESS!';
      p1.className = 'text-[#637A5D] font-bold text-[18px]';
      p2.innerHTML = message;
      p2.className = 'text-[#AEC8A5]';
  
      const textContainer = document.createElement('div');
      textContainer.className = 'flex flex-col justify-between p-0 h-full';
      textContainer.appendChild(p1);
      textContainer.appendChild(p2);
  
      const cancel = document.createElement('div');
      cancel.className = 'flex items-center cursor-pointer text-[28px] text-[#AEC8A5]';
      cancel.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  
      const errorIconContainer = document.createElement('div');
      errorIconContainer.className = 'flex items-center justify-center p-10 w-[40px] h-[40px] rounded-50 bg-[#C7E0B9]';
      const errorIcon = document.createElement('i');
      errorIcon.className = 'fa-solid fa-xmark text-[#637A5D] text-[28px]';
      errorIconContainer.appendChild(errorIcon);
  
      const infoContainer = document.createElement('div');
      infoContainer.className = 'flex gap-10 items-center justify-center h-full';
      infoContainer.appendChild(errorIconContainer);
      infoContainer.appendChild(textContainer);
  
      errorDiv.appendChild(infoContainer);
      errorDiv.appendChild(cancel);
  
      const notificationContainer = document.querySelector('.notification-container');
      if (notificationContainer) {
        notificationContainer.appendChild(errorDiv);
        setTimeout(() => {
          errorDiv.classList.add('slide-out');
          errorDiv.addEventListener('animationend', () => {
            if (notificationContainer.contains(errorDiv)) {
              notificationContainer.removeChild(errorDiv);
            }
          });
        }, time);
        cancel.addEventListener('click', () => {
          errorDiv.classList.add('slide-out');
          errorDiv.addEventListener('animationend', () => {
            if (notificationContainer.contains(errorDiv)) {
              notificationContainer.removeChild(errorDiv);
            }
          });
        });
      }
    }
    static decodeJWT(token: string) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    }
    static formatDateAndTime(date : Date) {
      const options : any = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
      };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    static capitalizeEachWord(input: string): string {
      return input
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
    }
    static camelCaseToFirstLast(str: string): string {
      const result = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
      return result.replace(/\b\w/g, char => char.toUpperCase());
    }
}