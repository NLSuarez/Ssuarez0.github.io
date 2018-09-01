﻿'use strict';

//react and projects

//Projects
//Defined outside to keep them organized. Would normally store as json, but no need right now.

const currentProjects = [
    {
        key: 0,
        name: "Revaliir.net",
        description: "A medium size forum website serving a dedicated, writing community. </br><strong>Live technology stack:</strong> Django 1.8, python 2.7, jquery, and bootstrap 3. </br><strong>In development technology stack:</strong> React.js, Node.js, Graphene, Django 2.0+, Python 3.7+",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: "https://revaliir.net/index/"
    },
    {
        key: 1,
        name: "Spanish Frequency Analyzer",
        description: "A desktop application built for a high school Spanish teacher to help determine the frequency at which words appear in lecture notes. </br><strong>Technology stack:</strong> C# and WPF.",
        projectImg: "./media/images/spanishFrequency.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 2,
        name: "Test project",
        description: "",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    }, {
        key: 3,
        name: "Test project",
        description: "",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 4,
        name: "Test project",
        description: "",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 5,
        name: "Test project",
        description: "",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 6,
        name: "Test project",
        description: "",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 7,
        name: "Test project",
        description: "",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 8,
        name: "Test project",
        description: "",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 9,
        name: "Test project",
        description: "",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 10,
        name: "Test project",
        description: "",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    },
    {
        key: 11,
        name: "Test project",
        description: "",
        projectImg: "./media/images/Revaliir.PNG",
        githubLink: "https://github.com/Ssuarez0/",
        websiteLink: ""
    }
]

//Classes

class ProjectsSlideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: currentProjects,
            currentSlide: 1,
            previousSlide: -1
        }

        this.handleSlideSelect = this.handleSlideSelect.bind(this);
    }

    handleSlideSelect(nextSlide) {
        //Adjust current slide by clicking on the previews
        if (nextSlide <= this.state.slides.length && nextSlide > 0) {
            this.setState(Object.assign({}, this.state, { currentSlide: nextSlide, previousSlide: this.state.currentSlide }));
        }
    }

    render() {
        const slides = this.state.slides.map((slide, index) => {
            return (
                <Slide
                    key={(index + 1).toString()}
                    project={slide}
                    currentSlide={index + 1 === this.state.currentSlide ? true : false}
                    previousSlide={index + 1 === this.state.previousSlide ? true : false}
                    justInitialized={this.state.previousSlide === -1 ? true : false}
                />
            );
        });

        return (
            <div className="slideshow-container">
                <div className="slideshow-main">
                    <SlideshowControls
                        projects={this.state.slides}
                        currentSlide={this.state.currentSlide}
                        handleSlideSelect={this.handleSlideSelect}
                    />
                    <div className="slide-section">
                        <div className="slides">
                            {slides}
                        </div>
                    </div>
                </div>
                <SlideDescription currentSlide={this.state.slides[this.state.currentSlide - 1]} />
            </div>
        );
    }
}

//Handles the generation and styles for a slide image
class Slide extends React.Component {

    render() {
        return (
            <div>
                <div className={"slide " + (this.props.justInitialized && this.props.currentSlide ? "initial-slide" : this.props.currentSlide ? "current-slide" : this.props.previousSlide ? "previous-slide" : "")}>
                    <img src={this.props.project.projectImg} />
                </div>
            </div>
        );
    }
}

//Handles the appendment of
class SlideDescription extends React.Component {
    render() {
        //Simplify prop currentSlide
        const currentSlide = this.props.currentSlide;
        //Format description
        const description = { __html: currentSlide.description };
        //Assign the links to the current slide
        let links = [];
        if (currentSlide.websiteLink && currentSlide.websiteLink.length > 0) links.push(<a key="website-link" className="project-link" title="Website" target="_blank" href={currentSlide.websiteLink}><i className="fas fa-globe"></i></a>);
        if (currentSlide.githubLink && currentSlide.githubLink.length > 0) links.push(<a key="github-link" className="project-link" title="Github" target="_blank" href={currentSlide.githubLink}><i className="fab fa-github"></i></a>);

        return (
            <div className="current-slide-details">
                <h4 className="slideName" >{currentSlide.name}</h4>
                <p className="slideDescription" dangerouslySetInnerHTML={description}></p>
                <div className="project-links">
                    {links}
                </div>
            </div>
        );
    }
}

class SlideshowControls extends React.Component {
    constructor(props) {
        super(props);

        this.handleSlideSelect = this.handleSlideSelect.bind(this);
        this.handleDecrementSlide = this.handleDecrementSlide.bind(this);
        this.handleIncrementSlide = this.handleIncrementSlide.bind(this);
        this.scrollThumbnails = this.scrollThumbnails.bind(this);
        this.currentThumbnail = React.createRef();
    }

    handleSlideSelect(nextSlideNumber) {
        this.props.handleSlideSelect(nextSlideNumber);
    }

    handleDecrementSlide(e) {
        e.preventDefault();
        let nextSlide = this.props.currentSlide - 1;
        if (nextSlide < 1) nextSlide = this.props.projects.length;
        this.handleSlideSelect(nextSlide);
    }

    handleIncrementSlide(e) {
        e.preventDefault();
        let nextSlide = this.props.currentSlide + 1;
        if (nextSlide > this.props.projects.length) nextSlide = 1;
        this.handleSlideSelect(nextSlide);
    }

    scrollThumbnails() {
        const thumbnailNode = this.currentThumbnail;
        thumbnailNode.scrollIntoView();
    }

    componentDidUpdate() {
        //this.scrollThumbnails();
        //Commented out but left in in case I want to use this in the future.
        //I didn't like the way it functioned for the moment.
    }

    render() {
        //Map the slides to thumbnails
        const slides = this.props.projects.map((project, index) => {
            const slideNumber = index + 1;
            if (slideNumber === this.props.currentSlide) {
                return (
                    <li ref={node => this.currentThumbnail = node} key={slideNumber} onClick={() => this.handleSlideSelect(slideNumber)}>
                        <img className="project-thumbnail current-project-thumbnail" src={project.projectImg} />
                    </li>
                );
            } else {
                return (
                    <li key={slideNumber} onClick={() => this.handleSlideSelect(slideNumber)}>
                        <img className="project-thumbnail" src={project.projectImg} />
                    </li>
                );
            }
        });

        return (
            <div className="project-tools">
                <div className="project-thumbnails">
                    <ul>
                        {slides}
                    </ul>
                </div>
                <div className="slide-buttons">
                    <a className="maximize-image"></a>
                    <a className="slide-button" href="#" onClick={this.handleDecrementSlide}><i className="fas fa-arrow-alt-circle-left"></i></a>
                    <a className="slide-button" href="#" onClick={this.handleIncrementSlide}><i className="fas fa-arrow-alt-circle-right"></i></a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ProjectsSlideshow />, document.getElementById('projects'));