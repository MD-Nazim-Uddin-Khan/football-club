import React, { useEffect, useState } from 'react';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import Cart from '../Cart/Cart';
import './Home.css'

// import background from '../../picture/download.jpg'



const Home = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`;
        fetch(url)
        .then(res => res.json())
        .then(data=> setLeagues(data.teams))
    }, [])
    return (
        <div className="bkg-main ">
            <div className="container background-img">

                {/* <img src={background} alt=""/> */}
                <BackgroundImage/>

            <h3>Item : {leagues.length}</h3>
            <div className='row ms-auto'>
            {
                leagues.map(ls=> <Cart key={ls.key} league ={ls}></Cart>)
            }
            </div>
            </div>
        </div>
    );
};

export default Home;