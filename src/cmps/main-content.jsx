import patternHome3 from '../assets/img/bg-pattern-home-3.svg'
import iconChart from '../assets/img/icon-chart.svg'
import iconCog from '../assets/img/icon-cog.svg'
import iconPerson from '../assets/img/icon-person.svg'
export function Main() {

    return <section className="main-content-container">
        <div className='main-rectangle' />
        <section className="main-content flex">
            <h1 className="main-headline">
                Build & manage <br />
                distributed teams<br />
                like no one else.
            </h1>
            <section className="advantages-container flex column">
                <div className="advantage flex">
                    <img className='advantage-img' src={iconPerson} alt="" />
                    <div className='advantage-text flex column'>
                        <p className="advantage-headline">Experienced Individuals</p>
                        <p className="advantage-main">Our network is made up of highly experienced professionals<br />
                            who are passionate about what they do.
                        </p>
                    </div>
                </div>
                <div className="advantage flex">
                    <img className='advantage-img' src={iconCog} alt="" />
                    <div className='advantage-text flex column'>
                        <p className="advantage-headline">Easy to Implement</p>
                        <p className="advantage-main">Our processes have been refined over years of implementation<br />
                            meaning our teams always deliver.
                        </p>
                    </div>
                </div>
                <div className="advantage flex">
                    <img className='advantage-img' src={iconChart} alt="" />
                    <div className='advantage-text flex column'>
                        <p className="advantage-headline">Enhanced Productivity</p>
                        <p className="advantage-main">Our customized platform with in-built analytics helps you<br />
                            manage your distributed teams.
                        </p>
                    </div>
                </div>
            </section>
            <img className="pattern-main-img" src={patternHome3} alt="" />
        </section>
    </section>
}