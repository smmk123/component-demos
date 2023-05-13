import Link from 'next/link';
import React from 'react';

const BloombergArrayFilter = (props: any) => {
    const modules = props.data.modules;
    const nonEmptyStories = modules
    ?.map((module :any) => module.stories)
    .filter((stories:any) => stories.length > 0);

  const allStories = nonEmptyStories?.flat();

  const uniqueStories = allStories?.reduce((acc: any, story: any) => {
    if (!acc.find((s: any) => s.id === story.id)) {
      acc.push(story);
    }
    return acc;
  }, []);
  
    const limitedStories = uniqueStories?.slice(0, 10);
  
    return (
      <div>
        {modules && limitedStories?.map((story: any) => (
          <div className="m-2" key={story.id}>
            <h2 className="text-xl font-bold">{story.title}</h2>
            <p>{story.summary}</p>
            <p>Published: {new Date(story.published*1000).toLocaleDateString()}</p>
            <p>By: {story.byline}</p>
            <Link className="text-blue-500 text-sm"href={story.longURL}>Click for More.</Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default BloombergArrayFilter;