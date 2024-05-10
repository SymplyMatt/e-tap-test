import Dashboard from './Dashboard'
import ProjectDetails from '../../components/dashboard/projects/ProjectDetails'
import { useState } from 'react'
import Steps from '../../components/dashboard/projects/Steps';
import RequiredFormFields from '../../components/dashboard/projects/RequiredFormFields';
import FormSettings from '../../components/dashboard/projects/FormSettings';
import Publish from '../../components/dashboard/projects/Publish';
import Input from '../../components/common/Input';
import barcode from '../../assets/images/barcode.svg'
const CreateProject = () => {
    const [step, setStep] = useState<number>(1);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    return (
        <Dashboard>
            <Steps step={step} setStep={setStep}/>
            <>
                {step === 1 && <ProjectDetails step={step} setStep={setStep}/>}
                {step === 2 && <RequiredFormFields step={step} setStep={setStep}/>}
                {step === 3 && <FormSettings step={step} setStep={setStep}/>}
                {step === 4 && <Publish step={step} setStep={setStep} setShowOverlay={setShowOverlay}/>}
            </>
            {showOverlay && <div className="bg-white flex flex-col p-30 shadow gap-20 w-[70%] rounded-12">
                <div className="flex grid-cols-2 gap-20 items-end">
                    <img src={barcode} alt="" className='w-[180px] h-[180px]'/>
                    <div className="flex flex-col gap-10 justify-end w-full">
                        <div className="text-24 font-semibold">Share Link</div>
                        <div className="text-14 text-[#555555]">Your form is now published and ready to be shared with your team members! Copy  this link to share your form on social media, messaging apps or via  email.</div>
                        <div className=""></div>
                        <div className="flex gap-10 items-center">
                            <Input value='https://brand.com/r/mDN5Qj'/>
                            <button className={`whitespace-nowrap py-10 px-30 bg-recruitBlue text-white h-[38px] flex items-center justify-center cursor-pointer rounded-12 flex gap-10`} onClick={()=> setShowOverlay(false)}><i className="fa-regular fa-copy"></i> Copy link</button>
                        </div>
                    </div>
                </div>
                <div className="flex grid-cols-2 gap-20 items-end">
                    <div className="flex items-center justify-center w-[180px] border border-borderGray p-5 h-[40px] rounded-8 gap-10 cursor-pointer"><i className="fa-regular fa-share-from-square"></i> Share barcode</div>
                    <div className=""></div>
                </div>
            </div>}
        </Dashboard>
    )
}

export default CreateProject