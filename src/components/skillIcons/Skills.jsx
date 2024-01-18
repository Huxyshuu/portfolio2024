/* eslint-disable react/jsx-key */
import React from 'react';
import './Skills.scss';
import './Icons.scss';
import { Icon } from '@iconify/react';

export default function About() {

    const skillIcons = [
        <Icon icon="vscode-icons:file-type-html" />,
        <Icon icon="vscode-icons:file-type-css" />,
        <Icon icon="logos:javascript" />,
        <Icon icon="vscode-icons:file-type-reactjs" />,
        <Icon icon="vscode-icons:file-type-python" />,
        <Icon icon="logos:c-sharp" />,
        <Icon icon="logos:git-icon" />,
        <Icon icon="carbon:logo-github" />,
        <Icon icon="logos:figma" />,
        <Icon icon="vscode-icons:file-type-photoshop" />,
        <Icon icon="vscode-icons:file-type-arduino" />,
        <Icon icon="flat-color-icons:google" />
    ]
    const skillNames = [
        'html',
        'css',
        'javascript',
        'react',
        'python',
        'csharp',
        'git',
        'github',
        'figma',
        'photoshop',
        'arduino',
        'google'
    ]

    return (
        <section id="skills">
            <div id="sideby">
                <div className="skills">
                    {
                        skillIcons.map((tech, i) => {
                            return <p key={skillNames[i]} id={skillNames[i]}>{tech}</p>
                        })
                    }
                </div>
            </div>
            
        </section>
    )
}