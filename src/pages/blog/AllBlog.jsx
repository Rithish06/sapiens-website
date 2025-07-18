import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AllBlog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = import.meta.env.VITE_API_URL;
    console.log(API_URL)

    // useEffect(() => {
    //     axios.get(`${API_URL}/wp/v2/posts?_embed&per_page=100`)
    //         .then((response) => {
    //             setPosts(response.data);
    //             setLoading(false);
    //             console.log(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching WordPress posts:', error);
    //             setLoading(false);
    //         });
    // }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${API_URL}?/wp/v2/posts?_embed&per_page=100`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching WordPress posts:', error);
                setError('Failed to load posts');
            } finally {
                setLoading(false);
            }
        };
    
        fetchPosts();
    }, []);
    

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
            </div>
        );
    }

    const truncateHTML = (html, wordCount) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const textContent = tempDiv.textContent || tempDiv.innerText || '';
        const words = textContent.trim().split(/\s+/);

        if (words.length <= wordCount) return html;

        const truncatedWords = words.slice(0, wordCount);
        const truncatedText = truncatedWords.join(' ') + '...';

        return truncatedText;
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className='pt-60 px-5 lg:px-25'>

            <Helmet>
                <title>Health Blog | Hand & Eye Care Insights by Sapiens Clinic</title>
                <meta name = "description" content='Explore expert blogs on hand surgery & eye care. Get tips from top specialists at Sapiens Clinic in Bangalore.' />
                <meta name = "keywords" content='hand surgery blog Bangalore, eye care blog India, orthopedic tips South India, oculoplasty articles Bangalore, Sapiens Clinic blog, health insights Bangalore, expert medical blog Karnataka, hand surgeon advice India, eye health articles Bangalore' />
            </Helmet>

            <div className='text-center font-para text-[30px] lg:text-[56px] font-[700] leading-[60px] bg-orange-gradient'>The Blogs</div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-x-3 gap-y-5'>
                {posts.map((post) => (
                    <Link key={post.id} to={`/hand-eye-care-blog-bangalore/${post.slug}`} className='w-full'>
                        <div className='flex gap-5 lg:gap-20 items-center px-5 py-3 w-full min-h-[200px]'>
                            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                                <div className='w-[30%]'>
                                    <img
                                        src={post._embedded['wp:featuredmedia'][0].source_url}
                                        alt="Featured"
                                        className='w-[224px] h-[145px] object-cover'
                                    />
                                </div>
                            )}

                            <div className='w-[70%]'>
                                <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} className='font-rubik text-[20px] font-[700]' />
                                <div dangerouslySetInnerHTML={{ __html: truncateHTML(post.excerpt.rendered, 30) }} className='mt-4' />
                                <div className='mt-2 text-[#4D4D4D] text-[10px] lg:text-[14px] font-[400] font-rc'>
                                    {formatDate(post.date)}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllBlog;
