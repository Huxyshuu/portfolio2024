/* eslint-disable react/jsx-key */
import React from 'react';
import './Skills.scss';
import './Icons.scss';
import { Icon } from '@iconify/react';

export default function About() {

    const skillIcons = [
        {
            icon: <Icon icon="vscode-icons:file-type-html" />, 
            name: 'html',
            category: 'f'
        },
        {
            icon: <Icon icon="vscode-icons:file-type-css" />, 
            name: 'css',
            category: 'f'
        },
        {
            icon: <Icon icon="logos:javascript" />, 
            name: 'javascript',
            category: 'b'
        },
        {
            icon: <Icon icon="vscode-icons:file-type-reactjs" />, 
            name: 'react',
            category: 'b'
        },
        {
            icon: <Icon icon="vscode-icons:file-type-python" />, 
            name: 'python',
            category: 'b'
        },
        {
            icon: <Icon icon="logos:c-sharp" />, 
            name: 'c#',
            category: 'b'
        },
        {
            icon: <Icon icon="logos:git-icon" />, 
            name: 'git',
            category: 't'
        },
        {
            icon: <Icon icon="carbon:logo-github" />, 
            name: 'github',
            category: 't'
        },
        {
            icon: <Icon icon="logos:figma" />, 
            name: 'figma',
            category: 't'
        },
        {
            icon: <Icon icon="vscode-icons:file-type-photoshop" />, 
            name: 'photoshop',
            category: 't'
        },
        {
            icon: <Icon icon="vscode-icons:file-type-arduino" />, 
            name: 'arduino', 
            category: 't'},
        {
            icon: <Icon icon="flat-color-icons:google" />, 
            name: 'google', 
            category: 't'},
        {
            icon: <Icon icon="logos:sqlite" />, 
            name: 'sqlite', 
            category: 'b'},
        {
            icon: <Icon icon="devicon:mongodb-wordmark" />, 
            name: 'mongodb', 
            category: 'b'},
        {
            icon: <Icon icon="devicon:c" />, 
            name: 'c', 
            category: 'b'},
        {
            icon: <Icon icon="carbon:cad" />, 
            name: 'cad', 
            category: 't'},
        {
            icon: <Icon icon="devicon:matlab" />, 
            name: 'matlab',
            category: 't'},
        {
            icon: <Icon icon="fa6-brands:node" />, 
            name: 'node', 
            category: 'b'},
        {
            icon: <Icon icon="devicon:scala-wordmark" />, 
            name: 'scala', 
            category: 'b'},
        {
            icon: <Icon icon="logos:blender" />, 
            name: 'blender',
            category: 't'},
        {
            icon: <Icon icon="vscode-icons:file-type-excel" />, 
            name: 'excel', 
            category: 't'},
        {
            icon: <Icon icon="logos:unity" />, 
            name: 'unity', 
            category: 't'},
        {
            icon: <Icon icon="logos:firebase" />, 
            name: 'firebase', 
            category: 'b'},
    ]

    return (
        <div className="skills">
            {
                skillIcons.map((skill, index) => {
                    return <div key={skill.name + "_" + index}>
                        {skill.icon}
                        <p>{skill.name}</p>
                    </div>
                })
            }
        </div>
    )
}