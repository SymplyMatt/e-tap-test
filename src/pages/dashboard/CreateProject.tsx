import Dashboard from './Dashboard'
import ProjectDetails from '../../components/dashboard/projects/create/ProjectDetails'
import { useState } from 'react'
import Steps from '../../components/dashboard/projects/create/Steps';
import CoverPhoto from '../../components/dashboard/projects/create/CoverPhoto';
import Publish from '../../components/dashboard/projects/create/Publish';
import Overlay from '../../components/dashboard/projects/create/Overlay';
export interface inputs{
    name: string,
    description: string,
    logoUrl: string,
    noOfParticipants: number,
    startDate: string,
    endDate: string
}
const CreateProject = () => {
    const [step, setStep] = useState<number>(1);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const [inputValues, setInputValues] = useState<inputs>({
        "name": "",
        "description": "",
        "logoUrl": "",
        "noOfParticipants": 0,
        "startDate": "",
        "endDate": ""
    });
    const updateValue = (key : keyof inputs, value : string) => {
        setInputValues({...inputValues, [key]: value});
    }
    return (
        <Dashboard>
            <Steps step={step} setStep={setStep}/>
            <>
                {step === 1 && <ProjectDetails step={step} setStep={setStep} inputValues={inputValues} updateValue={updateValue}/>}
                {step === 2 && <CoverPhoto step={step} setStep={setStep} inputValues={inputValues} updateValue={updateValue}/>}
                {step === 3 && <Publish step={step} setStep={setStep} setShowOverlay={setShowOverlay} inputValues={inputValues} updateValue={updateValue}/>}
            </>
            {showOverlay && <Overlay setShowOverlay={setShowOverlay}/>}
        </Dashboard>
    )
}

export default CreateProject