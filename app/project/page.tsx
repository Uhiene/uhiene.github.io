import React from 'react';
import projects from '../components/Project/project';
import articles from '../components/Project/article';
import videos from '../components/Project/videos';
import ProjectCard from '../components/Project/ProjectCard';
import Layout from '../components/Layout/Layout';
import ArticleCard from '../components/Project/ArticleCard';
import VideoCard from '../components/Project/YoutubeCard';

const Project = () => {
    return (
        <Layout>
            <div className='p-5 md:p-10 '>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold text-pink-500 mb-4 md:mb-6'>Works</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>

                <div className='my-16 lg:my-20'>
                    <h1 className='text-2xl md:text-3xl font-bold text-pink-500 mb-4 md:mb-6'>Articles</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {articles.map((article, index) => (
                            <ArticleCard key={index} article={article} />
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl md:text-3xl font-bold text-pink-500 mb-4 md:mb-6'>Youtube Videos</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {videos.map((video, index) => (
                            <VideoCard key={index} video={video} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Project;
