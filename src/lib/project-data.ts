import { projectsData as existingProjects } from '@/lib/data';

export type ProjectCategory =
  | 'Web apps'
  | 'Commerce'
  | 'Community'
  | 'Client sites';
export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: readonly string[];
  image?: string;
  color: string;
  preview?: string;
  github?: string;
  status:
    | 'Live site'
    | 'Live demo'
    | 'Sign-in required'
    | 'Source project'
    | 'Website';
  notes: string;
  featured?: boolean;
};

export const newProjects: PortfolioProject[] = [
  {
    id: 'ilearnation',
    title: 'iLearnNation',
    description:
      'A learning studio that brings GitHub-first courses, runnable checkpoints, and learner progress into one place.',
    category: 'Web apps',
    technologies: ['Next.js', 'Auth.js', 'Neon', 'JavaScript'],
    color: '#6054bc',
    image: '/images/projects/ilearnation.webp',
    preview: 'https://ilearnation.vercel.app',
    github: 'https://github.com/proffesergio/ilearnation',
    status: 'Live site',
    featured: true,
    notes:
      'The public learning site is deployed. Saved progress requires sign-in. Course ideas and unwritten inventories are distinct from authored, playable lessons.',
  },
  {
    id: 'campus-flow',
    title: 'CampusFlow',
    description:
      'A bilingual school management platform built around the everyday work of schools, teachers, and administrators.',
    category: 'Web apps',
    technologies: ['Next.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL'],
    color: '#305e9f',
    image: '/images/projects/campus-flow.webp',
    preview: 'https://campus-flow-nu.vercel.app',
    github: 'https://github.com/proffesergio/campus-flow',
    status: 'Sign-in required',
    notes:
      'The deployed CampusFlow sign-in page is publicly accessible. School dashboards and authenticated backend workflows require an account and were not independently tested for this showcase.',
  },
  {
    id: 'churi-canvas',
    title: 'ChuriCanvas',
    description:
      'A mobile-first handmade bangle shop, bringing local craft to a colorful storefront with order and admin tools.',
    category: 'Commerce',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Neon'],
    color: '#ad426c',
    image: '/images/projects/churi-canvas.webp',
    preview: 'https://churicanvas.vercel.app',
    github: 'https://github.com/proffesergio/churi-canvas',
    status: 'Live demo',
    notes:
      'A deployed commerce MVP. Wallet payments and social integrations are simulated. The storefront is live; this showcase does not imply verified payment processing.',
  },
  {
    id: 'mapvibe',
    title: 'MapVibe',
    description:
      'Turn places in Bangladesh into personal map posters, with Bangla typography and an interactive creative workspace.',
    category: 'Web apps',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Neon'],
    color: '#267c78',
    image: '/images/projects/mapvibe.webp',
    preview: 'https://mapvibe-nine.vercel.app',
    github: 'https://github.com/proffesergio/mapvibe',
    status: 'Live site',
    notes:
      'The public application is deployed. Map creation and image export are documented in the repository; download flows were not independently exercised for this showcase.',
  },
  {
    id: 'bechakena',
    title: 'BechaKena',
    description:
      'A bilingual point-of-sale experience for retail and restaurants, designed around fast sales and offline use.',
    category: 'Commerce',
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Drift / SQLite'],
    color: '#30736b',
    image: '/images/projects/bechakena.webp',
    preview: 'https://bkpos.vercel.app',
    github: 'https://github.com/proffesergio/bechakena',
    status: 'Live demo',
    notes:
      'The live showcase links to a browser-playable POS demo. Demo data stays on your device. Cloud sync is future work, and hardware integrations are not represented by the browser demo.',
  },
  {
    id: 'chandramonians',
    title: 'Chandramonians',
    description:
      'An alumni community connecting people through a school directory, shared updates, and study resources.',
    category: 'Community',
    technologies: ['Django', 'PostgreSQL', 'HTMX', 'Alpine.js'],
    color: '#5165ad',
    image: '/images/projects/chandramonians.webp',
    preview: 'https://www.chandramonians.com',
    github: 'https://github.com/proffesergio/chandramonians-web',
    status: 'Live site',
    notes:
      'The community website is deployed. The repository identifies the job board as a placeholder and mentorship submissions as not yet persisted.',
  },
  {
    id: 'launch-pilot',
    title: 'LaunchPilot',
    description:
      'A bilingual freelance career coach that helps people find a direction and plan their next step.',
    category: 'Web apps',
    technologies: ['Next.js', 'TypeScript', 'Drizzle', 'Neon'],
    color: '#7952bd',
    image: '/images/projects/launch-pilot.webp',
    preview: 'https://launch-pilot-mu.vercel.app',
    github: 'https://github.com/proffesergio/launch-pilot',
    status: 'Live site',
    notes:
      'The public landing page is deployed. Account and coaching workflows were not independently exercised for this showcase.',
  },
  {
    id: 'nextshop',
    title: 'NextShop / FreeStyleBD',
    description:
      'A reusable ecommerce platform with a deployed FreeStyleBD storefront and a modular commerce foundation.',
    category: 'Commerce',
    technologies: ['Next.js', 'Drizzle', 'Neon', 'Turborepo'],
    color: '#925b39',
    image: '/images/projects/nextshop.webp',
    preview: 'https://nextshop-storefront-umber.vercel.app',
    github: 'https://github.com/proffesergio/nextshop',
    status: 'Live demo',
    notes:
      'The FreeStyleBD storefront is deployed. Payment provider integrations still require gateway work; live checkout has not been verified.',
  },
  {
    id: 'daktarbari',
    title: 'Daktarbari',
    description:
      'A Bangla-first doctor directory with clear browsing and large touch targets for an approachable experience.',
    category: 'Web apps',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    color: '#297f7b',
    image: '/images/projects/daktarbari.webp',
    preview: 'https://daktarbari.vercel.app',
    github: 'https://github.com/proffesergio/daktarbari',
    status: 'Live site',
    notes:
      'The public directory is deployed. Some search and reminder features are planned. Directory information is informational and needs ongoing verification.',
  },
  {
    id: 'near-doc',
    title: 'NearDoc',
    description:
      'A bilingual doctor discovery interface for Dhaka, exploring symptom-based navigation and voice input.',
    category: 'Web apps',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Web Speech API'],
    color: '#367d80',
    image: '/images/projects/near-doc.webp',
    preview: 'https://near-doc.vercel.app',
    github: 'https://github.com/proffesergio/near-doc',
    status: 'Live site',
    notes:
      'The public application is deployed. Matching and voice workflows were not independently tested. This is an informational discovery tool, not a medical diagnosis service.',
  },
  {
    id: 'facehook',
    title: 'Facehook',
    description:
      'A social interface experiment exploring familiar feeds, account screens, and an admin testing environment.',
    category: 'Community',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    color: '#4169b0',
    image: '/images/projects/facehook.webp',
    preview: 'https://facehook-five.vercel.app',
    github: 'https://github.com/proffesergio/facehook',
    status: 'Live demo',
    notes:
      'A Facebook-style UI clone and testing sandbox, not a production social network. The deployed login page is visible; account workflows were not tested.',
  },
  {
    id: 'omniscale',
    title: 'OmniScale',
    description:
      'An agency website bringing service discovery, an ROI calculator, audit intake, and first-party booking together.',
    category: 'Web apps',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    color: '#6c48a6',
    github: 'https://github.com/proffesergio/omniscale',
    status: 'Source project',
    notes:
      'The repository describes a code-complete MVP with staging and backend configuration in progress. A public production URL has not been verified.',
  },
];

const existingTitles = [
  'BornoLab',
  'EarnLoop',
  'PotakaIT',
  'Comfort Seat BD',
  'Atharnur Travels',
  'Tanvir Visuals',
  'Momentus Field Services',
  'ExoSight IT',
  'Pet Colony',
];
const existingCategories: ProjectCategory[] = [
  'Web apps',
  'Web apps',
  'Commerce',
  'Commerce',
  'Client sites',
  'Client sites',
  'Client sites',
  'Client sites',
  'Community',
];
const existingColors = [
  '#8158b4',
  '#446c9a',
  '#565496',
  '#94724c',
  '#326e8a',
  '#6450ac',
  '#3d7293',
  '#6452a1',
  '#7d614c',
];

const retainedProjects: PortfolioProject[] = existingProjects.map(
  (project, index) => ({
    id: existingTitles[index].toLowerCase().replaceAll(' ', '-'),
    title: existingTitles[index],
    description: project.description,
    category: existingCategories[index],
    technologies: project.technologies,
    image: project.image,
    color: existingColors[index],
    preview: project.links.preview,
    github:
      /^https:\/\/github.com\/proffesergio\/[^/]+/.test(project.links.github) &&
      index !== 5
        ? project.links.github.replace(/\.git$/, '')
        : undefined,
    status: 'Website',
    notes:
      'An existing portfolio project. The screenshot and project information are retained from the original showcase. External site content and availability may change.',
  })
);

export const portfolioProjects: PortfolioProject[] = [
  newProjects[0],
  newProjects[1],
  retainedProjects[0],
  newProjects[2],
  newProjects[3],
  newProjects[4],
  retainedProjects[1],
  ...newProjects.slice(5),
  ...retainedProjects.slice(2),
];
