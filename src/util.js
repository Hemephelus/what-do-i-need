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

MinimumGPAPerClass:{
  "First Class": 4.495,
  "Second Class Upper": 3.495,
  "Second Class Lower": 2.495,
  "Third Class": 0.0,
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

export function calculateMinimumGPAForaClass(desiredClass,duration = "4 years",allGPAs){
  let estimatedGPA = 0
  let minGPA = yourDetailsDropDown.MinimumGPAPerClass[desiredClass]
  duration = duration.split(' ')[0]*2
  const totalMinGPAPoints = minGPA * duration
  let semestersDone = 0
  let totalGPAPoints = 0


  for (let i = 0; i < allGPAs.length; i += 1) {
    totalGPAPoints += +allGPAs[i].GPA
    if(+allGPAs[i].GPA !== 0){
      semestersDone = i+1
    }
  }
  
  const remainingGPAPoints = totalMinGPAPoints - totalGPAPoints
  const semestersLeft = duration - semestersDone
  estimatedGPA = remainingGPAPoints/semestersLeft

  if(isNaN(estimatedGPA))return "0.00"
  if(!isFinite(estimatedGPA))return "0.00"
  return estimatedGPA.toFixed(2)
}

export function getCurrentCGPA(gpaTable =[]){
    let gpaNumber = []
    let index = 0

    for(let i = 0; i < gpaTable.length; i++){
      gpaNumber.push(+gpaTable[i].GPA)
      if(+gpaTable[i].GPA !== 0){
        index = i
      }
    }
    let currentGPA = getCalculatedCGPA(gpaNumber,index)
    if(currentGPA === "-")return "0.00"

    return currentGPA
}

export const chartData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  },
  {
    id: 6,
    year: 2021,
    userGain: 4300,
    userLost: 234
  }
];

export const generateInitialLineChart = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
    },

  ],
}

export default yourDetailsDropDown
