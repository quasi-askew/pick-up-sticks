import doodle from "../assets/doodle-6869.png";

const Footer = () => {
    return (
        <footer className="p-10 footer bg-primary text-primary-content footer-center">
            <a href="https://twitter.com/quasi_askew">
                <div className="avatar">
                    <div className="w-24 h-24 mask mask-hexagon">
                        <img src={doodle} alt="Doodle #6869" />
                    </div>
                </div>
                <p>@quasi_askew</p>
            </a>
        </footer>
    )
}

export default Footer;