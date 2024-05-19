import Dashboard from './Dashboard'
import ProjectDetails from '../../components/dashboard/projects/create/ProjectDetails'
import { useContext, useState } from 'react'
import Steps from '../../components/dashboard/projects/create/Steps';
import CoverPhoto from '../../components/dashboard/projects/create/CoverPhoto';
import Publish from '../../components/dashboard/projects/create/Publish';
import Overlay from '../../components/dashboard/projects/create/Overlay';
import makeRequest from '../../services/request';
import { Context } from '../../context/DashboardContext';
export interface inputs{
    name: string,
    description: string,
    logoUrl: string,
    noOfParticipants: number | null,
    startDate: Date | null,
    endDate: Date | null
}
const CreateProject = () => {
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
            console.log('res: ', res);
        } catch (error) {
            
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