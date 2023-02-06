const yourDetailsDropDown = {
  Universities: {
    name: "Universities",
    labeName: "Select University",
    placeholderName: "Enter University name",
    listItems: [{ name: "Pan-Atlantic University" }, { name: "Others" }],
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
      { name: "2 years", "2 years": 2 },
      { name: "3 years", "3 years": 3 },
      { name: "4 years", "4 years": 4 },
      { name: "5 years", "5 years": 5 },
      { name: "6 years", "6 years": 6 },
    ],
  },
  ClassLevels: {
    name: "ClassLevels",
    labeName: "Select Class Levels",
    placeholderName: "Enter Class Levels",
    listItems: [
      { name: "First Class", GPA: 4.495 },
      { name: "Second Class Upper", GPA: 3.495 },
      { name: "Second Class Lower", GPA: 2.495 },
      { name: "Third Class", GPA: 0.0 },
    ],
  },

  UserData: {
    FullName: "",
    Universities: "",
    Departments: "",
    DurationOfCourse: "",
  },

  MinimumGPAPerClass: {
    "First Class": 4.495,
    "Second Class Upper": 3.495,
    "Second Class Lower": 2.495,
    "Third Class": 0.0,
  },

  GpaData: [],
};

export function generateGPATableData(durationNumber) {
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

  return gpaTable;
}

export function getClass(gpa) {
  const x = yourDetailsDropDown.ClassLevels.listItems;
  for (let i = 0; i < x.length; i++) {
    if (gpa >= x[i].GPA) {
      return x[i].name;
    }
  }
}

export function getPercentageChange(prevIndex, currentIndex, arr) {
  let i = getLastRow(arr, "GPA");

  if (prevIndex < 0) return "-";
  if (currentIndex > i) return "-";

  let prev, current;

  if (
    typeof arr[0] === "object" &&
    !Array.isArray(arr[0]) &&
    arr[0] !== null
  ) {
    prev = getCalculatedCGPA(
      arr.map((g) => +g.GPA),
      prevIndex
    );
    current = getCalculatedCGPA(
      arr.map((g) => +g.GPA),
      currentIndex
    );
  } else {
    prev = getCalculatedCGPA(arr, prevIndex);
    console.log(prev);
    current = getCalculatedCGPA(arr, currentIndex);
  }

  return `${(((current - prev) / prev) * 100).toFixed(2)}%`;
}

export function getCalculatedCGPA(cgpaList = [], index) {
  let arr = cgpaList.slice(index);
  cgpaList = cgpaList.slice(
    0,
    index + 1 === cgpaList.length
      ? cgpaList.length
      : 1 + index - cgpaList.length
  );

  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  if (sum === 0) return "-";

  const total = cgpaList.reduce((acc, current) => {
    return acc + current;
  }, 0);

  return (total / cgpaList.length).toFixed(2);
}

export function calculateMinimumGPAForaClass(
  desiredClass,
  duration = "4 years",
  allGPAs
) {
  let estimatedGPA = 0;
  let minGPA = yourDetailsDropDown.MinimumGPAPerClass[desiredClass];
  duration = duration.split(" ")[0] * 2;
  const totalMinGPAPoints = minGPA * duration;
  let semestersDone = 0;
  let totalGPAPoints = 0;

  for (let i = 0; i < allGPAs.length; i += 1) {
    totalGPAPoints += +allGPAs[i].GPA;
    if (+allGPAs[i].GPA !== 0) {
      semestersDone = i + 1;
    }
  }

  const remainingGPAPoints = totalMinGPAPoints - totalGPAPoints;
  const semestersLeft = duration - semestersDone;
  estimatedGPA = remainingGPAPoints / semestersLeft;

  if (isNaN(estimatedGPA)) return "0.00";
  if (!isFinite(estimatedGPA)) return "0.00";
  return estimatedGPA.toFixed(2);
}

export function getCurrentCGPA(gpaTable = []) {
  let gpaNumber = [];
  let index = 0;

  for (let i = 0; i < gpaTable.length; i++) {
    gpaNumber.push(+gpaTable[i].GPA);
    if (+gpaTable[i].GPA !== 0) {
      index = i;
    }
  }
  let currentGPA = getCalculatedCGPA(gpaNumber, index);
  if (currentGPA === "-") return "0.00";

  return currentGPA;
}

export function getLastRow(gpaTable = [], dataName) {
  let index = 0;

  for (let i = 0; i < gpaTable.length; i++) {
    if (+gpaTable[i][dataName] !== 0) {
      index = i;
    }
  }
  return index;
}

export function generateGPAChart(GpaData = [], minimumGPA) {
  let GPAIndex = getLastRow(GpaData, "GPA");

  let GPALineData = GpaData.map((data, i) => {
    if (i > GPAIndex) {
      return NaN;
    } else {
      return data.GPA;
    }
  });

  let ProjectedGPALineData = GpaData.map((data, i) => {
    if (i > GPAIndex) {
      return +minimumGPA;
    } else {
      return +data.GPA;
    }
  });

  let CGPALineData = GpaData.map((data, i) => {
    if (i > GPAIndex) {
      return NaN;
    } else {
      return data.CGPA;
    }
  });

  let ProjectedCGPALineData = GpaData.map((data, i) => {
    if (i > GPAIndex) {
      return getCalculatedCGPA(ProjectedGPALineData, i);
    } else {
      return data.CGPA;
    }
  });

  return {
    labels: GpaData.map((data) => data.id),
    datasets: [
      {
        label: "GPA",
        data: GPALineData,
        backgroundColor: "rgba(0, 71, 62, 0.25)",
        borderColor: "rgba(0, 71, 62, 0.8)",
        fill: true,
      },
      {
        label: "Projected GPA",
        data: ProjectedGPALineData,
        backgroundColor: "rgba(0, 71, 62, 0.25)",
        borderColor: "rgba(0, 71, 62, 0.5)",
        borderDash: [5, 5],
      },
      {
        label: "CGPA",
        data: CGPALineData,
        backgroundColor: "rgba(250, 174, 43, 0.5)",
        borderColor: "rgba(250, 174, 43, 0.8)",
        fill: true,
      },
      {
        label: "Projected CGPA",
        data: ProjectedCGPALineData,
        backgroundColor: "rgba(250, 174, 43, 0.25)",
        borderColor: "rgba(250, 174, 43, 0.5)",
        borderDash: [5, 5],
      },
    ],
  };
}
export function generateCGPAChangeChart(GpaData = [], minimumGPA) {
  let GPAIndex = getLastRow(GpaData, "GPA");
  let CGPAChangeLineData = GpaData.map((data) => {
    if (data.Change === "-") {
      return NaN;
    } else {
      return +data.Change.split("%")[0];
    }
  });

  let ProjectedGPALineData = GpaData.map((data, i) => {
    if (i > GPAIndex) {
      return +minimumGPA;
    } else {
      return +data.GPA;
    }
  });

  let ProjectedCGPAChangeLineData = GpaData.map((data, i) => {
    if (i === 0) return NaN;
    if (data.Change === "-") {
      return +getPercentageChange(i - 1, i, ProjectedGPALineData).split("%")[0]
        
    } else {
      return +data.Change.split("%")[0];
    }
  });

  console.log(ProjectedCGPAChangeLineData);
  console.log(CGPAChangeLineData);

  return {
    labels: GpaData.map((data) => data.id),
    datasets: [
      {
        label: "GPA Percentage Change",
        data: CGPAChangeLineData,
        backgroundColor: "rgba(0, 71, 62, 0.5)",
        borderColor: "rgba(0, 71, 62, 0.8)",
      },
      {
        label: "Projected GPA Percentage Change",
        data: ProjectedCGPAChangeLineData,
        backgroundColor: "rgba(0, 71, 62, 0.25)",
        borderColor: "rgba(0, 71, 62, 0.5)",
        borderDash: [5, 5],
      },
    ],
  };
}
export const generateInitialLineChart = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
    },
  ],
};

export default yourDetailsDropDown;
