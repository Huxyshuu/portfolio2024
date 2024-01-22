/* eslint-disable react/jsx-key */
import React from 'react';
import './Skills.scss';
import './Icons.scss';
import { Icon } from '@iconify/react';

export default function About() {

    const skillIcons = [
        {
            icon: <Icon icon="vscode-icons:file-type-html" />, 
            name: 'Html',
            category: 'f'
        },
        {
            icon: <Icon icon="vscode-icons:file-type-css" />, 
            name: 'Css',
            category: 'f'
        },
        {
            icon: <Icon icon="logos:javascript" />, 
            name: 'Javascript',
            category: 'f'
        },
        {
            icon: <Icon icon="vscode-icons:file-type-reactjs" />, 
            name: 'React',
            category: 'f'
        },
        {
            icon: <Icon icon="vscode-icons:file-type-python" />, 
            name: 'Python',
            category: 'b'
        },
        {
            icon: <Icon icon="logos:c-sharp" />, 
            name: 'C#',
            category: 'b'
        },
        {
            icon: <Icon icon="logos:git-icon" />, 
            name: 'Git',
            category: 't'
        },
        {
            icon: <Icon icon="carbon:logo-github" />, 
            name: 'Github',
            category: 't'
        },
        {
            icon: <Icon icon="logos:figma" />, 
            name: 'Figma',
            category: 't'
        },
        {
            icon: <Icon icon="vscode-icons:file-type-photoshop" />, 
            name: 'Photoshop',
            category: 't'
        },
        {
            icon: <Icon icon="vscode-icons:file-type-arduino" />, 
            name: 'Arduino', 
            category: 't'},
        {
            icon: <Icon icon="flat-color-icons:google" />, 
            name: 'Google', 
            category: 't'},
        {
            icon: <Icon icon="skill-icons:sqlite" />, 
            name: 'Sqlite', 
            category: 'b'},
        {
            icon: <Icon icon="devicon:mongodb-wordmark" />, 
            name: 'Mongodb', 
            category: 'b'},
        {
            icon: <Icon icon="devicon:c" />, 
            name: 'C', 
            category: 'b'},
        {
            icon: <Icon icon="carbon:cad" />, 
            name: 'Cad', 
            category: 't'},
        {
            icon: <Icon icon="devicon:matlab" />, 
            name: 'Matlab',
            category: 't'},
        {
            icon: <Icon icon="fa6-brands:node" />, 
            name: 'Node', 
            category: 'b'},
        {
            icon: <Icon icon="devicon:scala-wordmark" />, 
            name: 'Scala', 
            category: 'b'},
        {
            icon: <Icon icon="logos:blender" />, 
            name: 'Blender',
            category: 't'},
        // {
        //     icon: <Icon icon="vscode-icons:file-type-excel" />, 
        //     name: 'excel', 
        //     category: 't'},
        {
            icon: <Icon icon="bxl:unity" />, 
            name: 'Unity', 
            category: 't'},
        {
            icon: <Icon icon="logos:firebase" />, 
            name: 'Firebase', 
            category: 'b'},
    ]

    return (
        <div className="skills">
            <div className="category-container">
                <div className="category-header">
                    <Icon className="header-icon" icon="uil:react" />
                    <h4>Frontend dev<br/>React</h4>
                </div>
                <div className="skill-desc-container">
                    <p>{"<h3>"}</p>
                    <p id="skill-desc">Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, REACT.</p>
                    <p>{"<h3>"}</p>
                </div>
                <div className="category-skills">
                {
                    skillIcons.map((skill, index) => {
                        if (skill.category == "f") {
                            return  <div key={skill.name + "_" + index}>
                                        {skill.icon}
                                        <p>{skill.name}</p>
                                    </div>
                        }
                    })
                }
                </div>
            </div>

            <div className="category-container">
                <div className="category-header">
                    <Icon className="header-icon" icon="solar:programming-broken" />
                    <h4>Software<br/>development</h4>
                </div>
                <div className="skill-desc-container">
                    <p>{"<h3>"}</p>
                    <p id="skill-desc">Experience in both functional and OOP: Python, C, Scala, Javascript, SQL, REST API and a few databases, such as MongoDB and Firebase.  </p>
                    <p>{"<h3>"}</p>
                </div>
                <div className="category-skills">
                {
                    skillIcons.map((skill, index) => {
                        if (skill.category == "b") {
                            return  <div key={skill.name + "_" + index}>
                                        {skill.icon}
                                        <p>{skill.name}</p>
                                    </div>
                        }
                    })
                }
                </div>
            </div>
            <div className="category-container">
                <div className="category-header">
                    <Icon className="header-icon" icon="clarity:design-line" />
                    <h4>Tools<br/>Programs</h4>
                </div>
                <div className="skill-desc-container">
                    <p>{"<h3>"}</p>
                    <p id="skill-desc">Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, REACT</p>
                    <p>{"<h3>"}</p>
                </div>
                <div className="category-skills">
                {
                    skillIcons.map((skill, index) => {
                        if (skill.category == "t") {
                            return  <div key={skill.name + "_" + index}>
                                        {skill.icon}
                                        <p>{skill.name}</p>
                                    </div>
                        }
                    })
                }
                </div>
            </div>
        </div>
    )
}