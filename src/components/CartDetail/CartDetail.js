import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import male from '../male.png';

/*aigulo folder er thekey Image er jonno use kora hoicy 
import twitter from '../../picture/Twitter.png';
import facebook from '../../picture/Facebook.png';
import youTube from '../../picture/YouTube.png';
import {Link} from "react-router-dom"*/

/*Font icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faFlag, faFutbol, faTransgender } from '@fortawesome/free-solid-svg-icons';
/*react icon*/
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

/* uprer header er backgroundImage */
import '../BackgroundImage/BackgroundImage.css'


const CartDetail = () => {
    const { dynamic } = useParams();

    const [team, setTeam] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${dynamic}`;
        // const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${dynamic}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [dynamic])


    return (
        <div className='p-5 bkg-main'>

            <div className="image d-flex align-items-center justify-content-center">
                <div className="bannerImg">
                    <img src={team.strTeamBadge} alt="" />
                </div>
            </div>



            <div className="bkg-detail d-flex justify-content-between">
                <div className="text">
                    <h2>{team.strTeam}</h2>
                    <h5><FontAwesomeIcon icon={faCubes} /> Alternate: {team.strAlternate}</h5>
                    <h5><FontAwesomeIcon icon={faFlag} /> Country: {team.strCountry}</h5>
                    <h5><FontAwesomeIcon icon={faFutbol} /> Stadium: {team.strStadium}</h5>
                    <h5><FontAwesomeIcon icon={faTransgender} /> Gender: {team.strGender}</h5>
                </div>
                <div className="Image">
                    <img src={male} alt="" />

                </div>
            </div>

            <div className='p-3'>
                {team.strDescriptionEN}
            </div>

            <div>
                {team.strStadiumDescription}
            </div>

            <footer className="footer ">

                {/* akhaney react icon use kora hoicy */}
                <FaFacebook size="3em" color="blue" /> <FaYoutube size="3.3em" color="red" /> <FaTwitter size="3em" color="dodgerblue" />

                {/* akhaney folder thekey image use kora hoicy */}
                {/* <Link> <img src={twitter} alt=""/> </Link>
            <Link> <img src={facebook} alt=""/> </Link>
            <Link> <img src={youTube} alt=""/> </Link> */}
            </footer>

        </div>

    );
};

export default CartDetail;