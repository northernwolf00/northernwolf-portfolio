export type Achievement = {
  title: string;
  detail: string;
  year: string;
};

export const achievements: Achievement[] = [
  {
    title:
      "Bronze medal — Open Mathematical Olympiad for University Students (OMOUS), Ashgabat",
    detail: "3rd place",
    year: "2020, 2021, 2024",
  },
  {
    title:
      "International Student Team Competition in Mathematics (ISTCiM), University of Silesia, Poland",
    detail: "Turkmenistan national team",
    year: "2021",
  },
  {
    title: "International Mathematics Olympiad, RUDN University, Moscow",
    detail: "Participant",
    year: "2023",
  },
  {
    title: "NSUCRYPTO — International Olympiad in Cryptography",
    detail: "Participant",
    year: "—",
  },
  {
    title: "RevenueCat Shipaton — global mobile app hackathon",
    detail: "fitFriend, Garagum Racing",
    year: "2025, 2026",
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "BSc, Applied Mathematics & Information Technology",
    institution: "Oguz Han Engineering and Technology University, Ashgabat",
    period: "2019–2024",
  },
];
