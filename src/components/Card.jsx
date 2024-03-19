import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ result }) {
        return (
                <div>
                        <Link href={`/movie/${result.id}`}>
                                <Image
                                        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path ||
                                         result.poster_path}`}
                                        width={500}
                                        height={300}
                                        className='sm:rounded-t-lg 
                                group-hover:opacity-75
                                transition-opacity duration-300'
                                        alt=""
                                >
                                </Image>
                                <div className="">
                                        <p className="line-clamp-2 text-md">{result.overview}</p>
                                </div>

                        </Link>
                </div>
        );
}
