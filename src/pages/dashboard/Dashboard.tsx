    import { ReactNode } from "react";
    import Sidebar from "../../components/dashboard/Sidebar"
    import TopMain from "../../components/dashboard/TopMain"
    interface DashboardLayoutProps {
        children?: [ReactNode, ReactNode, ReactNode?];
        background?: String;
    }
    const Dashboard: React.FC<DashboardLayoutProps> = ({children = [<></>, <></>, <></>], background='dashboardColor'}) => {
        const [header, content, overlay] = children;
    return (
        <div className="grid grid-cols-10 w-screen h-screen relative">
            <Sidebar />
            <div className={`h-screen bg-${background} col-span-8 relative overflow-hidden`}>
                <div className="flex flex-col justify-between">
                    <TopMain />
                    {header}
                </div>
                {content}
            </div>
            { overlay && <div className={`absolute h-screen w-screen bg-blackLight flex justify-center items-center`}>
                {overlay}
            </div>}
        </div>
    )
    }

    export default Dashboard