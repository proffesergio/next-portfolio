import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Websites', hash: '#websites' },
  { name: 'Static Designs', hash: '#static-designs' },
  { name: 'Motion Graphics', hash: '#motion-graphics' },
  { name: 'Contact', hash: '#contact' },
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
    image: '/images/comfortseatbd.png',
    title: 'Furniture E-commerce Website',
    description: 'A full-stack e-commerce website created using Wordpress CMS',
    technologies: [
      'Wordpress CMS',
      'Elementor',
      'PHP',
      'HTML5',
      'CSS3',
      'MySQL',
    ],
    links: {
      preview: 'https://comfortseatbd.com',
      github: 'https://github.com/proffesergio',
      githubApi: 'https://github.com/proffesergio',
    },
  },
  {
    image: '/images/portfolio.png',
    title: 'Modern Creative Portfolio',
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
      preview: 'https://tanvirvisuals.com',
      github: 'https://github.com/proffesergio/next-portfolio',
      githubApi: 'https://github.com/proffesergio/next-portfolio',
    },
  },
  {
    image: '/images/momentusfs-web.png',
    title: 'Property Preservation Website',
    description:
      'A US-based property preservation website built with Wordpress CMS',
    technologies: ['Wordpress CMS', 'Elementor', 'HTML5', 'CSS3', 'PHP'],
    links: {
      preview: 'https://momentusfs.com',
      github: 'https://github.com/proffesergio',
      githubApi: 'https://github.com/proffesergio',
    },
  },
  {
    image: '/images/exosight-it.png',
    title: 'ITES Service Provider Website',
    description:
      'ExoSight IT Limited is recognized for its expertise ranging from project management to technical support developed using Wordpress CMS, Elementor, HTML5 and CSS3',
    technologies: ['PHP', 'HTML5', 'CSS3', 'Wordpress', 'Elementor'],
    links: {
      preview: 'https://exosightit.com',
      github: 'https://github.com/proffesergio/',
      githubApi: 'https://github.com/proffesergio/',
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

export const motionGraphicsData = [
  {
    title: 'Motion Reel 1',
    description: 'Dynamic brand animation with kinetic typography.',
    video: '/videos/motion-1.mp4',
    technologies: ['After Effects', 'Premiere Pro'],
    links: { preview: '#' },
    category: 'Logo Animation',
  },
  {
    title: 'Motion Reel 2',
    description: 'Product showcase with particle effects.',
    video: '/videos/motion-2.mp4',
    technologies: ['After Effects', 'Illustrator'],
    links: { preview: '#' },
    category: 'Marketing',
  },
  {
    title: 'Motion Reel 3',
    description: 'Social media motion graphics package.',
    video: '/videos/motion-3.mp4',
    technologies: ['After Effects', 'Premiere Pro'],
    links: { preview: '#' },
    category: 'Social Ads',
  },
  {
    title: 'Motion Reel 4',
    description: 'Explainer animation with character motion.',
    video: '/videos/motion-4.mp4',
    technologies: ['After Effects'],
    links: { preview: '#' },
    category: 'Marketing',
  },
  {
    title: 'Motion Reel 5',
    description: 'Event promo reel with animated overlays.',
    video: '/videos/motion-5.mp4',
    technologies: ['Premiere Pro', 'After Effects'],
    links: { preview: '#' },
    category: 'Reels/Shorts',
  },
  {
    title: 'Motion Reel 6',
    description: 'Abstract visual loop for digital display.',
    video: '/videos/motion-6.mp4',
    technologies: ['After Effects'],
    links: { preview: '#' },
    category: 'Reels/Shorts',
  },
] as const;

export const graphicDesignsData = [
  {
    title: 'CanvasIT Brand Identity – Envelope Design',
    description: 'Corporate brand identity with envelope stationary.',
    image: '/images/graphic-static/canvasit-envelope.png',
    category: 'Branding',
  },
  {
    title: 'CanvasIT Brand Identity – Business Card Design',
    description: 'Extended brand collateral with Business Card.',
    image: '/images/graphic-static/visiting-cards/canvas-card-mockup.jpg',
    category: 'Visiting Cards',
  },
  {
    title: 'CanvasIT Brand Identity – Money Receipt Design',
    description:
      'Brand guidelines and application examples across print media.',
    image: '/images/graphic-static/money-receipt_canvasIT.jpg',
    category: 'Branding',
  },
  {
    title: 'KBSH Business Card Design',
    description: 'Professional business card design for KBSH company.',
    image: '/images/graphic-static/visiting-cards/kbsh-cardmock-1.jpg',
    category: 'Visiting Cards',
  },
  {
    title: 'KBSH Business Card Design-2',
    description: 'Professional business card design for KBSH company.',
    image: '/images/graphic-static/visiting-cards/kbsh-cardmock-2.jpg',
    category: 'Visiting Cards',
  },
  {
    title: 'KBSH Business Card Design-3',
    description: 'Professional business card design for KBSH company.',
    image: '/images/graphic-static/visiting-cards/kbsh-cardmock-3.jpg',
    category: 'Visiting Cards',
  },
  {
    title: 'Italy Visa Ad Design',
    description:
      'Print and digital marketing material for Italy abroad campaign.',
    image: '/images/graphic-static/italy-visa.jpg',
    category: 'Print/Digital Ads',
  },
  {
    title: 'Portugal Visa Document Design',
    description: 'Document layout and typographic design for visa application.',
    image: '/images/graphic-static/portugal-visa.jpg',
    category: 'Print/Digital Ads',
  },
  {
    title: 'Saudi Visa Ad Design',
    description: 'Document layout and typographic design for visa application.',
    image: '/images/graphic-static/saudi-visa.jpg',
    category: 'Print/Digital Ads',
  },
  {
    title: 'Saudi Visa Ad Design-2',
    description: 'Document layout and typographic design for visa application.',
    image: '/images/graphic-static/saudipost.jpg',
    category: 'Print/Digital Ads',
  },
  {
    title: 'Fabrything Logo Mockup Design',
    description: 'Mockup of a logo design for a ecommerce company.',
    image: '/images/graphic-static/logos/fabrything-logo.jpg',
    category: 'Logo Design',
  },
  {
    title: 'KBSH Logo Mockup Design',
    description: 'Mockup of a logo design for a buying & sourcing company.',
    image: '/images/graphic-static/logos/kbsh-logo-gold.jpg',
    category: 'Logo Design',
  },
  {
    title: 'Premium Cricket Jersey Mockup Design',
    description: 'Mockup of a jersey design for a cricket team.',
    image: '/images/graphic-static/t-shirt/jersey/cricket-jersey-1.png',
    category: 'T-Shirt Design',
  },
  {
    title: 'Premium Football Jersey Mockup Design',
    description: 'Mockup of a jersey design for a football team.',
    image: '/images/graphic-static/t-shirt/jersey/football-jersey-1.png',
    category: 'T-Shirt Design',
  },
  {
    title: 'Premium T-Shirt Mockup Design-1',
    description: 'Mockup of a T-Shirt design for a clothing company',
    image: '/images/graphic-static/t-shirt/Fabrithing2.jpg',
    category: 'T-Shirt Design',
  },
  {
    title: 'Premium T-Shirt Mockup Design-2',
    description: 'Mockup of a T-Shirt design for a clothing company',
    image: '/images/graphic-static/t-shirt/Fabrithing3.jpg',
    category: 'T-Shirt Design',
  },
  {
    title: 'Premium T-Shirt Mockup Design-3',
    description: 'Mockup of a T-Shirt design for a clothing company',
    image: '/images/graphic-static/t-shirt/Fabrithing4.jpg',
    category: 'T-Shirt Design',
  },
  {
    title: 'Premium T-Shirt Mockup Design-4',
    description: 'Mockup of a T-Shirt design for a clothing company',
    image: '/images/graphic-static/t-shirt/Fabrithing5.jpg',
    category: 'T-Shirt Design',
  },
  {
    title: 'Premium T-Shirt Mockup Design-5',
    description: 'Mockup of a T-Shirt design for a clothing company',
    image: '/images/graphic-static/t-shirt/Fabrithing6.jpg',
    category: 'T-Shirt Design',
  },
  {
    title: 'Premium T-Shirt Mockup Design-6',
    description: 'Mockup of a T-Shirt design for a clothing company',
    image: '/images/graphic-static/t-shirt/male-tshirt.jpg',
    category: 'T-Shirt Design',
  },
  {
    title: 'Premium T-Shirt Mockup Design-7',
    description: 'Mockup of a T-Shirt design for the Parliament of Bangladesh.',
    image: '/images/graphic-static/t-shirt/parliament-polo.jpg',
    category: 'T-Shirt Design',
  },
] as const;
