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
    index: number;
}
export interface SubjectItemProps {
    subject: Subject;
    index: number
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


export interface Topic{
    banner: string;
    createdAt: Date;
    createdBy: string;
    description: string;
    duration: number;
    id: string;
    name: string;
    subject: string;
    updatedAt: Date;
    video: string;
}
export interface Subject{
    id: string;
    name: string;
    createdBy: string;
    createdAt: Date;
    banner : string
    topics : Topic[]
}