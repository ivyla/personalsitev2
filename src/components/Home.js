import React, { useState, useEffect } from "react"
import "../stylesheets/Theme.css"
import "../stylesheets/Home.css"
import { LinkedinFilled, GithubFilled, MailFilled, FileFilled, InstagramFilled } from '@ant-design/icons'
import "../stylesheets/HomeGraphics.css"
import { CSSTransition, TransitionGroup } from "react-transition-group"

function Home() {
    return (

        <div className="wrapper-home">

            <div className="content-home">
                <div className="default-title">
                    Hi, I'm Ivy.
                </div>

                <div className="default-header">
                    I like writing code & designing.

                </div>

                <div className="default-desc-home">
                    Nam ut dui nec ligula sagittis pharetra et sit
                    amet turpis. Cras malesuada, nulla ut convalli
                    maximus, metus mauris tempus elit, asceler
                    isque mauris turpis sit amet tortor. Proin effic
                    pretium dolor at finibus. Morbi ultricies. Proin effic
                    pretium dolor at finibus. Morbi ultricies.
                    {/* I'm a software developer currently focusing
                    on growing my skills in front end and fullstack technologies.
                    I strive to create engaging and meaningful
                    user experiences through software engineering
                    and front end design; bringing any ideas to life
                    from paper to screen. */}
                </div>

                <div className="media-icons-container">
                    <a href="https://linkedin.com/in/ivyla" target="_blank" rel="noopener noreferrer">
                        <LinkedinFilled className="media-icons" id="linkedin-icon" />
                    </a>
                    <a href="https://github.com/ivyla" target="_blank" rel="noopener noreferrer">
                        <GithubFilled className="media-icons" id="github-icon" />
                    </a>

                    <a href="mailto:ila@ucsc.edu" target="_blank" rel="noopener noreferrer">
                        <MailFilled className="media-icons" id="email-icon" />
                    </a>

                    <a href="https://www.instagram.com/stegoivysaur/" target="_blank" rel="noopener noreferrer">
                        <InstagramFilled className="media-icons" id="instagram-icon" />
                    </a>

                </div>
                {/* linkedin github email resume */}

            </div>

        </div >
    )
}

export default Home