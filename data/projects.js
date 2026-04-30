const defaultArchitectureSteps = [
  {
    label: 'Input',
    title: 'Source inputs',
    description:
      'Market, audience, performance, content, and operational inputs are organized into a clear system model.',
  },
  {
    label: 'Processing',
    title: 'System routing',
    description:
      'Inputs are shaped into planning flows, interface patterns, content systems, or dashboard logic.',
  },
  {
    label: 'Intelligence',
    title: 'Interpretive model',
    description:
      'The system surfaces context, priority, and next-step clarity through narrative, visualization, or automation.',
  },
  {
    label: 'Output',
    title: 'Delivery interface',
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
  screenshotPlaceholder,
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
      `Context: ${title} operates in an environment where the audience needs a clearer way to interpret the underlying system. The Challenge: The experience must turn scattered inputs into a focused product narrative without adding operational or editorial friction.`,
    solution:
      solution ||
      `${title} packages strategy, information architecture, and interaction design into a focused digital experience that makes the system easier to understand, use, and act on.`,
    architectureSteps,
    capabilities,
    impact:
      impact || [
        `${title} improved visibility across its core information system.`,
        `${title} created a more repeatable path from strategy to execution.`,
        `${title} reduced friction between insight, interaction, and action.`,
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
    screenshotPlaceholder: screenshotPlaceholder || `${title} product preview`,
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
      'Context: Campaign planning and execution spread across disconnected tools with no unified system. The Challenge: Teams lacked a centralized way to plan, track, and execute campaigns across channels, creating bottlenecks and misalignment.',
    solution:
      'Overture OS structures marketing operations around connected inputs, real-time visibility, and repeatable decision workflows so teams can move from scattered activity to coordinated revenue execution.',
    screenshotPlaceholder: 'Overture OS campaign system',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Campaign inputs and content planning',
        description:
          'Campaign requirements, channel priorities, content ideas, and launch needs enter one coordinated planning system.',
      },
      {
        label: 'Processing',
        title: 'Workflow orchestration and scheduling',
        description:
          'Planning inputs are sequenced into campaign timelines, ownership paths, publishing windows, and execution workflows.',
      },
      {
        label: 'Intelligence',
        title: 'Performance tracking and optimization',
        description:
          'The system connects execution activity to performance signals so teams can adjust campaigns with clearer context.',
      },
      {
        label: 'Output',
        title: 'Cross-channel execution layer',
        description:
          'Operators get a unified surface for coordinating campaign delivery across content, channels, and reporting.',
      },
    ],
    impact: [
      'Centralized campaign planning, tracking, and publishing workflows.',
      'Improved cross-channel coordination and visibility.',
      'Reduced execution bottlenecks and improved operational consistency.',
    ],
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
      'Context: Operators were monitoring too many disconnected signals without a reliable way to separate noise from priority changes. The Challenge: Important market, workflow, and performance signals were buried across tools, delaying response and making decisions reactive.',
    solution:
      'SignalForge creates a signal layer that detects meaningful changes, organizes them around business context, and turns them into workflows teams can act on.',
    screenshotPlaceholder: 'SignalForge intelligence engine',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Search + market signal ingestion',
        description:
          'Search behavior, market movement, audience activity, and competitive signals enter the intelligence layer.',
      },
      {
        label: 'Processing',
        title: 'Signal extraction and clustering',
        description:
          'Raw signals are filtered, grouped, and organized around themes that reveal meaningful change.',
      },
      {
        label: 'Intelligence',
        title: 'Intent scoring and prioritization',
        description:
          'The engine ranks patterns by urgency, opportunity, and strategic relevance for operators.',
      },
      {
        label: 'Output',
        title: 'Actionable insight layer',
        description:
          'Teams receive focused intelligence that translates signal movement into decisions and next steps.',
      },
    ],
    impact: [
      'Improved visibility into high-priority signals.',
      'Reduced manual scanning and interpretation friction.',
      'Created repeatable workflows for intelligence review and response.',
    ],
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
    problem:
      'Context: Search behavior is shifting from ranked links to AI answers, entity recognition, and multi-platform discovery. The Challenge: Teams need a clear way to understand how SEO, answer engines, authority signals, and platform visibility now work together.',
    screenshotPlaceholder: 'AI search strategy field guide',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Search behavior and platform shifts',
        description:
          'SEO changes, answer-engine behavior, entity signals, and multi-platform discovery patterns shape the editorial foundation.',
      },
      {
        label: 'Processing',
        title: 'Editorial synthesis and section sequencing',
        description:
          'Complex search concepts are organized into a guided narrative that moves readers through the new discovery model.',
      },
      {
        label: 'Intelligence',
        title: 'Entity authority and answer-engine framing',
        description:
          'The experience clarifies how authority, structure, and machine-readable context influence modern visibility.',
      },
      {
        label: 'Output',
        title: 'Strategic discovery playbook',
        description:
          'Readers leave with a sharper framework for building visibility across SEO, AI search, and platform ecosystems.',
      },
    ],
    impact: [
      'Clarified the strategic shift from keyword SEO to answer-engine visibility.',
      'Framed AI search, entity authority, and multi-platform discovery in one narrative system.',
      'Created an editorial asset that turns a complex market change into usable strategy.',
    ],
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
    problem:
      'Context: Market, performance, and risk data often lives in flat dashboards that make spatial relationships hard to understand. The Challenge: Users needed a more dimensional way to explore layered signals without losing orientation or decision context.',
    screenshotPlaceholder: 'Axiome spatial intelligence dashboard',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Market, performance, and risk layers',
        description:
          'Multiple signal types enter the workspace as layered data inputs that can be explored spatially.',
      },
      {
        label: 'Processing',
        title: '3D spatial mapping and filtering',
        description:
          'The dashboard translates flat metrics into visual layers, spatial relationships, and interactive exploration paths.',
      },
      {
        label: 'Intelligence',
        title: 'Pattern recognition across visual signals',
        description:
          'Users can inspect relationships between market activity, performance movement, and risk indicators.',
      },
      {
        label: 'Output',
        title: 'Interactive intelligence workspace',
        description:
          'The result is a dimensional dashboard surface for exploring signals and orienting decisions.',
      },
    ],
    impact: [
      'Created a 3D exploration model for market, performance, and risk signals.',
      'Improved conceptual visibility across layered intelligence inputs.',
      'Packaged spatial analytics into a premium interactive dashboard experience.',
    ],
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
    problem:
      'Context: Leadership lacked clear visibility into how campaigns were performing and contributing to pipeline outcomes. The Challenge: Campaign data was siloed and difficult to interpret, making attribution unclear and slowing decision-making.',
    screenshotPlaceholder: 'Executive performance dashboard',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Campaign and engagement data streams',
        description:
          'Campaign activity, engagement signals, pipeline context, and performance data feed the executive view.',
      },
      {
        label: 'Processing',
        title: 'Data aggregation and normalization',
        description:
          'Disconnected reporting inputs are consolidated into a cleaner model for leadership review.',
      },
      {
        label: 'Intelligence',
        title: 'Attribution and performance analysis',
        description:
          'The dashboard connects campaign movement to attribution, sentiment, and business performance signals.',
      },
      {
        label: 'Output',
        title: 'Executive reporting interface',
        description:
          'Leadership gets a polished intelligence surface for faster review, alignment, and decision-making.',
      },
    ],
    impact: [
      'Increased attribution visibility +47% across campaign performance.',
      'Reduced reporting time -35% through consolidated dashboards.',
      'Enabled faster, data-driven decision-making.',
    ],
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
    problem:
      'Context: High-volume, multi-platform content execution with inconsistent workflows and missed deadlines. The Challenge: Content production and approvals were fragmented, leading to delays, inconsistent publishing, and limited visibility into execution.',
    screenshotPlaceholder: 'Content execution system',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Content requests and campaign briefs',
        description:
          'Content needs, campaign inputs, audience goals, and platform requirements enter a structured production queue.',
      },
      {
        label: 'Processing',
        title: 'Production and approval workflows',
        description:
          'Requests move through drafting, review, approval, scheduling, and publishing readiness with clearer ownership.',
      },
      {
        label: 'Intelligence',
        title: 'Publishing cadence and performance tracking',
        description:
          'The system tracks delivery rhythm and performance signals to support better planning decisions.',
      },
      {
        label: 'Output',
        title: 'Scheduled content delivery',
        description:
          'Teams get a repeatable execution surface for shipping content across platforms on a reliable cadence.',
      },
    ],
    impact: [
      'Reduced turnaround time -39% by streamlining production and approval workflows.',
      'Improved publishing consistency to 95%+ on-time delivery.',
      'Standardized workflows to reduce missed deadlines and execution friction.',
    ],
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
      'Context: Weekly content execution across multiple channels with high coordination demands. The Challenge: Content planning and execution lacked structure, leading to missed deadlines, inconsistent cadence, and reactive decision-making.',
    solution:
      'The MDVIP 2024 National Meeting Campaign System connects planning, event programming, social content, post-event reporting, and branded digital presentation into one coordinated campaign asset ecosystem.',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Channel requirements and content backlog',
        description:
          'Weekly channel needs, event priorities, content inventory, and campaign requests enter the planning system.',
      },
      {
        label: 'Processing',
        title: 'Weekly scheduling and coordination',
        description:
          'Content is organized into publishing windows, ownership assignments, event support needs, and approval paths.',
      },
      {
        label: 'Intelligence',
        title: 'Performance insights and optimization signals',
        description:
          'Performance patterns and cadence visibility help inform format decisions, timing, and future planning.',
      },
      {
        label: 'Output',
        title: 'Multi-platform content calendar',
        description:
          'Teams get a structured calendar for coordinated delivery across campaign, event, and social content surfaces.',
      },
    ],
    screenshotPlaceholder: 'Content planning system',
    impact: [
      'Maintained 3-4x weekly publishing cadence with 90%+ on-time delivery.',
      'Reduced missed deadlines -40% through structured workflows.',
      'Identified high-performing formats and improved content performance.',
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
    problem:
      'Context: Developer-facing resources needed to support education, discovery, and product understanding in one coherent destination. The Challenge: Technical content can become fragmented across docs, marketing pages, and product explainers, making it harder for developers to find the right path.',
    screenshotPlaceholder: 'Developer resource hub',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Technical resources and product education',
        description:
          'Docs, tutorials, product explainers, and developer learning needs feed the hub architecture.',
      },
      {
        label: 'Processing',
        title: 'Content architecture and taxonomy',
        description:
          'Technical material is organized into discoverable pathways, categories, and resource groupings.',
      },
      {
        label: 'Intelligence',
        title: 'Discoverability and learning path logic',
        description:
          'The experience guides developers toward relevant resources based on intent, product area, and education stage.',
      },
      {
        label: 'Output',
        title: 'Developer-facing knowledge hub',
        description:
          'Developers get a focused destination for understanding products, finding resources, and moving faster.',
      },
    ],
    impact: [
      'Improved organization of developer education and technical resources.',
      'Created a clearer entry point for product understanding and discovery.',
      'Reduced friction between technical content, navigation, and user intent.',
    ],
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
    problem:
      'Context: Campaign teams often plan, execute, and optimize across disconnected workflows while AI tools sit outside the operating process. The Challenge: The concept needed to show how AI could support campaign operations without becoming another isolated layer.',
    screenshotPlaceholder: 'AI campaign operations workspace',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Campaign goals and workflow inputs',
        description:
          'Campaign objectives, channel requirements, tasks, constraints, and optimization needs enter the workspace.',
      },
      {
        label: 'Processing',
        title: 'AI-assisted planning and task structuring',
        description:
          'The system organizes campaign work into recommended steps, production flows, and execution priorities.',
      },
      {
        label: 'Intelligence',
        title: 'Optimization prompts and execution signals',
        description:
          'AI-supported cues help operators identify planning gaps, improve decisions, and tune campaign activity.',
      },
      {
        label: 'Output',
        title: 'Campaign operations command layer',
        description:
          'Teams get a campaign workspace for coordinating planning, execution, and optimization in one flow.',
      },
    ],
    impact: [
      'Framed AI as an operational workflow layer for campaign planning and execution.',
      'Connected campaign strategy, optimization, and production into one product concept.',
      'Created a live prototype for communicating campaign operations automation.',
    ],
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
    problem:
      'Context: The editorial concept required a digital experience that could carry tension, pacing, and visual impact beyond a conventional article format. The Challenge: The narrative needed to feel cinematic and immersive while remaining readable, structured, and web-native.',
    screenshotPlaceholder: 'Cinematic editorial experience',
    architectureSteps: [
      {
        label: 'Input',
        title: 'Narrative thesis and visual motifs',
        description:
          'The central editorial idea, supporting argument, and visual language establish the experience direction.',
      },
      {
        label: 'Processing',
        title: 'Pacing, sections, and scroll sequencing',
        description:
          'The essay is structured into cinematic beats that control rhythm, progression, and reader attention.',
      },
      {
        label: 'Intelligence',
        title: 'Tension-building editorial cues',
        description:
          'Visual emphasis, copy hierarchy, and transitions reinforce the argument without sacrificing readability.',
      },
      {
        label: 'Output',
        title: 'Immersive essay experience',
        description:
          'Readers move through a polished editorial surface built for narrative momentum and impact.',
      },
    ],
    impact: [
      'Created a cinematic editorial experience around a high-impact narrative concept.',
      'Improved pacing through immersive visual sequencing and interaction design.',
      'Turned thought-leadership content into a premium digital story surface.',
    ],
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
