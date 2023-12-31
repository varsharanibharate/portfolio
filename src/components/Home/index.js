import './index.css'

const Home = () => {
    return(
        <div className="home-container">
            <h1 className='name'>Varsharani Bharate</h1>
            <p className='home-title'>Problem Solver, Love to make things simple</p>
            <hr />
            <div className='button-container'>
                <a href='https://github.com/varsharanibharate'target = "_blank" rel="noreferrer" >
                    <button type='button' className='button'>GITHUB</button>
                </a>
                <a href='https://www.linkedin.com/in/varsharani-bharate-8a4a26118/' target = "_blank" rel="noreferrer" >
                    <button type='button' className='button'>LINKEDIN</button>
                </a>
            </div>
        </div>
    )
}

export default Home