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
    static camelCaseToNormal = (camelCaseStr: string): string => {
      return camelCaseStr
        .replace(/([A-Z])/g, ' $1')
        .toLowerCase()
        .replace(/^\w/, c => c.toUpperCase());
    };
}
export const img = 'data:image/jpeg;base64,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'

export const biologyTopics = [
  {
    topic: "Cell Biology",
    description: "Cell biology is the branch of biology that focuses on the structure, function, and behavior of cells, which are the smallest units of life. This field examines processes such as cell growth, reproduction, division, and death. It also delves into the study of organelles within the cell, such as the nucleus, mitochondria, and endoplasmic reticulum, to understand how cells perform vital functions like metabolism, energy production, and protein synthesis. Cell biology is crucial for comprehending how diseases like cancer develop at the cellular level and for exploring the potential for therapies based on cellular mechanisms."
  },
  {
    topic: "Genetics",
    description: "Genetics is the study of heredity and variation in living organisms, focusing on how genes—the units of heredity—are transmitted from parents to offspring. It explores the structure and function of DNA, the genetic material that carries the instructions for growth, development, and reproduction. This field investigates how genetic mutations can lead to inherited diseases and disorders, and how traits such as eye color or susceptibility to certain conditions are passed down. Modern genetics also includes the study of genomics, gene editing technologies like CRISPR, and the role of genes in evolution and biodiversity."
  },
  {
    topic: "Evolution",
    description: "Evolution is the process through which species of organisms undergo genetic changes over time, leading to the development of new species and the diversity of life on Earth. It is driven by mechanisms such as natural selection, where organisms better adapted to their environment tend to survive and reproduce, passing on advantageous traits to future generations. Evolutionary biology seeks to explain the origins of species, the fossil record, and the genetic relationships between organisms. This field also addresses how evolutionary pressures have shaped behaviors, physiological traits, and ecosystems over millions of years."
  },
  {
    topic: "Ecology",
    description: "Ecology is the scientific study of interactions between organisms and their environments, encompassing both living and non-living components. Ecologists examine how populations of species interact with one another and with their physical surroundings, including climate, soil, and water. This field explores ecosystems, biodiversity, food webs, and nutrient cycles. Ecology is essential for understanding the impacts of human activities such as deforestation, pollution, and climate change on ecosystems, and for developing conservation strategies to preserve biodiversity and ensure the sustainable use of natural resources."
  },
  {
    topic: "Human Anatomy",
    description: "Human anatomy is the study of the structure of the human body and its organs, tissues, and systems. This field provides a detailed understanding of how the body is organized, from the skeletal and muscular systems that give the body shape and movement, to the circulatory, respiratory, and digestive systems that maintain vital functions. Knowledge of anatomy is foundational for medical practice, as it helps healthcare professionals understand how injuries, diseases, and conditions affect the body's structure and function. Advanced imaging technologies like MRI and CT scans have greatly enhanced our understanding of human anatomy in both health and disease."
  },
  {
    topic: "Plant Biology",
    description: "Plant biology, also known as botany, is the scientific study of plants, including their physiology, structure, genetics, ecology, and evolution. Plants are crucial to life on Earth as they produce oxygen through photosynthesis, form the base of most food chains, and play essential roles in ecosystems. Plant biologists study how plants grow, reproduce, and adapt to their environments, as well as their interactions with other organisms. This field also explores the development of crops, understanding plant diseases, and using plants for food, medicine, and bioenergy in an increasingly sustainable manner."
  },
  {
    topic: "Microbiology",
    description: "Microbiology is the study of microscopic organisms, such as bacteria, viruses, fungi, protozoa, and algae. These microorganisms are found in nearly every environment on Earth and play vital roles in processes such as nutrient cycling, decomposition, and the functioning of ecosystems. Some microbes cause diseases, while others are beneficial for processes like fermentation or aiding in digestion. Microbiologists explore the biology, structure, and functions of these tiny organisms, often with the aim of developing new antibiotics, vaccines, and biotechnological applications that harness the power of microbes for human benefit."
  },
  {
    topic: "Biotechnology",
    description: "Biotechnology is a field that uses biological systems, organisms, or derivatives to develop or create products for various purposes. It involves the manipulation of DNA, proteins, and other cellular components to engineer organisms for specific functions, such as producing insulin, creating genetically modified crops, or cleaning up environmental contaminants. Biotechnology has applications in medicine, agriculture, industry, and environmental management. The advent of techniques like recombinant DNA, gene editing (e.g., CRISPR), and stem cell technology has revolutionized biotechnology, enabling new treatments for diseases, enhanced agricultural productivity, and innovative solutions to global challenges."
  },
  {
    topic: "Molecular Biology",
    description: "Molecular biology focuses on the molecular basis of biological activity in and between cells, including the interactions between the various systems of a cell, such as DNA, RNA, and protein synthesis. This field explores how these molecules are regulated and how they influence the growth, development, and function of living organisms. Molecular biologists study processes like replication, transcription, translation, and gene regulation. Understanding these mechanisms has been crucial for advances in genetic engineering, the development of new medical therapies, and our understanding of diseases at the molecular level."
  },
  {
    topic: "Immunology",
    description: "Immunology is the study of the immune system, which is responsible for protecting the body from infections and diseases caused by pathogens such as bacteria, viruses, and parasites. Immunologists study how the immune system recognizes and eliminates foreign invaders, as well as how it distinguishes between self and non-self. This field also explores disorders of the immune system, such as allergies, autoimmune diseases, and immunodeficiency. Research in immunology has led to the development of vaccines, treatments for autoimmune conditions, and therapies to boost or suppress immune responses in various medical contexts."
  },
  {
    topic: "Neuroscience",
    description: "Neuroscience is the study of the nervous system, including the brain, spinal cord, and neural networks. It explores how the nervous system develops, how it functions, and how it responds to injury or disease. Neuroscientists study a wide range of topics, from the molecular and cellular mechanisms of nerve signal transmission to complex behaviors such as memory, cognition, and emotion. This field also investigates neurological disorders, such as Alzheimer's disease, Parkinson's disease, and epilepsy, aiming to uncover the underlying causes and develop effective treatments."
  },
  {
    topic: "Zoology",
    description: "Zoology is the branch of biology that studies animals and their behavior, physiology, development, and classification. Zoologists explore the diversity of the animal kingdom, from invertebrates to mammals, examining how animals interact with their environments and adapt to various ecological niches. The field of zoology includes many sub-disciplines, such as ethology (the study of animal behavior), entomology (the study of insects), and marine biology (the study of ocean-dwelling animals). Zoologists contribute to conservation efforts by studying endangered species and developing strategies for protecting biodiversity."
  },
  {
    topic: "Developmental Biology",
    description: "Developmental biology is the study of the processes by which organisms grow and develop, starting from a single fertilized egg and culminating in a fully formed organism. This field focuses on how cells divide, differentiate, and organize into tissues and organs during embryonic development. It also examines how genetic and environmental factors influence these processes, as well as how development can go awry, leading to birth defects or diseases. Insights from developmental biology are important for regenerative medicine, including the use of stem cells to repair or replace damaged tissues."
  }
];
