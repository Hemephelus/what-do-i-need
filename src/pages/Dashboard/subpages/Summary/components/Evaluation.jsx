import React, { useEffect, useState } from "react";
import {getCurrentCGPA, getClass,calculateMinimumGPAForaClass} from "pages/Dashboard/util"
import { useSelector } from "react-redux";

const Evaluation = () => {
    const gpaTable = useSelector((state) => state.all_gpa_table);
    const user = useSelector((state) => state.user);
    const classLevel = useSelector((state) => state.class_level);
    const duration = user.durationOfCourse
    const desiredClass = classLevel.classLevel
    const [minimumGpa, setMinimumGpa] = useState(0)
    const [cgpa, setCgpa] = useState(0)
  
    useEffect(() => {
      setMinimumGpa(calculateMinimumGPAForaClass(desiredClass, duration, gpaTable))
      setCgpa(getCurrentCGPA(gpaTable).toFixed(2))
      
    }, [desiredClass])


    


  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center justify-center p-8 sm:p-[72px]">
      <div className="flex flex-col items-center  gap-16">
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <div className="font-semibold text-lg sm:text-xl">Current CGPA</div>
          <div className="font-bold text-xl sm:text-2xl">
            {cgpa}
          </div>

          <div className="font-semibold text-mode-link">
            {getClass(cgpa)}
          </div>
        </div>
        <div className="h-[2px] w-[50%] bg-slate-300"></div>
        <div className="w-full flex flex-col items-center gap-4">
          <div className="font-medium text-sm sm:text-lg text-center">
            Minimum GPA to be a
            <span className="text-mode-link"> {desiredClass}</span> Student.


          </div>
          <div className="font-bold text-xl sm:text-2xl">
            {minimumGpa}
          </div>
        </div>
      </div>

      {/* Interpretation */}
      <div className="flex flex-col gap-8 text-center items-center sm:text-lg max-w-lg bg-slate-100 px-4 py-8 rounded-lg shadow-xl">
        <div>
          Your current CGPA is{" "}
          <span className="font-semibold">{cgpa}</span>,
          Making you a{" "}
          <span className="font-semibold">
            {getClass(cgpa)}
          </span>{" "}
          student.
        </div>
        <div className="h-[2px] w-[50%] bg-slate-300"></div>
        <div>
          For you to be a <span className="font-semibold">{desiredClass}</span>{" "}
          student, you would need to get a minimum GPA of{" "}
          <span className="font-semibold">
            {minimumGpa}
          </span>{" "}
          for the remaining semesters.
        </div>

        <div className="h-[2px] w-[50%] bg-slate-300"></div>

        <div>
          
             {minimumGpa >=
              0 &&
            minimumGpa < 5
              ?
              minimumGpa >=
                cgpa
                  ? (<p>
                    This is is achievable if you decide to work hard
                  </p>)
                  : (<p>
                    Your current CGPA <b>({cgpa})</b> is higher than <b>{minimumGpa}</b>. <br /> I recommend you maintain or surpass your current position.
                  </p>)
              : (
                <span>
               <b>{minimumGpa}</b> is not within the range of <b>0</b> and <b>5</b>. Therefore, there is nothing you can do to be on a <b>{desiredClass}</b>
                </span>
              )}
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
