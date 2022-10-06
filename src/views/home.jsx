import { Header } from '../cmps/header.jsx'
import { Main } from '../cmps/main-content.jsx'
import { Reviews } from '../cmps/reviews.jsx'
import { Footer } from '../cmps/footer.jsx'

export function Home() {
    return <section className='home-container'>
        <div className='layout flex column'>
            <Header />
            <Main />
            <Reviews />
            <Footer />
        </div>
    </section>
}