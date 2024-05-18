import registration_details from '../../../../assets/images/registration_details.svg';
import select_photo from '../../../../assets/images/select_photo.svg';
import utils from '../../../../utils/utils';
import { inputs } from '../../../../pages/dashboard/CreateProject';

interface ComponentProps {
    step: number;
    setStep: Function;
    updateValue: Function;
    inputValues: inputs;
}

const CoverPhoto: React.FC<ComponentProps> = ({ step, setStep,updateValue, inputValues }) => {

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const base64String = await utils.convertImageToBase64(file);
        updateValue('logoUrl', `data:image/jpeg;base64,${base64String}`);
      } catch (error) {
        console.error("Error converting image to base64:", error);
      }
    }
  };

  return (
    <div className="my-10 py-10 create-project flex flex-col w-full gap-10">
      <div className="flex flex-col items-center gap-50 mb-30">
        <div className="flex flex-col items-center">
          <div className="font-hiragino text-[32px] font-bold">Registration details</div>
          <div className="font-normal">Set the required details you want from each applicant</div>
        </div>
        <div className="flex items-center justify-center flex-col gap-5">
          <img src={inputValues.logoUrl ? inputValues.logoUrl : registration_details} alt="" className='h-[200px] rounded-8' />
          <div className="rounded-8 font-normal text-14 border border-borderGray py-5 px-10 flex gap-5 items-center justify-center cursor-pointer relative">
            <img src={select_photo} alt="" className='cursor-pointer' />
            Select cover image
            <input
              type="file"
              className='absolute h-full w-full top-0 opacity-0 cursor-pointer'
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
      <div className="px-20 flex w-full py-10 justify-between items-center border border-borderGray shadow">
        <div className="font-semibold text-recruitBlue cursor-pointer flex items-center gap-10" onClick={() => setStep(step - 1)}>
          <i className="fa-solid fa-arrow-left"></i>Go Back
        </div>
        <button className={`py-10 px-30 bg-recruitBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-16 flex gap-10 ${!(inputValues.logoUrl) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => setStep(step + 1)} disabled={!(inputValues.logoUrl)}>
          Continue <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="h-[50px] w-full bg-inherit"></div>
    </div>
  );
}

export default CoverPhoto;
