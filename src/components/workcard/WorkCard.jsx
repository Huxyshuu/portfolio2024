import {useState} from 'react'
import './WorkCard.scss';
import { Icon } from '@iconify/react';

export default function WorkCard() {

    const [currentCard, setCurrentCard] = useState(0);

    const cards = [
        {
            title: 'KokkiKawaii',
            img: '/kokkikawaii.png',
            desc: 'A full stack website that I created for me and my partner to use as a recipe app, to save our favorite recipes and retrieve them at any time.',
            techs: ['HTML & CSS', 'Javascript', 'React', 'MongoDB', 'Node.js', 'Express'],
            demo: 'https://reclib.vercel.app/',
            code: 'unavailable'
        },
        {
            title: 'Project 2',
            img: 'https://c4.wallpaperflare.com/wallpaper/978/275/707/hecarim-league-of-legends-riot-games-high-noon-fire-hd-wallpaper-preview.jpg',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            techs: ['HTML & CSS', 'Javascript', 'React', 'MongoDB', 'Python', 'NodeJS'],
        },
        {
            title: 'Project 3',
            img: 'https://c4.wallpaperflare.com/wallpaper/50/914/446/spirit-blossom-ahri-league-of-legends-ahri-league-of-legends-riot-games-hd-wallpaper-preview.jpg',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, at! Lorem sit amet consectetur adipisicing elit.',
            techs: ['HTML & CSS', 'Javascript', 'React', 'Responsivness'],
        }
    ]


    
    const changeCard = (dir) => {
        const card = document.getElementById('cardHolder');
        if (dir === 'left') {
            setCurrentCard(
                currentCard === 0 ? cards.length - 1 : currentCard - 1
            )
            card.style.animation = "slide-in-fwd-left 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        }
        if (dir === 'right') {
            setCurrentCard(
                currentCard === cards.length - 1 ? 0 : currentCard + 1
            )
            card.style.animation = "slide-in-fwd-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        }
        setTimeout(() => {
            card.style.animation = "0";
        }, 400)
    }


    return (
        <div id="container">

            <div id="leftArrowDiv" onClick={() => changeCard('left')}>
                <Icon icon="bx:left-arrow" id="arrow-left" className="cardArrows"/>
                <Icon icon="bxs:left-arrow" id="hover-left" className="cardArrows"/>
            </div>

            <div className='card' id="cardHolder">
                
                <img src={cards[currentCard].img} alt={cards[currentCard].title.toLowerCase()}/>
                <h4 id="name">{cards[currentCard].title}</h4>
                <p id="card-info" >{cards[currentCard].desc}</p>
                <div className="techs">
                    {
                        cards[currentCard].techs.map((tech, i) => {
                            return <p key={'tech' + i}>{tech.toUpperCase()}</p>
                        })
                    }
                </div>

                <div className="buttons">
                    {
                        cards[currentCard].demo !== 'unavailable' ?  <a href={cards[currentCard].demo} target="_blank" rel="noreferrer">DEMO</a> : <a id="grayedOut" title="Unavailable">DEMO</a>
                    }
                    {
                        cards[currentCard].code !== 'unavailable' ?  <a href={cards[currentCard].code} target="_blank" rel="noreferrer">CODE</a> : <a id="grayedOut" title="Unavailable">CODE</a>
                    }
                </div>
            </div>
                    
            <div id="rightArrowDiv" onClick={() => changeCard('right')}>
                <Icon icon="bx:right-arrow" id="arrow-right" className="cardArrows"/>
                <Icon icon="bxs:right-arrow" id="hover-right" className="cardArrows"/>
            </div>

        </div>
        
    )
}