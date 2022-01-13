import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (str, type = 'all') => {
        setLoading(true);
        if (str !== '')
            fetch(
                `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
                    type !== 'all' ? `&type=${type}` : ''
                }`
            )
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data.Search);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
    };

    useEffect(() => {
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=spider-man`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            <Search searchMovies={searchMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
}
