import React from 'react';
import projects from '../components/Project/project';
import articles from '../components/Project/article';
import videos from '../components/Project/videos';
import ProjectCard from '../components/Project/ProjectCard';
import Layout from '../components/Layout/Layout';
import ArticleCard from '../components/Project/ArticleCard';
import VideoCard from '../components/Project/YoutubeCard';

const MyProjects = () => {
    return (
        <Layout>
            <div className='p-10 lg:p-20'>
                <div>
                    <h1 className='text-3xl font-bold text-pink-500 mb-6'>Works</h1>
                    <div className="flex flex-wrap justify-between gap-10 lg:gap-0">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>

                <div className='my-40'>
                    <h1 className='text-3xl font-bold text-pink-500 mb-6'>Articles</h1>
                    <div className="flex flex-wrap justify-between gap-10 lg:gap-0">
                        {articles.map((article, index) => (
                            <ArticleCard key={index} article={article} />
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-bold text-pink-500 mb-6'>Youtube Videos</h1>
                    <div className="flex flex-wrap justify-between lg:justify-start gap-8">
                        {videos.map((video, index) => (
                            <VideoCard key={index} video={video} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MyProjects;
