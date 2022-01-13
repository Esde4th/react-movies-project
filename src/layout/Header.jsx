function Header() {
    return (
        <nav className='deep-purple lighten-2'>
            <div className='nav-wrapper'>
                <a
                    href='#'
                    className='brand-logo deep-purple-text text-lighten-5'
                >
                    Movies DB
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/Esde4th/react-movies-project'>
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
