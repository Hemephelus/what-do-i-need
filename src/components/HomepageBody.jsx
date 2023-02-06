import React from 'react'
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import {FiArrowRight} from "react-icons/fi";
import summaryIcon from "../assets/home-page/Summary Icon.png";
import BreakDownIcon from "../assets/home-page/Break Down.png";
import ComprehensiveIcon from "../assets/home-page/Comprehensive Icon.png";
import PrintPreviewIcon from "../assets/home-page/Print Preview.png";
import HeroImage from "../assets/home-page/Hero_Image.png"

const HomepageBody = () => {
  return (
    <div>
         <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
          


          {/* HERO SECTION */}
        <div className="flex flex-col gap-[40px] overflow-hidden lg:w-full  lg:px-20 lg:flex-row lg:justify-between lg:items-center">
         <div className='flex flex-col gap-4 lg:gap-20 py-16'>
         <div>
            <h1 className=" text-[32px] font-bold text-mode-headline-light  lg:text-6xl ">
              A CGPA Calculator
            </h1>
            <div>
              <h3 className="text-[16px] font-normal text-mode-paragraph-light lg:text-3xl Hero-sub-headline">
                Find out what you need to be a
                <Typical
                  steps={[
                    "first class student.",
                    2000,
                    "second class student.",
                    2000,
                    "third class student.",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[16px] lg:flex-row lg:[32px] lg:items-center ">
            <Link to="/your-details">
            <button className="bg-mode-button-bg-light text-mode-button-text-light font-semibold px-[32px] py-[8px] lg:rounded-lg lg:px-[64px] lg:py-[16px] ">
              CALCULATE
            </button>
            </Link>
            <a className="text-mode-button-bg-light rounded-lg flex gap-2 lg:gap-4 items-center px-[16px] py-[8px] font-bold hover:text-mode-button-text-light hover:scale-95" href='#How to Start '>
              How to Start
              <FiArrowRight/>
            </a>
          </div>
         </div>


          <div className='relative overflow-visible h-full lg:mr-16' >
            <div className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full absolute lg:right-[5%] -z-10  bg-mode-link"></div>
            <img src={HeroImage} alt="Hero" className='w-full h-full object-cover'/>
          </div>
        </div>



    {/* FEATURES */}
        <div className="flex flex-col gap-12 items-center p-8 bg-mode-bg-dark w-full lg:px-20    "> 
          <div className="flex flex-col gap-[8px] items-center  ">
            <h1 className="text-[20px] font-bold lg:text-[32px] text-mode-headline-dark" id='Features'>Features</h1>
            <div className="w-[50px] h-[5px] bg-mode-link lg:h-[5px] lg:w-[100px]"></div>
          </div>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 ">
            <div className="feature">
              <figure>
                <img
                  className="summary-icon"
                  src={summaryIcon}
                  alt={"summary icon"}
                />
              </figure>
              <h1>Summary</h1>
              <p>
                Quickly determine what you would need to be on a first class.
              </p>
              <a href='#How to Start'>How to Start <FiArrowRight/></a>
            </div>

            <div className="flex flex-col items-center feature">
              <figure>
                <img
                  className="Print-Preview-Icon"
                  src={PrintPreviewIcon}
                  alt={"Print Preview Icon"}
                />
              </figure>
              <h1>Print Result</h1>
              <p>
                Print your summary or comprehensive results for personal use.
              </p>
           
            </div>

            <div className="flex flex-col items-center feature">
              <figure>
                <img
                  className="Break-Down-Icon"
                  src={BreakDownIcon}
                  alt={"Break Down Icon"}
                />
              </figure>
              <h1>Break Down</h1>
              <p>
                View the quick break down on how GPAs and CGPA are calculated.
              </p>
            </div>
            <div className="flex flex-col items-center feature">
              <figure>
                <img
                  className="Comprehensive-Icon"
                  src={ComprehensiveIcon}
                  alt={"Comprehensive Icon"}
                />
              </figure>
              <h1>Break Down</h1>
              <p>
                View the quick break down on how GPAs and CGPA are calculated.
              </p>
            </div>
          </div>
        </div>



        {/* HOW TO START */}
        <div>


<div><h3>2. Click on CALCULATE</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/fa98d792-1aff-4c13-85d2-f78d95f0441e/112cd63b-292a-4298-81ce-ddec282a827b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2140&fp-y=0.5537&fp-z=2.3358&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="Click on CALCULATE" />
</div>

<div><h3>3. Enter Your Name</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/87ed116e-7214-4e25-9b15-5f1f00bc8795/4c4249ce-7ec4-4899-b053-a2f785a8fc74.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4924&fp-y=0.5184&fp-z=1.8182&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="Enter Your Name" />
</div>

<div><h3>4. Select Your University</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/50fbee81-34e4-4fb0-a111-437b8a3f5f48/3c3d2f4d-0f81-44b9-b1c7-fd4ac1ff9561.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4958&fp-y=0.6076&fp-z=2.8878&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="Select Your University" />
</div>

<div><h3>5. Select Your Departments</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/53eba6a5-fedc-4d6c-9b10-ca8f1f016eca/13adfa7a-f678-4f5b-8a10-0e2322d9f47b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4958&fp-y=0.3999&fp-z=2.8878&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="Select Your Departments" />
</div>

<div><h3>6. Select The Duration Of Your Course</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/1ae2ac6e-fff8-4bcb-ab84-6906578ab209/2ac02c2c-75f1-4488-bc88-42889cab6818.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4958&fp-y=0.5151&fp-z=2.8878&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="Select The Duration Of Your Course" />
</div>

<div><h3>7. Click on START</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/13de7a67-39b9-4705-9a8c-87354b2e8359/bea0039d-c9f7-4f70-9c63-3ca33365e4ee.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4956&fp-y=0.5985&fp-z=2.8263&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="Click on START" />
</div>

<div><h3>8. Enter Your GPA</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/aaaf1fbc-906b-43cd-b6c9-9366e526d15c/1f61c2f8-2db5-4249-b949-c6255e833688.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5242&fp-y=0.4442&fp-z=1.9562&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="Enter Your GPA" />
</div>

<div><h3>9. Click on Evaluate Result</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/82b5ef4c-248e-494c-b3a7-91512b74b4b4/588a49a0-a78f-4661-95f9-877fb263c3a3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7570&fp-y=0.2728&fp-z=1.8303&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="Click on Evaluate Result" />
</div>

<div><h3>10. See The Evaluations Here</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/92d412aa-a119-40e6-82ed-244512722cce/b6b7ff77-ddf5-4b0c-8b93-314b8ef5903f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5651&fp-y=0.5716&fp-z=1.4162&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="See The Evaluations Here" />
</div>

<div><h3>11. Select the class you want to be in</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/5c00e6bc-5420-4dc5-a415-0b1cfbf9b4de/0f595c3c-731c-4543-a47b-cd38350687ef.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7413&fp-y=0.4133&fp-z=1.8829&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="Select the class you want to be in" />
</div>

<div><h3>12. See your GPA and CGPA OVERTIME</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/1c4c4d18-9ea8-4196-ba4a-d408d2a28d35/4c72f466-0f00-4c86-8598-6ba2f049963e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5651&fp-y=0.5425&fp-z=1.0929&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="See your GPA and CGPA OVERTIME" />
</div>

<div><h3>13. See your CGPA PERCENTAGE CHANGE OVERTIME</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/a35f4c18-919c-4afd-afce-d39a2b416802/043e3fa2-329f-4768-ba96-6aecd439aa99.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5651&fp-y=0.5038&fp-z=1.0485&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n" width="600" alt="See your CGPA PERCENTAGE CHANGE OVERTIME" />
</div>

<hr/>
<div>
<a href="https://app.tango.us/app/workflow/df134095-deea-4a2a-b257-002e58c564f9?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" target="_blank"><em>This Workflow was created with Tango.</em></a>
</div>

        </div>
      </div>
    </div>
  )
}

export default HomepageBody