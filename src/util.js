const yourDetailsDropDown = {
  Universities: {
    name: "Universities",
    labeName: "Select University",
    placeholderName: "Enter University name",
    listItems: [
      { name: "Pan-Atlantic University" },
      { name: "Others" },
    ],
  },
  Departments: {
    name: "Departments",
    labeName: "Select Departments",
    placeholderName: "Enter Departments name",
    listItems: [
      { name: "ACCOUNTING" },
      { name: "BANKING AND FINANCE" },
      { name: "BUSINESS ADMINISTRATION" },
      { name: "COMPUTER SCIENCE" },
      { name: "ELECTRICAL/ELECTRONICS ENGINEERING" },
      { name: "INDUSTRIAL RELATIONS AND PERSONNEL MANAGEMENT" },
      { name: "INFORMATION SCIENCE AND MEDIA STUDIES" },
      { name: "ECONOMICS" },
      { name: "MASS COMMUNICATION" },
      { name: "MARKETING" },
      { name: "MECHANICAL ENGINEERING" },
      { name: "Others" },
    ],
  },
  DurationOfCourse: {
    name: "DurationOfCourse",
    labeName: "Select Duration Of Course",
    placeholderName: "Enter Duration",
    listItems: [
      { name: "2 years", "2 years": 2},
      { name: "3 years" , "3 years": 3},
      { name: "4 years" , "4 years": 4},
      { name: "5 years" , "5 years": 5},
      { name: "6 years" ,"6 years": 6},
      
    ],
  },
  ClassLevels: {
    name: "ClassLevels", 
    labeName: "Select Class Levels",
    placeholderName: "Enter Class Levels",
    listItems: [
      { name: "First Class", CGPA: 4.495},
      { name: "Second Class Upper", CGPA: 3.495 },
      { name: "Second Class Lower", CGPA: 2.495 },
      { name: "Third Class", CGPA: 0.0 },
    ],
  },

  UserData : {
    FullName: "",
    Universities: "",
    Departments: "",
    DurationOfCourse: "",
    // ClassLevels: "",
},

GpaData: {
  
}

}

export default yourDetailsDropDown
