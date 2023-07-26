import { IconType } from 'react-icons';
import { HiOutlineCode, HiOutlineCube, HiOutlineDatabase } from 'react-icons/hi';
import { IoFingerPrintOutline } from 'react-icons/io5';

export type Service = {
    title: string;
    description: string;
    icon: IconType;
    tools: string[];
};

export const useServices = (): Service[] => [
    {
        title: 'Data Engineering',
        description: `Creating a full lifecycle of data pipelines from sources integrations to analytics in BigQuery`,
        icon: HiOutlineCode,
        tools: ['Google Cloud Platform'],
    },
    {
        title: 'NetSuite Development',
        description: `Account Customizations & SuiteApps to fulfill any business requirements to fully exploit NetSuite's capabilities`,
        icon: HiOutlineCube,
        tools: ['SuiteScript', 'SuiteTalk'],
    },
    {
        title: 'Digital Tracking & Analytics',
        description: 'Events tracking for web & apps to ensure high-granular data to be used for further analysis',
        icon: IoFingerPrintOutline,
        tools: ['Google Tag Manager'],
    },
    {
        title: 'Integration & Automation',
        description: 'Full-stack development for every framework integrations & automations',
        icon: HiOutlineDatabase,
        tools: ['TypeScript', 'Python', 'Docker', 'Githib Actions'],
    },
];
