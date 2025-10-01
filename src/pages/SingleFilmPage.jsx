import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout, Loader } from '../components';

function SingleFilmPage() {
    const [item, setItem] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();

    // removed getFilms and placed the fetch inside the useEffect: 
    // its professional and common practice to define the data-fetching logic directly inside the useEffect,
    // especially when the logic is only used in that effect. This keeps the code concise and localized.
    useEffect(() => {
        fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
            .then(response => response.json())
            .then(result => {
                setItem(result);
                setIsLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching film:', error);
                setIsLoaded(true);
            });
    }, [id]);

    if(!isLoaded) {
        return (
            <MainLayout className="text-center">
                <Loader size={40} />
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img 
                        classNme="img-fluid"
                        src={`${item.image}`} 
                        alt={`${item.title} Poster`} 
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <h1>{item.title}</h1>
                    <p>
                        Directed by {item.director}. Produced by {item.producer}.
                    </p>
                    <p>
                        The film was released in <strong>{item.release_date}</strong> and gernered
                        a <strong>{item.rt_score}</strong> aggregate score on{" "}
                        <a
                            href="https://www.rottentomatoes.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Rotten Tomatoes
                        </a>
                        .
                    </p>
                    <h2>Description</h2>
                    <p>{item.description}</p>
                </div>
                <pre></pre>
            </div>
        </MainLayout>
    );
}

export default SingleFilmPage;