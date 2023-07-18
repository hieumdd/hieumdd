import { IconType } from 'react-icons';
import { FaChartLine, FaCode, FaFingerprint, FaCog } from 'react-icons/fa';

export type Expertise = {
    title: string;
    description: string;
    icon: IconType;
    tools: string[];
};

export const useExpertises = (): Expertise[] => [
    {
        title: 'Data Engineering',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo a velit ac malesuada. Morbi euismod urna eu urna euismod tincidunt.',
        icon: FaCode,
        tools: ['Google Cloud Platform', 'Python', 'TypeScript', 'Docker', 'Github Action'],
    },
    {
        title: 'Data Analytics & Visualisation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo a velit ac malesuada. Morbi euismod urna eu urna euismod tincidunt.',
        icon: FaChartLine,
        tools: ['BigQuery', 'SQL', 'Data Studio', 'Power BI', 'Custom Visualisation'],
    },
    {
        title: 'Digital Tracking & Analytics',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo a velit ac malesuada. Morbi euismod urna eu urna euismod tincidunt.',
        icon: FaFingerprint,
        tools: ['Google Tag Manager', 'Google Analytics'],
    },
    {
        title: 'Integration & Automation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo a velit ac malesuada. Morbi euismod urna eu urna euismod tincidunt.',
        icon: FaCog,
        tools: ['NetSuite SuiteScript', 'AppScript'],
    },
];
