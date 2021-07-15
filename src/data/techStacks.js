import {AiOutlineConsoleSql, AiTwotoneApi} from 'react-icons/ai';
import {DiGoogleCloudPlatform} from 'react-icons/di'
import {FiGitMerge} from 'react-icons/fi';
import { FaCode, FaPython, FaJsSquare, FaShoppingCart, FaCloud, FaDatabase, FaGithub, FaDocker } from 'react-icons/fa';
import { SiGoogleads, SiGoogleanalytics, SiGoogletagmanager, SiShopify, SiStripe, SiMysql, SiMongodb, SiServerless } from 'react-icons/si';

const techStacks = [
  {
    name: 'Coding',
    icon: FaCode,
    techs: [
      {
        name: 'Python',
        icon: FaPython,
        textColor: 'white',
        bgColor: 'blue.600',
      },
      {
        name: 'JavaScript',
        icon: FaJsSquare,
        textColor: 'black',
        bgColor: 'yellow.300',
      },
      {
        name: 'SQL',
        icon: AiOutlineConsoleSql,
        textColor: 'white',
        bgColor: 'orange.500',
      },
    ],
  },
  {
    name: 'Digital Analytics',
    icon: FaShoppingCart,
    techs: [
      {
        name: 'Google Analytics',
        icon: SiGoogleanalytics,
        textColor: 'white',
        bgColor: 'orange.400',
      },
      {
        name: 'Tag Manager',
        icon: SiGoogletagmanager,
        textColor: 'white',
        bgColor: 'blue.300',
      },
      {
        name: 'Google Ads',
        icon: SiGoogleads,
        textColor: 'white',
        bgColor: 'red.500',
      },
      {
        name: 'Facebook Ads',
        icon: SiGoogleads,
        textColor: 'white',
        bgColor: 'blue.700',
      },
    ],
  },
  {
    name: 'eCommerce API',
    icon: AiTwotoneApi,
    techs: [
      {
        name: 'Shopify',
        icon: SiShopify,
        textColor: 'black',
        bgColor: 'green.300',
      },
      {
        name: 'Stripe',
        icon: SiStripe,
        textColor: 'white',
        bgColor: 'purple.500',
      }
    ],
  },
  {
    name: 'Cloud Platform',
    icon: FaCloud,
    techs: [
      {
        name: 'Google Cloud',
        icon: DiGoogleCloudPlatform,
        textColor: 'white',
        bgColor: 'blue.400',
      },
    ],
  },
  {
    name: 'Data Storage & Analytics',
    icon: FaDatabase,
    techs: [
      {
        name: 'Google BigQuery',
        icon: DiGoogleCloudPlatform,
        textColor: 'white',
        bgColor: 'blue.400',
      },
      {
        name: 'MySQL',
        icon: SiMysql,
        textColor: 'white',
        bgColor: 'blue.600',
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
        textColor: 'white',
        bgColor: 'green.500',
      },
    ],
  },
  {
    name: 'DevOps',
    icon: FiGitMerge,
    techs: [
      {
        name: 'Github',
        icon: FaGithub,
        textColor: 'white',
        bgColor: 'black',
      },
      {
        name: 'Serverless',
        icon: SiServerless,
        textColor: 'white',
        bgColor: 'red.400',
      },
      {
        name: 'Docker',
        icon: FaDocker,
        textColor: 'white',
        bgColor: 'blue.400',
      },
    ],
  },
];

export default techStacks;
