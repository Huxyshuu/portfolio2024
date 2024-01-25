import './Sidebar.scss';
import { Icon } from '@iconify/react';
import { scrollTo } from '../../utilities/utilities';

function Sidebar(props) {

    const {open, setOpen, isSmall} = props;

    const menuButton = () => {
        setOpen(!open)
        const content = document.getElementById('sidebarMargin');
        const root = document.querySelector(':root');

        if (!open) {
            content.style.marginLeft = getComputedStyle(root).getPropertyValue('--sidebar-width-open')
            // const finalWidth = parseFloat(width.substring(0, width.length - 2)) + 3;
            // content.style.marginLeft = finalWidth + 'vh'
        } else {
            content.style.marginLeft = getComputedStyle(root).getPropertyValue('--sidebar-width-closed')
        }
    }

    if (!isSmall) {
        return (
            <div className={'sidebar ' + (open ? 'open' : '')}>
                <div className="sidebar-logo" onClick={() => scrollTo('home')}>
                    <img id="side-logo" src={"/ht-logo-green-dot.png"} alt="logo" />
                    <h2 id="sidebar-name">Hugo Tamm</h2>
                    <h3 id="sidebar-url">hugotamm.com</h3>
                </div>
    
                <div>
                    <div id="side-button" onClick={menuButton}>
                        <Icon id="side-button-icon" icon="material-symbols:chevron-right-rounded" />
                    </div>
                </div>
                
                <h3 className="sidebar-section">Navigation</h3>
                <div>
                    <div className="sidebar-icons" onClick={() => scrollTo('workSection')}>
                        <Icon icon="ic:baseline-work-outline" />
                        <h3 className="icon-text">Work</h3>
                    </div>
                    <div className="sidebar-icons" onClick={() => scrollTo('aboutSection')}>
                        <Icon icon="mdi:user-circle-outline" />
                        <h3 className="icon-text">About</h3>
                    </div>
                    <div className="sidebar-icons" onClick={() => scrollTo('skillSection')}>
                        <Icon icon="carbon:skill-level-intermediate" />
                        <h3 className="icon-text">Skills</h3>
                    </div>
                    <div className="sidebar-icons" onClick={() => scrollTo('contactSection')}>
                        <Icon icon="ic:outline-email" />
                        <h3 className="icon-text">Contact</h3>
                    </div>
                </div>
    
                <div id="sectionDivider">
                </div>
    
                <h3 className="sidebar-section">Socials</h3>
                <div>
                    <div className="sidebar-media" onClick={() => window.open("https://www.linkedin.com/in/hugotamm/", '_blank', 'noreferrer')}>
                        <Icon icon="ph:linkedin-logo-bold" />
                        <h3 className="icon-text">LinkedIn</h3>
                    </div>
                    <div className="sidebar-media" onClick={() => window.open("https://github.com/Huxyshuu", '_blank', 'noreferrer')}>
                        <Icon icon="codicon:github" />
                        <h3 className="icon-text">GitHub</h3>
                    </div>
                </div>
    
                <div id="sidebar-copyright">
                    <p>© 2024 Hugo Tamm. All Rights Reserved.</p>
                </div>
            </div>
        )
    }
}

export default Sidebar