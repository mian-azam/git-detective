import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserInfo({ userName }) {
    const [userInfo, setUserInfo] = useState({});
    const [userReopos, setUserRepos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {

                const infoResponse = await axios.get(`https://api.github.com/users/${userName}`);
                setUserInfo(infoResponse.data);

                const repoResponse = await axios.get(`https://api.github.com/users/${userName}/repos`);
                setUserRepos(repoResponse.data);
                console.log(repoResponse.data)

            } catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, [userName]);

    return (
        <div className="container">
            <div className="profile">
                <div className="personalInfo">
                    <div className="detectiveImage">
                        <img src={userInfo.avatar_url} alt="image"></img>
                    </div>
                    <div className="nameBio">
                        <p>{userInfo.name}</p>
                        <p>{userInfo.bio}</p>
                    </div>
                    <div className="followers">
                        <p><span>Followers:</span> {userInfo.followers}</p>
                        <p><span>Following:</span> {userInfo.following}</p>
                        <p><span>Location:</span> {userInfo.location}</p>
                    </div>
                    <div className="gitHubLink">
                        <Link to={userInfo.html_url} target="_blank">
                            <button>Show on GitHub</button>
                        </Link>
                    </div>
                </div>
            </div>
            <h2 className="repoHead">{userInfo.name}'s Repositories</h2>
            <div className="repoDiv">
                {userReopos.map(repo => (
                    <div key={repo.id} className='repoBg'>
                        <div className="repo">
                            <div className="repoInfo">
                                <Link to={userReopos.html_url} target="_blank" className="link">
                                    <p>{repo.name}</p>
                                </Link>
                                <p>{repo.description}</p>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    )
}

export default UserInfo