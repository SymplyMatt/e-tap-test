import Dashboard from './Dashboard'
import ProjectDetails from '../../components/dashboard/projects/ProjectDetails'
import { useState } from 'react'
import Steps from '../../components/dashboard/projects/Steps';
const CreateProject = () => {
    const [step, setStep] = useState<number>(1);
    return (
        <Dashboard>
            <Steps step={step} setStep={setStep}/>
            {step === 1 && <ProjectDetails step={step} setStep={setStep}/>}
        </Dashboard>
    )
}

export default CreateProject