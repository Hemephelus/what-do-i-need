import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const HowToCarousel = () => {
  
        return (
            <div className=' w-[80%] border-dashed border-[1px] lg:border-[3px] border-mode-paragraph-light p-4 lg:p-8 rounded-xl'>

         
            <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true}>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'> Click on CALCULATE</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/fa98d792-1aff-4c13-85d2-f78d95f0441e/112cd63b-292a-4298-81ce-ddec282a827b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2140&fp-y=0.5537&fp-z=2.3358&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="Click on CALCULATE" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'> Enter Your Name</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/87ed116e-7214-4e25-9b15-5f1f00bc8795/4c4249ce-7ec4-4899-b053-a2f785a8fc74.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4924&fp-y=0.5184&fp-z=1.8182&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="Enter Your Name" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'>Select Your University</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/50fbee81-34e4-4fb0-a111-437b8a3f5f48/3c3d2f4d-0f81-44b9-b1c7-fd4ac1ff9561.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4958&fp-y=0.6076&fp-z=2.8878&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="Select Your University" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'>Select Your Departments</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/53eba6a5-fedc-4d6c-9b10-ca8f1f016eca/13adfa7a-f678-4f5b-8a10-0e2322d9f47b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4958&fp-y=0.3999&fp-z=2.8878&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="Select Your Departments" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'>Select The Duration Of Your Course</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/1ae2ac6e-fff8-4bcb-ab84-6906578ab209/2ac02c2c-75f1-4488-bc88-42889cab6818.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4958&fp-y=0.5151&fp-z=2.8878&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="Select The Duration Of Your Course" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'>Click on START</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/13de7a67-39b9-4705-9a8c-87354b2e8359/bea0039d-c9f7-4f70-9c63-3ca33365e4ee.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4956&fp-y=0.5985&fp-z=2.8263&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="Click on START" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'>Enter Your GPA</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/aaaf1fbc-906b-43cd-b6c9-9366e526d15c/1f61c2f8-2db5-4249-b949-c6255e833688.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5242&fp-y=0.4442&fp-z=1.9562&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="Enter Your GPA" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'>Click on Evaluate Result</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/82b5ef4c-248e-494c-b3a7-91512b74b4b4/588a49a0-a78f-4661-95f9-877fb263c3a3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7570&fp-y=0.2728&fp-z=1.8303&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="Click on Evaluate Result" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'>See The Evaluations Here</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/92d412aa-a119-40e6-82ed-244512722cce/b6b7ff77-ddf5-4b0c-8b93-314b8ef5903f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5651&fp-y=0.5716&fp-z=1.4162&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="See The Evaluations Here" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'>Select the class you want to be in</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/5c00e6bc-5420-4dc5-a415-0b1cfbf9b4de/0f595c3c-731c-4543-a47b-cd38350687ef.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7413&fp-y=0.4133&fp-z=1.8829&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="Select the class you want to be in" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'>See your GPA and CGPA OVERTIME</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/1c4c4d18-9ea8-4196-ba4a-d408d2a28d35/4c72f466-0f00-4c86-8598-6ba2f049963e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5651&fp-y=0.5425&fp-z=1.0929&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="See your GPA and CGPA OVERTIME" />
</div>

<div className='flex flex-col gap-4'><h3 className='text-sm md:text-lg text-mode-link lg:text-3xl font-medium lg:font-semibold'>See your CGPA PERCENTAGE CHANGE OVERTIME</h3>
<img src="https://images.tango.us/workflows/df134095-deea-4a2a-b257-002e58c564f9/steps/a35f4c18-919c-4afd-afce-d39a2b416802/043e3fa2-329f-4768-ba96-6aecd439aa99.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5651&fp-y=0.5038&fp-z=1.0485&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n"  alt="See your CGPA PERCENTAGE CHANGE OVERTIME" />
</div>

            </Carousel>
            </div>
        );

        }