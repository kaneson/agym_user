import React, { useEffect } from "react";

import Video from "./Video";

import { VideoProps } from "./Content";

import { motion } from "framer-motion";

interface VideosProps {
  videos: VideoProps[];
  filter?: string;
  search?: string;
}

const ContentVideos: React.FC<VideosProps> = ({ videos, filter = "", search = "" }) => {

  useEffect(() => {
    console.log(videos,"videos");
  },[videos]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="py-4 px-6"> 
      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="container grid justify-center gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 flex-wrap bg-transparent"
      >
        {(
          videos.map(({ 
            description, 
            bestThumbnail, 
            title, 
            url, 
            views, 
            author, 
            id,
            duration,
            badges,
            isLive,
            isUpcoming,
            thumbnails,
            type,
            upcoming,
            uploadedAt 
        }, idx) => 
          title.includes(search) && title.includes(filter)  
          && (
            <motion.div
              key={idx} 
              className="item" 
              variants={item}
            >
              <Video 
                key={idx}
                duration={duration}
                id={id}
                badges={badges}
                isLive={isLive}
                isUpcoming={isUpcoming}
                thumbnails={thumbnails}
                type={type}
                upcoming={upcoming}
                uploadedAt={uploadedAt}
                description={description}
                bestThumbnail={bestThumbnail}
                title={title}
                url={url}
                views={views}
                author={author} 
                subscribers={""} 
                verified={true}
              />
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  )
}

export default ContentVideos;