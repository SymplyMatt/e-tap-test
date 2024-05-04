    import { ReactNode } from "react";
    import Sidebar from "../../components/dashboard/Sidebar"
    import TopMain from "../../components/dashboard/TopMain"
    interface DashboardLayoutProps {
        children?: [ReactNode, ReactNode];
    }
    const Dashboard: React.FC<DashboardLayoutProps> = ({children = [<></>, <></>]}) => {
        const [header, content] = children;
    return (
        <div className="grid grid-cols-10 w-screen h-screen">
            <Sidebar />
            <div className="h-screen bg-dashboardColor col-span-8 relative overflow-hidden">
                <div className="flex flex-col justify-between">
                    <TopMain />
                    {header}
                </div>
                {content}
            </div>
        </div>
    )
    }

    export default Dashboard