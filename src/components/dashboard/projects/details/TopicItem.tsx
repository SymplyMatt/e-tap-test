import { useNavigate } from 'react-router-dom';
import project_line from '../../../../assets/images/project_line.svg';
import utils, { img } from '../../../../utils/utils';
import { ProjectItemProps } from '../../../../utils/interfaces';

const TopicItem: React.FC<ProjectItemProps> = ({ project, index }) => {
    const navigate = useNavigate();
    const biologyTopics = [
        {
            topic: "Cell Biology",
            description: "The study of the structure and function of cells, the basic units of life, including processes like cell division and metabolism."
        },
        {
            topic: "Genetics",
            description: "The study of genes, heredity, and genetic variation in organisms, exploring how traits are passed from one generation to the next."
        },
        {
            topic: "Evolution",
            description: "Examines the process by which different species of organisms develop and diversify over time through natural selection and genetic drift."
        },
        {
            topic: "Ecology",
            description: "Focuses on interactions between organisms and their environment, studying ecosystems, biodiversity, and conservation efforts."
        },
        {
            topic: "Human Anatomy",
            description: "The study of the structure of the human body, including its organs, tissues, and systems such as the circulatory, nervous, and skeletal systems."
        },
        {
            topic: "Plant Biology",
            description: "The study of plant life, including growth, reproduction, and adaptation, as well as the role plants play in ecosystems."
        },
        {
            topic: "Microbiology",
            description: "The study of microscopic organisms, such as bacteria, viruses, fungi, and protozoa, and their roles in health, disease, and the environment."
        },
        {
            topic: "Biotechnology",
            description: "A field that involves the manipulation of living organisms and biological systems to develop technologies and products for various applications."
        },
        {
            topic: "Molecular Biology",
            description: "Explores the molecular mechanisms within cells, particularly focusing on DNA, RNA, proteins, and how these molecules control cellular processes."
        },
        {
            topic: "Immunology",
            description: "The study of the immune system and how it protects the body from pathogens, including research on vaccines, autoimmune diseases, and allergies."
        },
        {
            topic: "Neuroscience",
            description: "Focuses on the nervous system, including brain function, neural networks, and how signals are transmitted in the body."
        },
        {
            topic: "Zoology",
            description: "The study of animals, including their physiology, behavior, evolution, and classification."
        },
        {
            topic: "Developmental Biology",
            description: "Examines how organisms grow and develop, from a single cell to a fully formed organism, focusing on processes like cell differentiation and morphogenesis."
        }
    ];        

    return (
        <div className={`bg-white flex flex-col py-20 gap-20 rounded-12`}>
            <div className="flex grid-cols-2 gap-20 items-end">
                <img src={img} alt="" className="w-[180px] h-[180px] rounded-50 object-cover" />
                <div className="flex gap-30 justify-between align-center h-full w-full">
                    <div className="flex flex-col gap-10 h-full justify-between">
                        <div className="flex items-center text-24 font-semibold bg-activeBg text-activeText text-[10px] justify-center h-[25px] w-fit-content p-[6px] rounded-5">
                            Completed
                        </div>
                        <div className="flex items-center text-24 font-semibold">
                            {utils.capitalizeEachWord(biologyTopics[index].topic)}
                        </div>
                        <div className="flex gap-10 h-full">
                            <div className="h-full">
                                <img src={project_line} alt="" className="h-full" />
                            </div>
                            <div className="flex flex-col gap-10 h-full justify-between text-recruitBlue font-semibold">
                                <div>Progress</div>
                                <div>Complete</div>
                            </div>
                            <div className="flex flex-col gap-10 h-full justify-between whitespace-nowrap ml-20">
                                <div className="whitespace-nowrap">
                                    26%, 1hr, 03min
                                </div>
                                <div className="whitespace-nowrap">
                                    100%, 3hr, 30min
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center text-14 text-recruitBlue gap-10">
                            {biologyTopics[index].description}
                        </div>
                    </div>
                    <div className="flex gap-20 items-center">
                        <div
                            className="flex items-center justify-center w-[180px] border-[1.4px] border-recruitBlue p-5 h-[40px] rounded-8 gap-10 cursor-pointer"
                            onClick={() => navigate(`/topics/${project.id}`, { state: { project } })}
                        >
                            Start Lesson <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicItem;
