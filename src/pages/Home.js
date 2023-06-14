import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [userName, setUserName] = useState('');
    const [notFound, setNotFound] = useState('');

    const navigateTo = useNavigate();

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://api.github.com/users/${userName}`);
            console.log(response.data);
            setUserName("");
            setNotFound("");
            navigateTo(`/user/${userName}`);
        } catch (error) {
            setNotFound("User not found");
        }
        setUserName('');
    }

    return (
        <>
            <div className="bannerBg">
                <div className="banner">
                    <div className="bannerHeading container">
                        <h1>
                            Git Detective
                        </h1>
                    </div>
                </div>
            </div>
            <div className="content container">
                <div className="detectiveImage">
                    <img src={process.env.PUBLIC_URL + '/detective.jpg'} alt="Detective image" />
                </div>
                <form onSubmit={handleSearch}>
                    <div className="search">
                        <input className="searchInput" type="text" placeholder="Git-hub user"
                            value={userName} onChange={(e) => setUserName(e.target.value)} ></input>
                        <input className="submitInput" type="submit" value="Detect"></input>
                    </div>
                </form>
                <div className='messageContainer'>
                    <div className='message'>
                        <p>{notFound}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home