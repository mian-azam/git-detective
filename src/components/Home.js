

function Home() {
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
                <div className="search">
                    <input className="searchInput" type="text" placeholder="Git-hub user"></input>
                    <input className="submitInput" type="submit" value="Detect"></input>
                </div>

            </div>
        </>

    )
}

export default Home