
// make sure to export the interface for the questions
export interface Question {
  question: string;
  options: string[];
  answer: string;
}[];


export const questions: Question[] = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    question: "What is the capital of USA?",
    options: ["New York", "Washington DC", "California", "Texas"],
    answer: "Washington DC",
  },
  {
    question: "What is the capital of UK?",
    options: ["London", "Manchester", "Birmingham", "Liverpool"],
    answer: "London",
  },
  {
    question: "What is the capital of China?",
    options: ["Shanghai", "Beijing", "Shenzhen", "Guangzhou"],
    answer: "Beijing",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
    answer: "Tokyo",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "Marseille", "Lyon", "Toulouse"],
    answer: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Hamburg", "Munich", "Cologne"],
    answer: "Berlin",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Naples", "Turin"],
    answer: "Rome",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
    answer: "Moscow",
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador"],
    answer: "Brasilia",
  },
];
