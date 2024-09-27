import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import utils from "../../utils/utils";
import { ProjectStatesComponentProps } from "../../utils/interfaces";

const LessonStates: React.FC<ProjectStatesComponentProps> = ({states=[]}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const stateParam : string = useMemo(() => queryParams.get('state') ?? '', [queryParams.get('state') ?? '']);
  const addQueryParam = (state : string) => {
    const params = new URLSearchParams(location.search);
    params.set('state', state);
    navigate({
        pathname: location.pathname,
        search: `?${params.toString()}`
    });
  };
useEffect(()=>{
  if(!stateParam){
    addQueryParam('All');
  }
},[stateParam]);
  return (
    <div className="flex flex gap-40 border-b border-borderGray w-full">
      {states.map((state, i)=>(
        <div className={`py-10  w-fit-content flex items-center gap-10 cursor-pointer ${stateParam === state.name ? 'border-b-2  border-recruitBlue' : 'text-lightBlack'}`} key={i} onClick={()=> addQueryParam(state.name)}>{utils.camelCaseToFirstLast(utils.camelCaseToNormal(state.name))} <span className={`h-full text-[10px] py-[3px] px-[4px] rounded-5 flex items-center justify-center ${stateParam === state.name ? 'bg-recruitBlue text-white' : 'text-lightBlack font-semibold'}`}>{state.length}</span></div>
      ))}
    </div>
  )
}

export default LessonStates