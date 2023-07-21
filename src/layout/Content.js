import Banner from '../component/Banner'
import About from '../component/About'
import Skills from '../component/Skills'
import Portfolio from '../component/Portfolio'
import Interview from '../component/Interview'
import Contact from '../component/Contact'



import Test from '../component/Test'


function Content(props) {
    return (
        <div id={props.id}>
            <Banner id="banner"></Banner>
            <About id="aboutMe" aboutdb={props.hddb}></About>
            <Skills id="skills" skilldb={props.hddb}></Skills>
            {/* 
            <Portfolio id="portfolio" portdb={portDB}></Portfolio>
            <Interview id="interview" interviewdb={interviewDB}></Interview>
            <Contact id="contact" contactdb={contactDB}></Contact>
            <Test testdb={testDB}></Test> */}
        </div>
    )
}

export default Content