import Dashboard from './Dashboard'
import ProjectDetails from '../../components/dashboard/projects/create/ProjectDetails'
import { useContext, useState } from 'react'
import Steps from '../../components/dashboard/projects/create/Steps';
import CoverPhoto from '../../components/dashboard/projects/create/CoverPhoto';
import Publish from '../../components/dashboard/projects/create/Publish';
import Overlay from '../../components/dashboard/projects/create/Overlay';
import makeRequest from '../../services/request';
import { Context } from '../../context/DashboardContext';
import utils from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
export interface inputs{
    name: string,
    description: string,
    logoUrl: string,
    noOfParticipants: number | null,
    startDate: Date | null,
    endDate: Date | null
}
const CreateProject = () => {
    const navigate = useNavigate();
    const { user} = useContext(Context);
    const [step, setStep] = useState<number>(1);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [inputValues, setInputValues] = useState<inputs>({
        "name": "",
        "description": "",
        "logoUrl": "",
        "noOfParticipants": null,
        "startDate": null,
        "endDate": null
    });
    const updateValue = (key : keyof inputs, value : string) => {
        setInputValues({...inputValues, [key]: value});
    }
    const createProject = async ()=> {
        try {
            setLoading(true);
            const res = await makeRequest('POST', '/projects/create', user?.token, {...inputValues, organizationId : user?.organizationId, startDate : inputValues.startDate?.toISOString(), endDate : inputValues.endDate?.toISOString()});
            setLoading(false);
            if(res.type === 'success'){
                console.log('i was successful');
                utils.createSuccessNotification('Request successful!', 1000);
            }else{
                utils.createErrorNotification(res.data.message, 1000);
            }
        } catch (error) {
            utils.createErrorNotification("An error occured...", 1000);
            console.log(error);
        }finally{
            navigate('/projects', {replace : true});
        }
    }
    return (
        <Dashboard>
            <Steps step={step} setStep={setStep}/>
            <>
                {step === 1 && <ProjectDetails step={step} setStep={setStep} inputValues={inputValues} updateValue={updateValue}/>}
                {step === 2 && <CoverPhoto step={step} setStep={setStep} inputValues={inputValues} updateValue={updateValue}/>}
                {step === 3 && <Publish step={step} setStep={setStep} setShowOverlay={setShowOverlay} inputValues={inputValues} onSubmit={createProject} loading={loading}/>}
            </>
            {showOverlay && <Overlay setShowOverlay={setShowOverlay}/>}
        </Dashboard>
    )
}

export default CreateProject