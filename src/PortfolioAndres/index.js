import './styles.scss';
//components
import Info from '../assets/info/andres.json'

const PortfolioAndres = () => {

    console.log('andres', Info)

    return (
        <section className="portfolio">
            <div className="portfolio_container">
                <div className="portfolio_container_title">
                    <h2>Andres Larrota</h2>
                </div>

                <div className='portfolio_content'>
                    <img src='/images/andreslarrotta/test_portfolio.png' alt='andres' />
                    <img src='/images/andreslarrotta/test_portfolio2.png' alt='andres' />
                </div>
            </div>
        </section>
    );
}

export default PortfolioAndres;
