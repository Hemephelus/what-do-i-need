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
      { name: "First Class", GPA: 4.495},
      { name: "Second Class Upper", GPA: 3.495 },
      { name: "Second Class Lower", GPA: 2.495 },
      { name: "Third Class", GPA: 0.0 },
    ],
  },

  UserData : {
    FullName: "",
    Universities: "",
    Departments: "",
    DurationOfCourse: "",
},


GpaData: []

}

export function generateGPATableData(durationNumber){
  let gpaTable = [];
  for (let i = 1; i <= durationNumber; i++) {
    gpaTable.push({
      id: i,
      Year: Math.ceil(i / 2),
      Semester: ((i + 1) % 2) + 1,
      GPA: 0.0,
      Class: "-",
      CGPA: 0.0,
      Change: "-",
    });
  }

  return gpaTable
}

export function getClass(gpa){
  const x = yourDetailsDropDown.ClassLevels.listItems
   for(let i = 0;i < x.length; i++){
    if(gpa >= x[i].GPA){
      return x[i].name
    }
   }
}

export function getPercentageChange(prevIndex,currentIndex,arr){
      if(prevIndex < 0)return "-"
      const prev = arr[prevIndex]
      const current = arr[currentIndex]
      if(prev === 0|| prev === "")return "-"
      if(current === 0|| current === "")return "-"
      return `${(((current-prev)/prev)*100).toFixed(2)}%`
}

export function getCalculatedCGPA(cgpaList = [],index){
  cgpaList = cgpaList.slice(
    0,
    index + 1 === cgpaList.length
      ? cgpaList.length
      : 1 + index - cgpaList.length
  )

  let arr  = cgpaList.slice(index)

  let sum = 0


for (let i = 0; i < arr.length; i += 1) {
sum += arr[i]
}

if(sum === 0)return "-"

  const total = cgpaList.reduce((acc, current) => {
    return acc + current;
  }, 0);

  return (total / cgpaList.length).toFixed(2);
};

export default yourDetailsDropDown
