import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet';

const SingleBlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;

    console.log(API_URL);

    // useEffect(() => {
    //     if (!slug) return;

    //     console.log("Fetching blog post for slug:", slug);
    //     axios
    //         .get(`${API_URL}?/wp/v2/posts?slug=${slug}&_embed`)
    //         .then((response) => {
    //             if (response.data.length > 0) {
    //                 setPost(response.data[0]);
    //             } else {
    //                 setError('Post not found');
    //             }
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             setError('Error fetching post');
    //             setLoading(false);
    //             console.error(err);
    //         });
    // }, [slug]);
    useEffect(() => {
        if (!slug) return;
    
        console.log("Fetching blog post for slug:", slug);
    
        const fetchPost = async () => {
            try {
                const response = await fetch(`${API_URL}?/wp/v2/posts?slug=${slug}&_embed`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const data = await response.json();
    
                if (data.length > 0) {
                    setPost(data[0]);
                } else {
                    setError('Post not found');
                }
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Error fetching post');
            } finally {
                setLoading(false);
            }
        };
    
        fetchPost();
    }, [slug]);
    

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold text-red-500">{error || 'Something went wrong'}</h1>
                <Link to="hand-eye-care-blog-bangalore" className="mt-4 inline-block text-teal-600 hover:underline">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-55 sm:px-6 lg:px-8">

            <Helmet>
                <title>Health Blog | Hand & Eye Care Insights by Sapiens Clinic</title>
                <meta name = "description" content='Explore expert blogs on hand surgery & eye care. Get tips from top specialists at Sapiens Clinic in Bangalore.' />
                <meta name = "keywords" content='hand surgery blog Bangalore, eye care blog India, orthopedic tips South India, oculoplasty articles Bangalore, Sapiens Clinic blog, health insights Bangalore, expert medical blog Karnataka, hand surgeon advice India, eye health articles Bangalore' />
            </Helmet>

            <div className="max-w-5xl mx-auto">
                {/* Back button */}
                <Link
                    to="hand-eye-care-blog-bangalore"
                    className="inline-flex items-center bg-orange-gradient hover:text-orange-400 mb-8 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Blog
                </Link>

                {/* Featured Image */}
                {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={post._embedded['wp:featuredmedia'][0].source_url}
                            alt={post.title?.rendered || 'Blog Image'}
                            className="w-full h-auto max-h-96 object-cover"
                        />
                    </div>
                )}

                {/* Title and Date */}
                <div className="flex justify-between items-end">
                    {post.title?.rendered && (
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-orange-gradient mb-6"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                    )}

                    {post.date && (
                        <div className="flex items-center w-[250px] text-gray-500 mb-8">
                            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                {post.content?.rendered && (
                    <div className="prose max-w-none prose-lg">
                        <div
                            className="content-wrapper"
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingleBlogPost;
