import patternHome4 from '../assets/img/bg-pattern-home-4-about-3.svg'
import quotes from '../assets/img/icon-quotes.svg'
import Kady from '../assets/img/avatar-kady.jpg'

export function Reviews () {
    
    return <section className="reviews-container">
        <img className='pattern-4' src={patternHome4} alt="" />
        <h1>Delivering real results for top<br /> 
        companies. Some of our <span>success stories.</span>
        </h1>
        <section className="reviews-main flex">
            <section className="review flex column">
                <img src={quotes} alt="" />
                <p>“The team perfectly fit the specialized skill set<br />
                required. They focused on the most essential <br />
                features helping us launch the platform eight <br /> 
                months faster than planned.”
                </p>
                <p>Kady Baker</p>
                <img src={Kady} alt="" />
            </section>

        </section>
    </section>
}