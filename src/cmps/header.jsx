import myTeam from '../assets/img/logo.svg'
import patternHome1 from '../assets/img/bg-pattern-home-1.svg'
import patternHome2 from '../assets/img/bg-pattern-home-2.svg'

export function Header() {

    return <section className="header-container flex column">
        <header className="header-links flex align-center">
            <img src={myTeam} alt="" className='logo' />
            <p className='header-link'>home</p>
            <p className='header-link'>about</p>
            <span></span>
            <p className='contact-btn'>contact us</p>
        </header>
        <main className="header-content flex">
            <h1>Find the <br />
                best <span>talent</span>
            </h1>
            <div className='header-rectangle'/>
            <p>Finding the right people and building high<br /> 
                performing teams can be hard. Most companies<br /> 
                aren't tapping into the abundance of global talent.<br /> 
                We're about to change that.</p>
        </main>
        <section className="header-img">
            <img className='pattern-home-header-left' src={patternHome1} alt="" />
            <img className='pattern-home-header-bottom' src={patternHome2} alt="" />
        </section>
    </section>
}