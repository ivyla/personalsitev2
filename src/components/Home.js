import React from "react"
import "../stylesheets/Theme.css"
import "../stylesheets/Home.css"
import { LinkedinFilled, GithubFilled, MailFilled, FileFilled, InstagramFilled } from '@ant-design/icons'

function Home() {
    return (
        <div className="wrapper">
            <div className="content-home">
                <div>
                    <h1 className="default-title"> Hi, I'm Ivy! </h1>
                </div>

                <div>
                    <h3 className="default-header"> I like writing code & designing. </h3>

                </div>

                <div>

                    <p className="default-description">
                        Nam ut dui nec ligula sagittis pharetra et sit
                        amet turpis. Cras malesuada, nulla ut convalli
                        maximus, metus mauris tempus elit, asceler
                        isque mauris turpis sit amet tortor. Proin effic
                pretium dolor at finibus. Morbi ultricies posue </p>
                </div>

                <div>
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
        </div>
    )
}

export default Home