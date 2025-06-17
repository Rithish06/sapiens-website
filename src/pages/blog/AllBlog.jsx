import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllBlog = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://blog.sapiensclinic.com/wp-json/wp/v2/posts?_embed')
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error fetching WordPress posts:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading posts...</p>;

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

    function formatDate(isoString) {
        const date = new Date(isoString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className='pt-60 px-5 lg:px-25'>
            <div className='text-center font-para text-[30px] lg:text-[56px] font-[700] leading-[60px] bg-orange-gradient'>The Blogs</div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-x-3 gap-y-5'>
                {posts.map((post) => (
                    <Link to={`/blog/${post.slug}`} className='w-full'>
                        <div key={post.id} className='flex gap-5 lg:gap-20 items-center px-5 py-3 w-full lg:w-full min-h-[200px]'>
                            {/* Featured Image */}
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
                                {/* Title */}
                                <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} className='font-rubik text-[20px] font-[700]' />

                                {/* Excerpt */}
                                <div dangerouslySetInnerHTML={{ __html: truncateHTML(post.excerpt.rendered, 30) }} className='mt-4' />

                                {/* date */}
                                <div className='mt-2 text-[#4D4D4D] text-[10px] lg:text-[14px] font-[400] font-rc'>{formatDate(post.date)}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AllBlog


