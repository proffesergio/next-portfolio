import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/potakawebss.png',
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce website built with OpenCart3 CMS',
    technologies: ['OpenCart3 CMS', 'PHP', 'HTML5', 'CSS3', 'MySQL'],
    links: {
      preview: 'https://potakait.com',
      github: 'https://github.com/proffesergio',
      githubApi: 'https://github.com/proffesergio',
    },
  },
  {
    image: '/images/findmonsters.png',
    title: 'Finding Monsters Game',
    description:
      'Find Monsters is a simple card presentation page developed using React, HTML5 and CSS3 with Live Search Functionality',
    technologies: ['React', 'HTML5', 'CSS3', 'Tailwind'],
    links: {
      preview: 'https://proffesergio.github.io/react-find-monsters/',
      github: 'https://github.com/proffesergio/react-find-monsters',
      githubApi: 'https://github.com/proffesergio/react-find-monsters',
    },
  },
  {
    image: '/images/petcolony.png',
    title: 'Adoptable Pets Colony',
    description: 'Find the most amazing list of adoptable pets around you.',
    technologies: ['Javascript', 'HTML5', 'CSS3', 'Tailwind'],
    links: {
      preview: 'https://proffesergio.github.io/pet-colony',
      github: 'https://github.com/proffesergio/pet-colony',
      githubApi: 'https://github.com/proffesergio/backend-pets',
    },
  },
  {
    image: '/images/portfolio.png',
    title: 'Modern Portfolio Site',
    description:
      'Fully responsible modern portfolio site with the latest technologies like Next JS, Tailwind CSS, and Framer Motion',
    technologies: [
      'Next JS',
      'Framer Motion',
      'HTML5',
      'Tailwind CSS',
      'React',
    ],
    links: {
      preview: 'https://proffesergio.github.io/portfolio',
      github: 'https://github.com/proffesergio/portfolio',
      githubApi: 'https://github.com/proffesergio/portfolio',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Web developer Intern',
    company: 'Geeksntechnology Ltd.',
    description:
      'During this internship, I focused on two key areas: creating backend APIs and managing frontend website content using PHP, Laravel',
    period: '2019',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
  },
  {
    title: 'Junior Developer & Graphic Designer',
    company: 'New Universal Computer BD',
    description:
      'As a developer & designer, I specialized in graphic design using Adobe Illustrator, Photoshop and website development using OpenCart3 CMS. I undertook an ecommerce project independently, from design conceptualization to final implementation, ensuring company satisfaction.',
    period: '2020 - 2021',
    technologies: ['PHP', 'OpenCart3 CMS', 'Illustrator', 'Photoshop'],
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'PotakaIT Ltd.',
    description: (
      <>
        At PotakaIT, I worked with the frontend, backend, and Graphics design
        elements to build{' '}
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'm-0 h-fit p-0 text-base'
          )}
          href="https://potakait.com"
          target="_blank"
        >
          potakait.com
        </Link>{' '}
        — an ecommerce platform for selling computer parts. I’m responsible for
        developing and maintaining the frontend, backend, as well as designing
        UI/UX to ensure a clear and intuitive user experience. During my
        developer position at PotakaIT, I collaborated with the CEO to build the
        digital footprint of the business from the ground. Focusing on various
        tasks like ecommerce website development, graphic design, and strategic
        planning. This experience provided valuable insights into teamwork and
        advanced my proficiency in Full-Stack Development,
      </>
    ),
    period: '2021 - 2022',
    technologies: [
      'PHP',
      'OpenCart3 CMS',
      'Javascript',
      'CSS3',
      'HTML5',
      'Photoshop',
      'Illustrator',
    ],
  },
  {
    title: 'Publication Assistant (UDA)',
    company: 'Bangladesh Institute of Development Studies (BIDS)',
    description:
      'Research Paper Formatting and Editing, Assisting in Publication Processes, Collaborating with Authors and Editors, Managing Publication Timelines, Ensuring Quality Control, Utilizing Design Software, Coordinating with Printing Services, Maintaining Publication DOI Records.',
    period: '2022 - present',
    technologies: [
      'Illustrator',
      'Photoshop',
      'MS Word',
      'Database Management',
      'DOI Metadata',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;

// Skills
export const skillsData2 = [
  {
    name: 'Python',
    level: 60,
    icon: '/skills/py.webp',
  },
  {
    name: 'HTML5',
    level: 90,
    icon: '/skills/html5.png',
  },
  {
    name: 'CSS3',
    level: 85,
    icon: '/skills/css3.png',
  },
  {
    name: 'JavaScript',
    level: 80,
    icon: '/skills/javascript.png',
  },
  {
    name: 'React JS',
    level: 75,
    icon: '/skills/react.png',
  },
  {
    name: 'Node JS',
    level: 65,
    icon: '/skills/nodejs.png',
  },
  {
    name: 'Next JS',
    level: 90,
    icon: '/skills/nexticon.png',
  },
  {
    name: 'PHP',
    level: 80,
    icon: '/skills/php.png',
  },
  {
    name: 'MongoDB',
    level: 60,
    icon: '/skills/mongodb.png',
  },
  {
    name: 'Github',
    level: 85,
    icon: '/skills/github.png',
  },
  {
    name: 'VS Code',
    level: 90,
    icon: '/skills/vscode.png',
  },
  {
    name: 'Framer Motion',
    level: 90,
    icon: '/skills/framermotion.png',
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    icon: '/skills/tailwind.png',
  },
  {
    name: 'TypeScript',
    level: 90,
    icon: '/skills/typescript.png',
  },
  {
    name: 'Figma',
    level: 90,
    icon: '/skills/figma.png',
  },
  {
    name: 'Photoshop',
    level: 95,
    icon: '/skills/photoshop.png',
  },
  {
    name: 'Illustrator',
    level: 90,
    icon: '/skills/illustrator.png',
  },
  {
    name: 'Premiere Pro',
    level: 90,
    icon: '/skills/premierepro.png',
  },
  {
    name: 'After Effects',
    level: 90,
    icon: '/skills/ae.png',
  },
  {
    name: 'MS Office',
    level: 90,
    icon: '/skills/msoffice.png',
  },
  {
    name: 'Wordpress',
    level: 80,
    icon: '/skills/wordpress.png',
  },
] as const;
