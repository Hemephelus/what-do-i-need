import summaryIcon from "./images/home-page/Summary Icon.png"
import BreakDownIcon from "./images/home-page/Break Down.png"
import ComprehensiveIcon from "./images/home-page/Comprehensive Icon.png"
import PrintPreviewIcon from "./images/home-page/Print Preview.png"
import './App.css';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
    <div className='App-header'>
      <h1 className='App-name'>WDIN</h1>
      <div className='header-links'>
        <p className='header-link'>Add School</p>
        <p className='header-link'>Guide</p>
        <p className='header-link'>Community</p>
      </div>
    </div>
    
    <div className='App-body'>
    <div className='Hero-section'>
    <div>
     <h1 className='Hero-headline'>
      A CGPA Calculator
      </h1>
      <div>
      <h3 className='Hero-sub-headline'>
      Find out what you need to be a  
      <Typical
        steps={['first class student.', 2000, 'second class student.', 2000, 'third class student.', 2000]}
        loop={Infinity}
        wrapper="p"
      />
      </h3>
      </div>
     </div>
      <div className='Hero-buttons'>
        <button className='Primary-button'>Summary Calculation</button>
        <button className='Secondary-button'>Comprehensive Calculation</button>
      </div>
    </div>


    <div className='feature-section'>
    <div className='feature-headline'>
     <h1 className='feature-title'>
     Features
      </h1>
      <div className='feature-line'></div>
     </div>
      <div className='features'>
      <div className='feature'>
      <figure>
      <img className="summary-icon" src={summaryIcon} alt={"summary icon"}/>
      </figure>
      <h1>
      Summary
      </h1>
      <p>
      Quickly determine what your would need to be on a first class.
      </p>
      </div>

      <div className='feature'>
      <figure>
      <img className="Print-Preview-Icon" src={PrintPreviewIcon} alt={"Print Preview Icon"}/>
      </figure>
      <h1>
      Print Result
      </h1>
      <p>
      Print your summary or comprehensive results for personal use.
      </p>
      </div>
    
      <div className='feature'>
      <figure>
      <img className="Break-Down-Icon" src={BreakDownIcon} alt={"Break Down Icon"}/>
      </figure>
      <h1>
      Break Down
      </h1>
      <p>
      View the quick break down on how GPAs and CGPA are calculated.
      </p>

      </div>
      <div className='feature'>
      <figure>
      <img className="Comprehensive-Icon" src={ComprehensiveIcon} alt={"Comprehensive Icon"}/>
      </figure>
      <h1>
      Break Down
      </h1>
      <p>
      View the quick break down on how GPAs and CGPA are calculated.
      </p>
      </div>
  
      </div>
    </div>

    </div>
    <div className='App-footer'>
    <h1 className='App-name'>WDIN</h1>
    <div className='footer-links'>
      <p className='footer-link'>Add Your School</p>
      <p className='footer-link'>Guide</p>
      <p className='footer-link'>Community</p>
    </div>
    </div>
    </div>
  );
}

export default App;
