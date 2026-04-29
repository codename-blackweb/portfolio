const defaultArchitectureSteps = [
  {
    label: 'Input',
    title: 'Signal intake',
    description:
      'Market, audience, performance, content, and operational inputs are organized into a clear system model.',
  },
  {
    label: 'Processing',
    title: 'Workflow structure',
    description:
      'Inputs are shaped into planning flows, interface patterns, content systems, or dashboard logic.',
  },
  {
    label: 'Intelligence',
    title: 'Decision layer',
    description:
      'The system surfaces context, priority, and next-step clarity through narrative, visualization, or automation.',
  },
  {
    label: 'Output',
    title: 'Execution surface',
    description:
      'The final experience gives teams, readers, or operators a usable product surface for action.',
  },
];

const defaultCapabilities = [
  {
    label: 'Strategy Layer',
    title: 'Positioning architecture',
    description:
      'Defines the system purpose, audience, message hierarchy, and operational role.',
  },
  {
    label: 'Workflow Layer',
    title: 'Structured experience flow',
    description:
      'Organizes information and interaction patterns into a coherent product journey.',
  },
  {
    label: 'Intelligence Layer',
    title: 'Signal interpretation',
    description:
      'Turns scattered inputs into clearer context, visibility, and decision support.',
  },
  {
    label: 'Execution Layer',
    title: 'Live digital delivery',
    description:
      'Ships the concept as a polished, navigable, browser-based product surface.',
  },
];

function createProject({
  slug,
  legacySlugs,
  title,
  category,
  positioning,
  headline,
  subheadline,
  description,
  problem,
  solution,
  architectureSteps = defaultArchitectureSteps,
  capabilities = defaultCapabilities,
  impact,
  bullets,
  liveUrl,
  previewUrl,
  relatedAssets,
  relatedAssetsTitle,
  relatedAssetsIntro,
  filterGroup,
}) {
  return {
    slug,
    legacySlugs,
    title,
    category,
    filterGroup,
    positioning,
    headline: headline || positioning,
    subheadline:
      subheadline ||
      `${title} translates strategy, content, and operational signals into a polished digital system built for clarity and action.`,
    description,
    problem:
      problem ||
      'Teams and audiences need clearer ways to understand complex information, evaluate priorities, and move from fragmented inputs to confident decisions.',
    solution:
      solution ||
      `${title} packages strategy, information architecture, and interaction design into a focused digital experience that makes the system easier to understand, use, and act on.`,
    architectureSteps,
    capabilities,
    impact:
      impact || [
        'Improved visibility across complex information.',
        'Created a more repeatable execution workflow.',
        'Connected strategy to a usable digital output.',
        'Reduced friction between insight and action.',
      ],
    bullets:
      bullets || [
        'Cinematic product-style interface',
        'Live interactive preview',
        'Structured narrative and system architecture',
        'Responsive, browser-based execution',
      ],
    liveUrl,
    previewUrl,
    link: liveUrl,
    relatedAssets,
    relatedAssetsTitle,
    relatedAssetsIntro,
    screenshotPlaceholder: `${title} product preview`,
    images: ['/placeholder.png'],
  };
}

export const projects = [
  createProject({
    slug: 'overture-os',
    title: 'Overture OS',
    category: 'Marketing Operating System',
    filterGroup: 'Systems',
    positioning: 'A revenue system for coordinating growth operations.',
    headline: 'Marketing infrastructure built for signal, speed, and scale.',
    subheadline:
      'Overture OS connects channel activity, performance visibility, and execution workflows into one operating layer for growth teams.',
    description: 'A marketing operating system built for high-growth businesses.',
    problem:
      'Growth teams often run strategy, reporting, experiments, and execution across disconnected tools. That makes it harder to see what is working, where revenue is leaking, and which actions should happen next.',
    solution:
      'Overture OS structures marketing operations around connected inputs, real-time visibility, and repeatable decision workflows so teams can move from scattered activity to coordinated revenue execution.',
    bullets: [
      'Connected channel activity and performance visibility',
      'Automated execution workflows for growth teams',
      'Real-time dashboard and reporting logic',
      'Centralized growth experiment tracking',
    ],
    liveUrl: 'https://overture-os.netlify.app/',
    previewUrl: 'https://overture-os.netlify.app/',
  }),
  createProject({
    slug: 'signalforge',
    title: 'SignalForge',
    category: 'Intelligence Platform',
    filterGroup: 'Intelligence',
    positioning: 'An AI-powered signal platform for decision-ready insight.',
    headline: 'Signal intelligence built to move teams from noise to action.',
    subheadline:
      'SignalForge detects, organizes, and surfaces actionable signals so operators can respond faster and with more context.',
    description: 'An AI-powered signal platform delivering actionable insights.',
    problem:
      'Teams have more data than direction. Important signals get buried across dashboards, APIs, alerts, and manual review cycles, delaying decisions that should happen in real time.',
    solution:
      'SignalForge creates a signal layer that detects meaningful changes, organizes them around business context, and turns them into workflows teams can act on.',
    bullets: [
      'Real-time signal detection and alerting',
      'Customizable signal parameters and thresholds',
      'Rich visualization dashboards',
      'API integration for automated workflows',
    ],
    liveUrl: 'https://thesignalforge.app/',
    previewUrl: 'https://thesignalforge.app/',
  }),
  createProject({
    slug: 'the-new-rules-of-search',
    title: 'The New Rules of Search',
    category: 'Editorial Experience & AI Search Strategy',
    filterGroup: 'Editorial',
    positioning:
      'A cinematic editorial field guide built to explain how SEO, AI search, answer engines, entity authority, and multi-platform visibility now shape modern discovery.',
    description:
      'An editorial strategy experience explaining the shift from traditional SEO to AI search and answer-engine discovery.',
    liveUrl: 'https://v0-new-rules-of-search.vercel.app/',
    previewUrl: 'https://v0-new-rules-of-search.vercel.app/',
  }),
  createProject({
    slug: 'axiome',
    title: 'Axiome',
    category: 'Spatial Intelligence & Data Visualization',
    filterGroup: 'Intelligence',
    positioning:
      'A 3D spatial intelligence dashboard for exploring market, performance, and risk signals through interactive visual layers.',
    description:
      'A spatial intelligence dashboard concept for exploring market and risk signals through layered 3D visualization.',
    liveUrl: 'https://axiome-v01.netlify.app/',
    previewUrl: 'https://axiome-v01.netlify.app/',
    relatedAssetsTitle: 'Product Walkthrough',
    relatedAssetsIntro:
      'Axiome includes an interactive walkthrough that explains the concept, interface, and value of the spatial intelligence system.',
    relatedAssets: [
      {
        title: 'Axiome Explainer Video',
        description:
          'Interactive walkthrough showing the concept, interface, and value of the Axiome spatial intelligence system.',
        liveUrl:
          'https://app.supademo.com/demo/cmmuk2hfu2mw0f3u95etcfl5m?utm_source=link',
        previewUrl:
          'https://app.supademo.com/demo/cmmuk2hfu2mw0f3u95etcfl5m?utm_source=link',
      },
    ],
  }),
  createProject({
    slug: 'rcg-executive-dashboard',
    title: 'RCG Executive Dashboard',
    category: 'Executive Intelligence & Data Narrative',
    filterGroup: 'Intelligence',
    positioning:
      'A branded executive dashboard built to translate recruitment, sentiment, and shareholder signals into leadership-ready intelligence.',
    description:
      'An executive intelligence dashboard designed to turn recruitment, sentiment, and shareholder signals into leadership-ready visibility.',
    liveUrl: 'https://rcg-executive-suite.netlify.app/',
    previewUrl: 'https://rcg-executive-suite.netlify.app/',
  }),
  createProject({
    slug: 'sp-content-system',
    title: 'SP Content System',
    category: 'Content Operations Platform',
    filterGroup: 'Systems',
    positioning:
      'A scalable content engine for planning, publishing, and optimization.',
    headline:
      'A content system designed to turn strategy into structured output.',
    description:
      'A content management framework optimized for scale and personalization.',
    bullets: [
      'Streamlined content creation workflows',
      'Dynamic personalization based on user behavior',
      'Analytics-driven content optimization',
      'Seamless integration with multiple platforms',
    ],
    liveUrl: 'https://sp-content-system.netlify.app/',
    previewUrl: 'https://sp-content-system.netlify.app/',
  }),
  createProject({
    slug: 'mdvip-2024-national-meeting-campaign-system',
    legacySlugs: ['mdvip-content-calendar'],
    title: 'MDVIP 2024 National Meeting Campaign System',
    category: 'Event Marketing & Campaign Operations',
    filterGroup: 'Campaigns',
    positioning: 'A Multi-Asset Event Marketing System',
    headline:
      'A strategic campaign operations system built to coordinate editorial planning, event programming, social content, and branded digital assets for the MDVIP 2024 National Meeting.',
    subheadline:
      'A connected campaign operations layer for editorial planning, event programming, post-event reporting, branded digital presentation, and social content execution.',
    description:
      'A multi-asset campaign system spanning editorial planning, event programming, post-event reporting, branded digital presentation, and social content execution for the MDVIP 2024 National Meeting.',
    problem:
      'Large event campaigns lose momentum when planning, programming, reporting, social execution, and branded proof assets live in disconnected documents and one-off deliverables.',
    solution:
      'The MDVIP 2024 National Meeting Campaign System connects planning, event programming, social content, post-event reporting, and branded digital presentation into one coordinated campaign asset ecosystem.',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Campaign plans and event inputs',
        description:
          'Event priorities, programming needs, social requirements, reporting inputs, and presentation assets enter a coordinated campaign structure.',
      },
      {
        label: 'Processing',
        title: 'Asset orchestration',
        description:
          'Campaign assets move through planning, ownership, review, publishing readiness, and event-support workflows.',
      },
      {
        label: 'Intelligence',
        title: 'Campaign visibility',
        description:
          'Structured views help teams understand asset coverage, timing, channel readiness, and post-event storytelling opportunities.',
      },
      {
        label: 'Output',
        title: 'Coordinated campaign delivery',
        description:
          'Teams can execute across event programming, social content, reporting, and branded digital proof with clearer timing and responsibilities.',
      },
    ],
    impact: [
      'Reduced event campaign coordination friction.',
      'Improved visibility across planning, programming, social execution, and branded digital assets.',
      'Created repeatable workflows for coordinated event marketing delivery.',
      'Connected planning decisions to campaign-ready output.',
    ],
    bullets: [
      'Multi-asset event campaign planning system',
      'Digital program, reporting, and branded proof assets',
      'Social content execution for the National Meeting',
      'Coordinated workflows across campaign operations',
    ],
    liveUrl:
      'https://drive.google.com/file/d/1s8QHOLZpUFPR-0ihgUSCmcyQtk38yP8F/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1s8QHOLZpUFPR-0ihgUSCmcyQtk38yP8F/preview',
    relatedAssetsTitle: 'Campaign Asset Ecosystem',
    relatedAssetsIntro:
      'This project extended beyond a static editorial calendar. It became a connected campaign asset system spanning planning, event programming, social content, and branded digital presentation.',
    relatedAssets: [
      {
        title: 'Ezra Blackwood Marketing',
        description:
          'A branded marketing portfolio and campaign-facing proof asset.',
        previewUrl: 'https://ezrablackwoodmarketing.vercel.app/',
        liveUrl: 'https://ezrablackwoodmarketing.vercel.app/',
      },
      {
        title: 'MDVIP 2024 Event Program Book',
        description:
          'A digital event program experience built for the MDVIP 2024 National Meeting.',
        previewUrl: 'https://mdvip-2024-event-program-book.vercel.app/',
        liveUrl: 'https://mdvip-2024-event-program-book.vercel.app/',
      },
      {
        title: 'MDVIP 2024 National Meeting Social Posts',
        description:
          'A social content execution asset supporting the MDVIP 2024 National Meeting campaign.',
        previewUrl:
          'https://mdvip-2024-national-meeting-social-posts.vercel.app/',
        liveUrl: 'https://mdvip-2024-national-meeting-social-posts.vercel.app/',
      },
    ],
  }),
  createProject({
    slug: 'xsolla-developer-hub',
    title: 'Xsolla Developer Hub',
    category: 'Developer Experience & Content Architecture',
    filterGroup: 'Developer Experience',
    positioning:
      'A developer-facing content hub designed to organize technical resources, improve discoverability, and support product education.',
    description:
      'A developer experience hub structured around technical resource discovery and product education.',
    liveUrl: 'https://xsolla-developer-hub.netlify.app/',
    previewUrl: 'https://xsolla-developer-hub.netlify.app/',
  }),
  createProject({
    slug: 'campaignops-ai',
    title: 'CampaignOps.ai',
    category: 'Campaign Operations & AI Workflow',
    filterGroup: 'Campaigns',
    positioning:
      'An AI-enabled campaign operations concept built to streamline planning, execution, and optimization across marketing workflows.',
    description:
      'An AI campaign operations concept for planning, execution, and optimization workflows.',
    liveUrl: 'https://campaignoppsai.netlify.app/',
    previewUrl: 'https://campaignoppsai.netlify.app/',
  }),
  createProject({
    slug: 'the-human-mask-is-slipping',
    title: 'The Human Mask Is Slipping',
    category: 'Editorial Experience & Interactive Essay',
    filterGroup: 'Editorial',
    positioning:
      'A cinematic digital editorial experience built around a sharp narrative concept, immersive pacing, and high-impact visual storytelling.',
    description:
      'A cinematic interactive essay experience built around immersive pacing and narrative visual storytelling.',
    liveUrl: 'https://v0-the-human-mask-is-slipping.vercel.app/',
    previewUrl: 'https://v0-the-human-mask-is-slipping.vercel.app/',
  }),
];

export const strategicAssets = [
  {
    title: 'Strategic Asset 01',
    category: 'Presentation / Supporting Work',
    liveUrl:
      'https://drive.google.com/file/d/1XOrhIYqu6eH42-CUV5WGaA9tB_2MAjH6/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1XOrhIYqu6eH42-CUV5WGaA9tB_2MAjH6/preview',
  },
  {
    title: 'Strategic Asset 02',
    category: 'Presentation / Supporting Work',
    liveUrl:
      'https://drive.google.com/file/d/1YEHlts6BO-49bWTR-IT1tShn7w1s-D8z/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1YEHlts6BO-49bWTR-IT1tShn7w1s-D8z/preview',
  },
  {
    title: 'Strategic Asset 03',
    category: 'Presentation / Supporting Work',
    liveUrl:
      'https://drive.google.com/file/d/12C0MEdYyu7GVUDzO34h56iV5FUS3_5KZ/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/12C0MEdYyu7GVUDzO34h56iV5FUS3_5KZ/preview',
  },
  {
    title: 'Strategic Asset 04',
    category: 'Presentation / Supporting Work',
    liveUrl:
      'https://drive.google.com/file/d/1zU3kqZqprQv4OCI8qp_9wuBvC9L71pQ6/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1zU3kqZqprQv4OCI8qp_9wuBvC9L71pQ6/preview',
  },
  {
    title: 'Strategic Asset 05',
    category: 'Presentation / Supporting Work',
    liveUrl:
      'https://drive.google.com/file/d/1UnliUBI_XaKaMFPnqo1wfxW13Xtoi9qI/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1UnliUBI_XaKaMFPnqo1wfxW13Xtoi9qI/preview',
  },
  {
    title: 'Strategic Asset 06',
    category: 'Presentation / Supporting Work',
    liveUrl:
      'https://drive.google.com/file/d/1a3OjeC-LJRe4qjbHArLE5g607z2sAJQz/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1a3OjeC-LJRe4qjbHArLE5g607z2sAJQz/preview',
  },
  {
    title: 'Strategic Asset 07',
    category: 'Presentation / Supporting Work',
    liveUrl:
      'https://drive.google.com/file/d/1Ymkj-l_ZYR1dMAtWYxFaKnLIgyNGibHw/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1Ymkj-l_ZYR1dMAtWYxFaKnLIgyNGibHw/preview',
  },
];
