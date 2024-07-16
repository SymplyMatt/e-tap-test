import { ReactNode } from "react";

export interface Project {
    name: string;
    description: string;
    logoUrl: string;
    projectState: string;
    id: number;
    organizationId: number;
    noOfParticipants: number;
    startDate: Date;
    endDate: Date;
    dateCreated: Date;
}

export interface ProjectItemProps {
    project: Project;
    search: string;
}
export interface inputs{
    name: string,
    description: string,
    logoUrl: string,
    noOfParticipants: number | null,
    startDate: Date | null,
    endDate: Date | null
}

export interface CoverPhotoComponentProps {
    step: number;
    setStep: Function;
    updateValue: Function;
    inputValues: inputs;
}

export interface DashboardLayoutProps {
    children?: [ReactNode, ReactNode, ReactNode?];
    background?: String;
}

export interface State {
    name: string;
    length: number
  }
export interface ProjectStatesComponentProps {
states?: State[];
}