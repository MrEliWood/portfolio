import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Work() {

    // offset
    const [offset, setOffset] = useState(0);

    // sticky spacer size
    const [spacerLarge, setSpacerLarge] = useState(0);

    // hero width
    const [desktopWidth, setDesktopWidth] = useState(200);
    const [mobileWidth, setMobileWidth] = useState(20);

    // project positions
    const [foundArkPos, setFoundArkPos] = useState();
    // const [recipePos, setRecipePos] = useState();
    // const [weatherPos, setWeatherPos] = useState();
    // const [blogPos, setBlogePos] = useState();
    // const [socialPos, setSocialPos] = useState();
    // const [commercePos, setCommercePos] = useState();
    // const [mavenPos, setMavenPos] = useState();
    // const [propertyPos, setPropertyPos] = useState();

    // project modifiers
    const [foundArkMod, setFoundArkMod] = useState(0);
    const [recipeMod, setRecipeMod] = useState(0);
    const [porefectionMod, setPorefectionMod] = useState(0);
    const [weatherMod, setWeatherMod] = useState(0);
    const [blogMod, setBlogeMod] = useState(0);
    // const [socialMod, setSocialMod] = useState(0);
    // const [commerceMod, setCommerceMod] = useState(0);
    const [mavenMod, setMavenMod] = useState(0);
    const [propertyMod, setPropertyMod] = useState(0);

    // parallax effect
    const handleScroll = () => {

        // get window height
        const windowHeight = window.innerHeight;

        // get elements from the page
        const foundArk = document.getElementById('found-ark').getBoundingClientRect().top;
        const recipe = document.getElementById('recipe').getBoundingClientRect().top;
        const porefection = document.getElementById('porefection').getBoundingClientRect().top;
        const weather = document.getElementById('weather').getBoundingClientRect().top;
        const blog = document.getElementById('blog').getBoundingClientRect().top;
        // const social = document.getElementById('social').getBoundingClientRect().top;
        // const commerce = document.getElementById('commerce').getBoundingClientRect().top;
        const maven = document.getElementById('maven').getBoundingClientRect().top;
        const property = document.getElementById('property').getBoundingClientRect().top;

        setFoundArkPos(foundArk);
        // setRecipePos(recipe);
        // setPorefectionMod(porefection);
        // setWeatherPos(weather);
        // setBlogePos(blog);
        // setSocialPos(social);
        // setCommercePos(commerce);
        // setMavenPos(maven);
        // setPropertyPos(property);

        // arrays of all elements and state setters
        const allPositions = [foundArk, recipe, porefection, weather, blog, maven, property];
        const setAllMods = [setFoundArkMod, setRecipeMod, setPorefectionMod, setWeatherMod, setBlogeMod, setMavenMod, setPropertyMod];

        // set parallax end point
        let newOffset;

        if (window.innerWidth > 768) {
            newOffset = windowHeight / 4;
            setOffset(newOffset);
        } else if (window.innerWidth > 480) {
            newOffset = windowHeight / 2.5;
            setOffset(newOffset);
        } else {
            newOffset = windowHeight / 1.75;
            setOffset(newOffset);
        }

        for (let i = 0; i < allPositions.length; i++) {

            if (allPositions[i] < newOffset) {
                setAllMods[i](windowHeight - newOffset);
            } else if (allPositions[i] < windowHeight) {
                setAllMods[i](windowHeight - allPositions[i]);
            };

        };

        // set size of hero image based on screen size
        const heroWidth = document.getElementById('hero-container').offsetWidth;
        
        let resizeSpeed = 2;

        setSpacerLarge(heroWidth / resizeSpeed - offset);

        if (window.innerWidth > 1024) {

            if (foundArk > offset) {
                setDesktopWidth(heroWidth * 2);
                setMobileWidth(heroWidth / 2.5);
            } else if (((foundArk - offset) * resizeSpeed) < -heroWidth) {
                setDesktopWidth(heroWidth);
                setMobileWidth(heroWidth / 5);
            } else {
                setDesktopWidth((heroWidth * 2) + ((foundArk - offset) * resizeSpeed));
                setMobileWidth(((heroWidth * 2) + ((foundArk - offset) * resizeSpeed)) / 5);
            }

        } else if (window.innerWidth > 480) {

            setDesktopWidth(heroWidth);
            setMobileWidth(heroWidth / (100 / 15));

        } else {

            setDesktopWidth(heroWidth);
            setMobileWidth(heroWidth / 5);

        };

    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        // eslint-disable-next-line
    }, []);

    return (

        <div className="page">

            {/* banner */}
            <div className="intro">

                {window.innerWidth > 768 ?
                    // desktop
                    <>
                        <h2>Hi, my name is Eli and I'm a software developer.</h2>

                        <h3>I'm always open to new opportunities. Check out my portfolio</h3>
                        <h3>and let me know if you're interested in working together.</h3>
                    </>
                    :
                    // mobile
                    <>
                        <h2>Hi, my name is Eli and</h2>
                        <h2>I'm a software developer.</h2>

                        <h3>I'm always open to new opportunities. Check out my portfolio and let me know if you're interested in working together.</h3>
                    </>
                }

                <Link to="../contact" className="contact-button">
                    <button>Contact</button>
                </Link>

            </div>

            {/* found ark */}
            <div id="found-ark" className="sticky-container">

                <div className="project-preview-hero">

                    <div id="hero-container" className="preview-thumbnail-placeholder">

                        <div className="preview-thumbnail-hero" style={{ width: `${Math.floor(desktopWidth)}px` }}>

                            <a href="https://found-ark.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${Math.floor(foundArkMod / 5)}px)` }}>
                                <img src="./assets/work/found-ark/desktop-mockup.png" alt="found ark desktop preview" className="project-thumbnail-desktop"></img>
                                {foundArkPos <= (-spacerLarge - offset - 300) && <img src="assets/work/found-ark/desktop-animation.gif" alt="found ark desktop animation" className="thumbnail-animation-desktop"></img>}
                            </a>

                            <a href="https://found-ark.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${Math.floor(foundArkMod / 10)}px)`, width: `${Math.floor(mobileWidth)}px` }}>
                                <img src="./assets/work/found-ark/mobile-mockup.png" alt="found ark phone preview" className="project-thumbnail-phone"></img>
                            </a>

                        </div>

                    </div>

                    <div className={foundArkPos <= (-spacerLarge - offset + 100) || window.innerWidth <= 1024 ? "preview-details-right show-description" : "preview-details-right hide-description"}>

                        <h2 className="preview-title">Found Ark</h2>

                        <p className={foundArkPos <= (-spacerLarge - offset - 50) || window.innerWidth <= 1024 ? "project-description-right show-description" : "project-description-right hide-description"}>
                            A web application that makes it easier for players to find and create groups for the game Lost Ark, without having to rely on giant anonymous servers where they may never get picked up.
                        </p>

                        <div className={foundArkPos <= (-spacerLarge - offset - 200) || window.innerWidth <= 1024 ? "preview-links show-description" : "preview-links hide-description"}>
                            <a href="https://found-ark.herokuapp.com" target="_blank" rel="noreferrer" className="icon-link-right">
                                <img src="./assets/icons/web-icon.png" alt="deployed application link" className="icon"></img>
                                <p className="icon-description-right">Deployed Application</p>
                            </a>
                            <a href="https://github.com/chuanw101/found-ark" target="_blank" rel="noreferrer" className="icon-link-right">
                                <img src="./assets/icons/GitHub-Mark-Light-120px-plus.png" alt="GitHub repository link" className="icon"></img>
                                <p className="icon-description-right">GitHub Repository</p>
                            </a>
                        </div>

                    </div>

                </div>

                {window.innerWidth > 1024 && <div className="sticky-spacer-large" style={{ height: `${spacerLarge + offset + 450}px` }}></div>}

            </div>

            {/* recipe generator */}
            <div className="sticky-container">

                <div id="recipe" className="project-preview-right">

                    <div className="preview-thumbnail-right">

                        <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${recipeMod / 5}px)` }}>
                            <img src="./assets/work/recipe/desktop-mockup.png" alt="recipe generator desktop preview" className="project-thumbnail-desktop"></img>
                        </a>

                        <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${recipeMod / 10}px)` }}>
                            <img src="./assets/work/recipe/mobile-mockup.png" alt="recipe generator phone preview" className="project-thumbnail-phone"></img>
                        </a>

                    </div>

                    <div className="preview-details-left">

                        <h2 className="preview-title">Recipe Generator</h2>

                        <p className="project-description-left">
                            Users can find inspiration for their next meal by randomly generating recipes with sorting logic to filter their results by course and/or dietary restrictions and an engaging, intuitive user experience.
                        </p>

                        <div className="preview-links">
                            <a href="https://mreliwood.github.io/demo-recipe-generator/" target="_blank" rel="noreferrer" className="icon-link-left">
                                <img src="./assets/icons/web-icon.png" alt="deployed application link" className="icon"></img>
                                <p className="icon-description-left">Deployed Application</p>
                            </a>
                            <a href="https://github.com/MrEliWood/demo-recipe-generator" target="_blank" rel="noreferrer" className="icon-link-left">
                                <img src="./assets/icons/GitHub-Mark-Light-120px-plus.png" alt="GitHub repository link" className="icon"></img>
                                <p className="icon-description-left">GitHub Repository</p>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

            <div className="sticky-container">

                {/* social network api */}
                <div id="social" className="project-preview-left">

                    <div className="placeholder-container" style={{ width: '50%' }}></div>

                    <div className="preview-details-right">

                        <h2 className="preview-title">Social Network API</h2>

                        <p className="project-description-right">
                            This Social Network API uses MongoDB to build the foundation for a NoSQL social network. Out of the box, users are able to share thoughts, react to thoughts, and connect with friends.
                        </p>

                        <div className="preview-links">
                            <a href="https://github.com/MrEliWood/social-network-api" target="_blank" rel="noreferrer" className="icon-link-right">
                                <img src="./assets/icons/GitHub-Mark-Light-120px-plus.png" alt="GitHub repository link" className="icon"></img>
                                <p className="icon-description-right">GitHub Repository</p>
                            </a>
                        </div>

                    </div>

                </div>

                {/* e-commerce backend */}
                <div id="commerce" className="project-preview-left">

                    <div className="placeholder-container" style={{ width: '50%' }}></div>

                    <div className="preview-details-right">

                        <h2 className="preview-title">E-Commerce Backend</h2>

                        <p className="project-description-right">
                            This strictly backend e-commerce application allows the user to easily manage their inventory with a MySQL database or lays a solid foundation for a developer planning to build a full stack e-commerce platform.
                        </p>

                        <div className="preview-links">
                            <a href="https://github.com/MrEliWood/e-commerce-back-end" target="_blank" rel="noreferrer" className="icon-link-right">
                                <img src="./assets/icons/GitHub-Mark-Light-120px-plus.png" alt="GitHub repository link" className="icon"></img>
                                <p className="icon-description-right">GitHub Repository</p>
                            </a>
                        </div>

                    </div>

                </div>

            </div>


            {/* porefection */}
            <div id="porefection" className="sticky-container">

                <div className="project-preview-right">

                    <div className="preview-thumbnail-right">

                        <a href="https://mreliwood.github.io/porefection/" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${Math.floor(porefectionMod / 5)}px)` }}>
                            <img src="./assets/work/porefection/desktop-mockup.png" alt="found ark desktop preview" className="project-thumbnail-desktop"></img>
                        </a>

                        <a href="https://mreliwood.github.io/porefection/" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${Math.floor(porefectionMod / 10)}px)` }}>
                            <img src="./assets/work/porefection/mobile-mockup.png" alt="found ark phone preview" className="project-thumbnail-phone"></img>
                        </a>

                    </div>

                    <div className="preview-details-left">

                        <h2 className="preview-title">Porefection</h2>

                        <p className="project-description-left">
                            This web application helps users manage their skincare routine by allowing them to create a detailed list of their skincare products. When the user adds a product to their list, detailed product information is fetched from Sephora API and the list is automatically sorted in the correct order for using the products.
                        </p>

                        <div className="preview-links">
                            <a href="https://mreliwood.github.io/porefection/" target="_blank" rel="noreferrer" className="icon-link-left">
                                <img src="./assets/icons/web-icon.png" alt="deployed application link" className="icon"></img>
                                <p className="icon-description-left">Deployed Application</p>
                            </a>
                            <a href="https://github.com/MrEliWood/porefection" target="_blank" rel="noreferrer" className="icon-link-left">
                                <img src="./assets/icons/GitHub-Mark-Light-120px-plus.png" alt="GitHub repository link" className="icon"></img>
                                <p className="icon-description-left">GitHub Repository</p>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

            {/* maven group */}
            <div className="sticky-container">

                <div id="maven" className="project-preview-left">

                    <div className="preview-thumbnail-left">

                        <a href="https://www.mavengroupnw.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${Math.floor(mavenMod / 5)}px)` }}>
                            <img src="./assets/work/maven/desktop-mockup.png" alt="maven group desktop preview" className="project-thumbnail-desktop"></img>
                        </a>

                        <a href="https://www.mavengroupnw.com" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${Math.floor(mavenMod / 10)}px)` }}>
                            <img src="./assets/work/maven/mobile-mockup.png" alt="maven group phone preview" className="project-thumbnail-phone"></img>
                        </a>

                    </div>

                    <div className="preview-details-right">

                        <h2 className="preview-title">Real Estate Team Websites</h2>

                        <p className="project-description-right">
                            Promotional websites for real estate teams, serving as the first point of contact for potential clients and showcase for the services and success of the team.
                        </p>

                        <div className="preview-links">
                            <a href="https://www.mavengroupnw.com" target="_blank" rel="noreferrer" className="icon-link-right">
                                <img src="./assets/icons/web-icon.png" alt="deployed application link" className="icon"></img>
                                <p className="icon-description-right">Live Website</p>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

            {/* property website */}
            <div className="sticky-container">

                <div id="property" className="project-preview-right">

                    <div className="preview-thumbnail-right">

                        <a href="https://shadowhawktownhome.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${propertyMod / 5}px)` }}>
                            <img src="./assets/work/property/desktop-mockup.png" alt="property desktop preview" className="project-thumbnail-desktop"></img>
                        </a>

                        <a href="https://shadowhawktownhome.com" target="_blank" rel="noreferrer" className="project-thumbnail-phone-link" style={{ transform: `translateY(${propertyMod / 10}px)` }}>
                            <img src="./assets/work/property/mobile-mockup.png" alt="property phone preview" className="project-thumbnail-phone"></img>
                        </a>

                    </div>

                    <div className="preview-details-left">

                        <h2 className="preview-title">Property Websites</h2>

                        <p className="project-description-left">
                            One of many websites showcasing a property for sale or for rent, featuring all important property details, engaging potential customers and funneling high value traffic.
                        </p>

                        <div className="preview-links">
                            <a href="https://shadowhawktownhome.com" target="_blank" rel="noreferrer" className="icon-link-left">
                                <img src="./assets/icons/web-icon.png" alt="deployed application link" className="icon"></img>
                                <p className="icon-description-left">Live Website</p>
                            </a>
                        </div>

                    </div>

                </div>

            </div>


            {/* weather dashboard */}
            <div className="sticky-container">

                <div id="weather" className="project-preview-left">

                    <div className="preview-thumbnail-center">

                        <a href="https://demo-weather-dashboard.herokuapp.com" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${weatherMod / 5}px)` }}>
                            <img src="./assets/work/weather/desktop-mockup.png" alt="weather dashboard preview" className="project-thumbnail-desktop"></img>
                        </a>

                    </div>

                    <div className="preview-details-right">

                        <h2 className="preview-title">Weather Dashboard</h2>

                        <p className="project-description-right">
                            Full bleed background images and a clear, engaging user interface deliver a 5-day forecast utilizing powerful integrations from the Google Maps API and OpenWeather.
                        </p>

                        <div className="preview-links">
                            <a href="https://demo-weather-dashboard.herokuapp.com" target="_blank" rel="noreferrer" className="icon-link-right">
                                <img src="./assets/icons/web-icon.png" alt="deployed application link" className="icon"></img>
                                <p className="icon-description-right">Deployed Application</p>
                            </a>
                            <a href="https://github.com/MrEliWood/demo-weather-dashboard" target="_blank" rel="noreferrer" className="icon-link-right">
                                <img src="./assets/icons/GitHub-Mark-Light-120px-plus.png" alt="GitHub repository link" className="icon"></img>
                                <p className="icon-description-right">GitHub Repository</p>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

            {/* blog template */}
            <div className="sticky-container">

                <div id="blog" className="project-preview-right">

                    <div className="preview-thumbnail-center">

                        <a href="http://demo-blog-template.herokuapp.com/" target="_blank" rel="noreferrer" className="project-thumbnail-desktop-link" style={{ transform: `translateY(-${blogMod / 5}px)` }}>
                            <img src="./assets/work/blog/desktop-mockup.png" alt="blog template preview" className="project-thumbnail-desktop"></img>
                        </a>

                    </div>

                    <div className="preview-details-left">

                        <h2 className="preview-title">Blog Template</h2>

                        <p className="project-description-left">
                            Free template for developers building a blog based on a MySQL database with complex relationships, including multiple users with hashed passwords powered by bcrypt.
                        </p>

                        <div className="preview-links">
                            <a href="http://demo-blog-template.herokuapp.com/" target="_blank" rel="noreferrer" className="icon-link-left">
                                <img src="./assets/icons/web-icon.png" alt="deployed application link" className="icon"></img>
                                <p className="icon-description-left">Deployed Application</p>
                            </a>
                            <a href="https://github.com/MrEliWood/blog-template" target="_blank" rel="noreferrer" className="icon-link-left">
                                <img src="./assets/icons/GitHub-Mark-Light-120px-plus.png" alt="GitHub repository link" className="icon"></img>
                                <p className="icon-description-left">GitHub Repository</p>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Work;