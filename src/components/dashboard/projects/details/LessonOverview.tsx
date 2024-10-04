import { useContext, useEffect, useRef, useState } from 'react';
import { Topic } from '../../../../utils/interfaces';
import { useLocation } from 'react-router-dom';
import makeRequest from '../../../../services/axios';
import utils from '../../../../utils/utils';
import { Context } from '../../../../context/DashboardContext';

interface Props {
  topic: Topic;
}

function LessonOverview({ topic }: Props) {
  const { userDetails } = useContext(Context);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const location = useLocation();
  const [lesson, setLesson] = useState<any>(null);
  const [hasLoadedProgress, setHasLoadedProgress] = useState(false);
  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (location.state?.lesson) {
      setLesson(location.state.lesson);
      setHasLoadedProgress(true);
    } 
  }, [location.state, topic.id]);
  async function createLesson() {
    try {
      const res: any = await makeRequest('POST', '/lessons/start', userDetails?.token, { topicId: topic.id });
      if (res.status === 200) {
        setLesson(res.data);
        setHasLoadedProgress(true);
        return res.data
      }
    } catch (error) {     
    }
  }

  async function updateProgress(progress: number) {
    let newLesson;
    const lessonData = lesson || location?.state?.lesson;
    if (!lessonData) {
      newLesson = await createLesson();
    };
    const data = { lessonId: lesson?.id || newLesson?.userLesson?.id, progress : Math.floor(progress) };
    if(!lesson?.id && !newLesson?.userLesson?.id) return
    const res: any = await makeRequest('POST', '/lessons/update-progress', userDetails?.token, data);
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

      return () => {
        videoElement.removeEventListener('seeked', handleSeek);
        videoElement.removeEventListener('ended', handleVideoEnd);
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
