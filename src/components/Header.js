import trollface from '../images/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img src={trollface} className="header--image" alt="the troll face" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project</h4>
        </header>
    )
}