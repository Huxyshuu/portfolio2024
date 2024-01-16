import {useState} from 'react'
import './WorkDisplay.scss';
import { Icon } from '@iconify/react';

export default function WorkDisplay() {

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
        <div className="work-content">
            <div className="thumbnail">
            <img src={cards[currentCard].img} alt={cards[currentCard].title.toLowerCase()}/>
            </div>
        </div>
    )
}
