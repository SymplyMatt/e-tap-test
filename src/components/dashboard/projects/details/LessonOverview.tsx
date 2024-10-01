import { useEffect, useRef, useState } from 'react';
import { Topic } from '../../../../utils/interfaces';
import { useLocation } from 'react-router-dom';
import makeRequest from '../../../../services/axios';
import utils from '../../../../utils/utils';

interface Props {
  topic: Topic;
}

function LessonOverview({ topic }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const location = useLocation();
  const [lesson, setLesson] = useState<any>(null);
  const [hasLoadedProgress, setHasLoadedProgress] = useState(false);
  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (location.state?.lesson) {
      setLesson(location.state.lesson);
    } else {
      async function createLesson() {
        const res: any = await makeRequest('POST', '/lessons/start', null, { topicId: topic.id });
        if (res.status === 200) {
          setLesson(res.data);
        } else {
          utils.createErrorNotification('Unable to start lesson', 1000);
        }
      }
      createLesson();
    }
    setHasLoadedProgress(true);
  }, [location.state, topic.id]);

  async function updateProgress(progress: number) {
    if (!lesson) return;
    const res: any = await makeRequest('POST', '/lessons/update-progress', null, { lessonId: lesson.id, progress : Math.floor(progress) });
    if (res.status !== 200) utils.createErrorNotification('Unable to update lesson progress', 1000);
  }


  useEffect(() => {
    if (!lesson || !hasLoadedProgress) return;
    const progress = lesson.progress === topic.duration ? 0 : lesson.progress || 0;
    if (videoRef.current) {
      videoRef.current.currentTime = progress;
    }
  }, [lesson, hasLoadedProgress, topic.duration]);


  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleSeek = () => {
        if (videoElement) {
          updateProgress(videoElement.currentTime);
        }
      };

      const handleVideoEnd = () => {
        if (videoElement) {
          updateProgress(videoElement.duration);
        }
      };

      const startProgressUpdates = () => {
        if (!updateIntervalRef.current) {
          updateIntervalRef.current = setInterval(() => {
            if (videoElement && !videoElement.paused && !videoElement.ended) {
              updateProgress(videoElement.currentTime);
            }
          }, 10000); 
        }
      };


      const stopProgressUpdates = () => {
        if (updateIntervalRef.current) {
          clearInterval(updateIntervalRef.current);
          updateIntervalRef.current = null;
        }
        if (videoElement) {
          updateProgress(videoElement.currentTime); 
        }
      };

      videoElement.addEventListener('seeked', handleSeek);
      videoElement.addEventListener('ended', handleVideoEnd);
      videoElement.addEventListener('play', startProgressUpdates);
      videoElement.addEventListener('pause', stopProgressUpdates);

      return () => {
        videoElement.removeEventListener('seeked', handleSeek);
        videoElement.removeEventListener('ended', handleVideoEnd);
        videoElement.removeEventListener('play', startProgressUpdates);
        videoElement.removeEventListener('pause', stopProgressUpdates);
        stopProgressUpdates(); 
      };
    }
  }, [lesson, topic.duration]);

  return (
    <div className="flex flex-col w-full gap-30">
      <div className="bg-white flex flex-col py-10 gap-40 w-full rounded-12">
        <div className="flex grid-cols-2 gap-20 items-center">
          <img src={topic.banner} alt="" className="w-[180px] h-[180px]" />
          <div className="flex flex-col gap-10 justify-end w-full">
            <div className="text-24 font-semibold">{topic.name}</div>
            <div className="text-14 text-[#555555]">{topic.description}</div>
            <div className=""></div>
          </div>
        </div>

        <div className="w-full">
          <video ref={videoRef} id="cloudinaryVideo" className="w-full h-auto" controls>
            <source src={topic.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default LessonOverview;
