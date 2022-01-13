function Footer() {
    return (
        <footer className='page-footer deep-purple lighten-3 '>
            <div className='footer-copyright'>
                <div className='container deep-purple-text text-lighten-5'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='deep-purple-text text-lighten-5 right'
                        href='https://github.com/Esde4th/react-movies-project'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
