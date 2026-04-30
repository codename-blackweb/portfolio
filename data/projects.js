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

const projectContent = {
  'overture-os': {
    problem: {
      headline: 'Campaign execution was scattered across tools',
      body:
        'Growth planning lived in separate calendars, docs, dashboards, and channel workflows. The work needed a single operating layer that could show what was planned, what was moving, and where execution was getting stuck.',
      bullets: [
        'Campaign owners lacked one command surface for planning and launch readiness.',
        'Channel work moved at different speeds, creating handoff delays and priority drift.',
        'Performance review happened after execution instead of informing active coordination.',
      ],
    },
    preview: {
      label: 'Campaign OS Preview',
      title: 'Overture OS campaign command layer',
      cards: [
        { label: 'Input', title: 'Campaign intake' },
        { label: 'Processing', title: 'Schedule routing' },
        { label: 'Intelligence', title: 'Performance readouts' },
        { label: 'Output', title: 'Launch coordination' },
      ],
    },
    system: {
      intro:
        'Overture OS turns campaign planning into an operating system: briefs enter a shared pipeline, channel work gets sequenced, and performance signals stay close to execution decisions.',
      cards: [
        {
          label: 'Planning Core',
          title: 'Campaign intake model',
          description:
            'Structures briefs, audience goals, offers, channel needs, and launch dates before production begins.',
        },
        {
          label: 'Coordination Core',
          title: 'Cross-channel operating rhythm',
          description:
            'Aligns content, paid, lifecycle, and reporting activity around one launch calendar and ownership model.',
        },
        {
          label: 'Performance Core',
          title: 'Active campaign monitoring',
          description:
            'Keeps live results, status updates, and optimization prompts visible while campaigns are still in motion.',
        },
        {
          label: 'Delivery Core',
          title: 'Execution control surface',
          description:
            'Gives operators a structured place to manage launches, dependencies, and follow-up actions.',
        },
      ],
    },
    workflow: {
      cards: [
        {
          label: 'Input',
          title: 'Campaign planning',
          description:
            'Briefs, channel goals, launch windows, and audience priorities enter a single campaign workspace.',
        },
        {
          label: 'Processing',
          title: 'Workflow coordination',
          description:
            'Tasks are sequenced across owners, channels, approval stages, and delivery milestones.',
        },
        {
          label: 'Intelligence',
          title: 'Performance tracking',
          description:
            'Live campaign indicators inform pacing, optimization, and launch follow-through.',
        },
        {
          label: 'Output',
          title: 'Execution delivery',
          description:
            'Teams ship coordinated campaigns with clearer status, timing, and accountability.',
        },
      ],
    },
    capabilitiesHeadline: 'Built for coordinated campaign execution',
    capabilities: [
      {
        label: 'Briefing',
        title: 'Campaign intake standardization',
        description:
          'Turns loose campaign asks into structured inputs teams can plan, assign, and launch from.',
      },
      {
        label: 'Calendar',
        title: 'Channel timing alignment',
        description:
          'Maps campaign activity across channels so teams can see sequencing, dependencies, and launch windows.',
      },
      {
        label: 'Operations',
        title: 'Owner-based workflow control',
        description:
          'Clarifies who owns each step from planning through production, review, launch, and reporting.',
      },
      {
        label: 'Reporting',
        title: 'Campaign performance loop',
        description:
          'Keeps results connected to active planning so campaigns can be tuned instead of only reviewed later.',
      },
    ],
    impactHeadline: 'Campaign operations became easier to coordinate',
    impact: [
      'Reduced launch bottlenecks by centralizing briefs, owners, timing, and channel status.',
      'Strengthened cross-channel coordination with a shared view of active campaign work.',
      'Raised execution consistency by turning campaign planning into a repeatable operating cadence.',
    ],
  },
  signalforge: {
    problem: {
      headline: 'Important demand signals were buried in noise',
      body:
        'Search trends, market movement, audience behavior, and competitive shifts were visible only as scattered clues. SignalForge needed to turn those clues into a ranked intelligence layer operators could act on.',
      bullets: [
        'High-intent topics were hard to separate from low-value market chatter.',
        'Manual research slowed response time when demand patterns changed.',
        'Strategic targeting lacked a repeatable signal-scoring process.',
      ],
    },
    preview: {
      label: 'Signal Engine Preview',
      title: 'SignalForge intelligence engine',
      cards: [
        { label: 'Input', title: 'Market signals' },
        { label: 'Processing', title: 'Signal extraction' },
        { label: 'Intelligence', title: 'Opportunity scoring' },
        { label: 'Output', title: 'Strategy outputs' },
      ],
    },
    system: {
      intro:
        'SignalForge converts scattered search and market activity into clustered opportunities, scoring the strength of intent and showing where strategy should move next.',
      cards: [
        {
          label: 'Collection',
          title: 'Demand signal capture',
          description:
            'Pulls search behavior, market movement, audience activity, and competitive cues into one intake model.',
        },
        {
          label: 'Extraction',
          title: 'Pattern clustering',
          description:
            'Groups related signals into themes so operators can see where demand is forming or shifting.',
        },
        {
          label: 'Scoring',
          title: 'Intent prioritization',
          description:
            'Ranks opportunities by urgency, commercial relevance, and strategic fit.',
        },
        {
          label: 'Activation',
          title: 'Insight-to-action handoff',
          description:
            'Turns intelligence into targeting direction, content priorities, and campaign recommendations.',
        },
      ],
    },
    workflow: {
      cards: [
        {
          label: 'Input',
          title: 'Signal capture',
          description:
            'Search, market, competitive, and audience signals are collected for evaluation.',
        },
        {
          label: 'Processing',
          title: 'Pattern extraction',
          description:
            'Related movements are clustered into themes that reveal what is gaining relevance.',
        },
        {
          label: 'Intelligence',
          title: 'Opportunity scoring',
          description:
            'Each cluster is assessed for intent strength, audience value, and strategic urgency.',
        },
        {
          label: 'Output',
          title: 'Strategic output',
          description:
            'The system produces prioritized recommendations for targeting, messaging, and content direction.',
        },
      ],
    },
    capabilitiesHeadline: 'Built for signal clarity and decision speed',
    capabilities: [
      {
        label: 'Research',
        title: 'High-intent cluster detection',
        description:
          'Finds patterns that indicate real audience interest rather than isolated keyword movement.',
      },
      {
        label: 'Prioritization',
        title: 'Opportunity scoring model',
        description:
          'Ranks signals so teams can decide what deserves strategy, budget, or content attention first.',
      },
      {
        label: 'Market Read',
        title: 'Competitive movement tracking',
        description:
          'Surfaces shifts in category language, demand themes, and positioning openings.',
      },
      {
        label: 'Activation',
        title: 'Strategy-ready intelligence',
        description:
          'Packages findings into recommendations operators can use for campaigns, editorial planning, and targeting.',
      },
    ],
    impactHeadline: 'Research turned into prioritized market action',
    impact: [
      'Identified high-intent demand clusters that could guide targeting and content strategy.',
      'Shortened research cycles by replacing manual scanning with structured signal review.',
      'Improved targeting precision by ranking opportunities before campaign activation.',
    ],
  },
  'the-new-rules-of-search': {
    problem: {
      headline: 'Search strategy outgrew traditional SEO playbooks',
      body:
        'Discovery now happens across AI answers, social platforms, entity graphs, and conventional results. The experience needed to explain that shift without reducing it to a keyword checklist.',
      bullets: [
        'AI search changed how authority, citations, and structured knowledge influence discovery.',
        'Teams needed a readable model for answer engines, entities, and multi-platform visibility.',
        'The topic required editorial pacing that could carry strategy without becoming dense documentation.',
      ],
    },
    preview: {
      label: 'Editorial Strategy Preview',
      title: 'AI search field guide',
      cards: [
        { label: 'Input', title: 'Search shifts' },
        { label: 'Processing', title: 'Narrative framing' },
        { label: 'Intelligence', title: 'Authority model' },
        { label: 'Output', title: 'Visibility playbook' },
      ],
    },
    system: {
      intro:
        'The New Rules of Search packages a complex market transition into an editorial strategy product, moving from discovery shifts to practical implications for brand visibility.',
      cards: [
        {
          label: 'Landscape',
          title: 'Modern discovery map',
          description:
            'Frames how AI answers, social search, traditional SEO, and entity signals now overlap.',
        },
        {
          label: 'Narrative',
          title: 'Guided editorial pacing',
          description:
            'Breaks the argument into readable sections that build context before moving into strategic action.',
        },
        {
          label: 'Authority',
          title: 'Entity and citation logic',
          description:
            'Explains how machine-readable credibility shapes whether brands appear in answer environments.',
        },
        {
          label: 'Application',
          title: 'Visibility strategy model',
          description:
            'Turns the editorial concept into a practical framework for planning content and platform presence.',
        },
      ],
    },
    workflow: {
      cards: [
        {
          label: 'Input',
          title: 'Discovery behavior audit',
          description:
            'Search habits, AI answer patterns, platform behavior, and authority signals establish the strategic context.',
        },
        {
          label: 'Processing',
          title: 'Editorial sequencing',
          description:
            'The argument is structured into narrative sections that move from market change to operating implications.',
        },
        {
          label: 'Intelligence',
          title: 'Answer-engine interpretation',
          description:
            'Entity authority, structured content, and citation dynamics are translated into usable strategy.',
        },
        {
          label: 'Output',
          title: 'Modern search playbook',
          description:
            'Readers get a clear framework for visibility across search engines, AI systems, and social discovery.',
        },
      ],
    },
    capabilitiesHeadline: 'Built for AI search strategy education',
    capabilities: [
      {
        label: 'Education',
        title: 'Answer-engine explanation',
        description:
          'Clarifies how AI-generated answers change the role of SEO, authority, and source credibility.',
      },
      {
        label: 'Structure',
        title: 'Strategic editorial hierarchy',
        description:
          'Organizes a complicated subject into sections that can be scanned, understood, and applied.',
      },
      {
        label: 'Positioning',
        title: 'Entity authority framing',
        description:
          'Shows why brands need recognizable expertise signals across the open web and platform ecosystems.',
      },
      {
        label: 'Planning',
        title: 'Multi-platform visibility lens',
        description:
          'Connects search, social discovery, and answer environments into one planning model.',
      },
    ],
    impactHeadline: 'A complex search shift became usable strategy',
    impact: [
      'Translated AI search disruption into a clear editorial framework for marketers and operators.',
      'Defined the relationship between entity authority, answer visibility, and platform presence.',
      'Created a thought-leadership asset that makes modern discovery strategy easier to explain.',
    ],
  },
  axiome: {
    problem: {
      headline: 'Flat dashboards could not show spatial relationships',
      body:
        'Market, performance, and risk indicators often sit in separate tables or charts. Axiome explores how those signals can be understood as layered spatial relationships instead of isolated metrics.',
      bullets: [
        'Risk and performance patterns were difficult to compare in two-dimensional reporting views.',
        'Users needed an exploratory interface for seeing clusters, proximity, and signal density.',
        'The concept required a premium visual model without sacrificing dashboard utility.',
      ],
    },
    preview: {
      label: 'Spatial Dashboard Preview',
      title: 'Axiome signal field',
      cards: [
        { label: 'Input', title: 'Market layers' },
        { label: 'Processing', title: '3D mapping' },
        { label: 'Intelligence', title: 'Risk patterns' },
        { label: 'Output', title: 'Exploration view' },
      ],
    },
    system: {
      intro:
        'Axiome turns intelligence inputs into an interactive spatial field, letting users move through market, performance, and risk layers as visual relationships.',
      cards: [
        {
          label: 'Layering',
          title: 'Signal plane composition',
          description:
            'Organizes data categories as visual planes so relationships can be inspected across depth and proximity.',
        },
        {
          label: 'Navigation',
          title: '3D exploration controls',
          description:
            'Supports dashboard movement through filters, focus states, and dimensional viewing patterns.',
        },
        {
          label: 'Analysis',
          title: 'Spatial pattern recognition',
          description:
            'Helps users see where performance pressure, opportunity, or exposure appears in the field.',
        },
        {
          label: 'Presentation',
          title: 'Executive-grade visual surface',
          description:
            'Packages intelligence in a cinematic interface suitable for high-level review and exploration.',
        },
      ],
    },
    workflow: {
      cards: [
        {
          label: 'Input',
          title: 'Layered data ingestion',
          description:
            'Market, performance, and risk signals enter the dashboard as separate but comparable layers.',
        },
        {
          label: 'Processing',
          title: 'Spatial projection',
          description:
            'Inputs are mapped into a three-dimensional field with visual weight, distance, and grouping.',
        },
        {
          label: 'Intelligence',
          title: 'Cluster interpretation',
          description:
            'Users inspect how signals concentrate, diverge, or align across the spatial model.',
        },
        {
          label: 'Output',
          title: 'Interactive insight view',
          description:
            'The dashboard produces an exploratory surface for reviewing market conditions and risk signals.',
        },
      ],
    },
    capabilitiesHeadline: 'Built for spatial signal exploration',
    capabilities: [
      {
        label: 'Visualization',
        title: 'Three-dimensional signal mapping',
        description:
          'Represents intelligence layers through position, depth, and visual relationships.',
      },
      {
        label: 'Interaction',
        title: 'Exploratory dashboard movement',
        description:
          'Lets users inspect different angles, layers, and clusters without leaving the product surface.',
      },
      {
        label: 'Analysis',
        title: 'Risk and opportunity reading',
        description:
          'Supports pattern recognition across metrics that are harder to compare in flat tables.',
      },
      {
        label: 'Communication',
        title: 'Cinematic data presentation',
        description:
          'Turns abstract intelligence into a premium visual experience for stakeholder review.',
      },
    ],
    impactHeadline: 'Spatial analysis became a product concept',
    impact: [
      'Converted layered market and risk inputs into an interactive 3D dashboard model.',
      'Made complex signal relationships easier to inspect through spatial grouping and movement.',
      'Created a premium visualization prototype for communicating intelligence density and exposure.',
    ],
  },
  'rcg-executive-dashboard': {
    problem: {
      headline: 'Leadership reporting lacked a decision-ready view',
      body:
        'Campaign, recruitment, sentiment, and shareholder signals were difficult to interpret together. The dashboard needed to compress those inputs into an executive interface built for fast review.',
      bullets: [
        'Reporting required too much manual assembly before leadership could evaluate performance.',
        'Attribution context was hard to connect to campaign and engagement activity.',
        'Executives needed summarized intelligence without losing the supporting signal detail.',
      ],
    },
    preview: {
      label: 'Executive Dashboard Preview',
      title: 'RCG leadership intelligence view',
      cards: [
        { label: 'Input', title: 'Campaign data' },
        { label: 'Processing', title: 'Metric cleanup' },
        { label: 'Intelligence', title: 'Attribution read' },
        { label: 'Output', title: 'Exec interface' },
      ],
    },
    system: {
      intro:
        'The RCG Executive Dashboard consolidates performance, engagement, sentiment, and attribution signals into a branded reporting layer for leadership decisions.',
      cards: [
        {
          label: 'Data Model',
          title: 'Campaign source consolidation',
          description:
            'Pulls fragmented campaign and engagement inputs into a common reporting structure.',
        },
        {
          label: 'Normalization',
          title: 'Leadership-ready metrics',
          description:
            'Cleans and groups data so executives can compare performance without parsing raw reports.',
        },
        {
          label: 'Interpretation',
          title: 'Attribution signal analysis',
          description:
            'Connects campaign activity to pipeline, sentiment, and shareholder-relevant indicators.',
        },
        {
          label: 'Interface',
          title: 'Executive decision surface',
          description:
            'Presents the most important movements in a branded dashboard built for quick review.',
        },
      ],
    },
    workflow: {
      cards: [
        {
          label: 'Input',
          title: 'Campaign + sentiment data',
          description:
            'Engagement metrics, recruitment indicators, shareholder signals, and campaign activity enter the model.',
        },
        {
          label: 'Processing',
          title: 'Data normalization',
          description:
            'Inputs are cleaned, grouped, and formatted into comparable executive reporting categories.',
        },
        {
          label: 'Intelligence',
          title: 'Executive insights',
          description:
            'The dashboard highlights performance movements, attribution signals, and decision points.',
        },
        {
          label: 'Output',
          title: 'Decision interface',
          description:
            'Leadership gets a concise view for evaluating performance and directing next actions.',
        },
      ],
    },
    capabilitiesHeadline: 'Built for executive visibility',
    capabilities: [
      {
        label: 'Reporting',
        title: 'Consolidated leadership view',
        description:
          'Combines campaign, engagement, and business signals into one executive reporting surface.',
      },
      {
        label: 'Attribution',
        title: 'Performance contribution mapping',
        description:
          'Shows how campaign activity relates to pipeline movement and strategic outcomes.',
      },
      {
        label: 'Narrative',
        title: 'Data story compression',
        description:
          'Turns detailed metrics into a concise story leadership can evaluate quickly.',
      },
      {
        label: 'Branding',
        title: 'Polished stakeholder interface',
        description:
          'Presents reporting in a refined visual system suitable for executive audiences.',
      },
    ],
    impactHeadline: 'Executive reporting moved faster',
    impact: [
      'Improved reporting clarity by consolidating campaign, sentiment, and engagement signals.',
      'Reduced reporting time -35% through a single leadership dashboard surface.',
      'Increased attribution visibility +47% across campaign performance review.',
    ],
  },
  'sp-content-system': {
    problem: {
      headline: 'Content production needed a reliable operating cadence',
      body:
        'High-volume content requests moved through inconsistent paths, which made deadlines, approvals, and publishing readiness harder to manage. The system needed to create order without slowing production.',
      bullets: [
        'Content intake arrived through inconsistent briefs and informal requests.',
        'Review cycles created delays because ownership and approval status were unclear.',
        'Publishing cadence was difficult to protect across multiple platforms and campaigns.',
      ],
    },
    preview: {
      label: 'Content System Preview',
      title: 'Content execution system',
      cards: [
        { label: 'Input', title: 'Content intake' },
        { label: 'Processing', title: 'Production workflow' },
        { label: 'Intelligence', title: 'Calendar visibility' },
        { label: 'Output', title: 'Publishing execution' },
      ],
    },
    system: {
      intro:
        'SP Content System organizes requests, production status, approvals, and publishing timing into a scalable content operations engine.',
      cards: [
        {
          label: 'Intake',
          title: 'Brief and request structure',
          description:
            'Standardizes new content asks so production starts with clear goals, formats, channels, and owners.',
        },
        {
          label: 'Production',
          title: 'Draft-to-review pipeline',
          description:
            'Moves work through writing, editing, stakeholder review, and final scheduling checkpoints.',
        },
        {
          label: 'Calendar',
          title: 'Cadence management view',
          description:
            'Shows publishing load, deadlines, channel mix, and upcoming production pressure.',
        },
        {
          label: 'Measurement',
          title: 'Content performance feedback',
          description:
            'Feeds publishing results back into planning so formats and cadence can be adjusted.',
        },
      ],
    },
    workflow: {
      cards: [
        {
          label: 'Input',
          title: 'Brief intake',
          description:
            'Campaign briefs, content requests, format needs, and channel requirements enter the production queue.',
        },
        {
          label: 'Processing',
          title: 'Content production',
          description:
            'Drafting, editing, creative coordination, and ownership updates move through defined production stages.',
        },
        {
          label: 'Intelligence',
          title: 'Approval flow',
          description:
            'Review status, blockers, and publishing readiness are tracked before content reaches the calendar.',
        },
        {
          label: 'Output',
          title: 'Publishing + tracking',
          description:
            'Approved assets are scheduled, published, and measured against cadence and performance expectations.',
        },
      ],
    },
    capabilitiesHeadline: 'Built for scalable content operations',
    capabilities: [
      {
        label: 'Intake',
        title: 'Structured content requests',
        description:
          'Replaces informal asks with briefs that clarify audience, format, channel, and deadline.',
      },
      {
        label: 'Production',
        title: 'Approval-stage transparency',
        description:
          'Shows where each asset sits in draft, review, revision, approval, and scheduling.',
      },
      {
        label: 'Publishing',
        title: 'Multi-platform cadence control',
        description:
          'Protects publishing rhythm across campaigns, channels, and content formats.',
      },
      {
        label: 'Optimization',
        title: 'Performance-informed planning',
        description:
          'Uses content results to guide future topics, formats, and production emphasis.',
      },
    ],
    impactHeadline: 'Content throughput became more predictable',
    impact: [
      'Increased on-time publishing to 95%+ by clarifying production and review stages.',
      'Reduced turnaround time -39% through a cleaner request-to-approval path.',
      'Improved campaign throughput by standardizing intake, ownership, and publishing cadence.',
    ],
  },
  'mdvip-2024-national-meeting-campaign-system': {
    problem: {
      headline: 'A national meeting campaign needed one asset ecosystem',
      body:
        'The work spanned editorial planning, event programming, social execution, branded presentation, and post-event reporting. A static calendar alone could not represent the full campaign system.',
      bullets: [
        'Event content, social posts, program assets, and reporting materials needed coordinated timing.',
        'Campaign execution required a shared view across planning, publishing, and presentation assets.',
        'The system had to support both weekly cadence and major-event storytelling.',
      ],
    },
    preview: {
      label: 'Event Campaign Preview',
      title: 'MDVIP campaign asset ecosystem',
      cards: [
        { label: 'Input', title: 'Event priorities' },
        { label: 'Processing', title: 'Asset planning' },
        { label: 'Intelligence', title: 'Cadence read' },
        { label: 'Output', title: 'Campaign calendar' },
      ],
    },
    system: {
      intro:
        'The MDVIP campaign system connects weekly planning, event programming, digital proof assets, and social execution into one campaign operations model.',
      cards: [
        {
          label: 'Planning',
          title: 'Editorial calendar backbone',
          description:
            'Coordinates weekly publishing needs, campaign themes, event milestones, and content ownership.',
        },
        {
          label: 'Event',
          title: 'Program asset integration',
          description:
            'Connects the National Meeting program experience to supporting campaign and presentation materials.',
        },
        {
          label: 'Social',
          title: 'Post sequence management',
          description:
            'Organizes social content around event timing, audience moments, and campaign support needs.',
        },
        {
          label: 'Proof',
          title: 'Branded digital presentation',
          description:
            'Extends the calendar into polished campaign-facing assets that show the work as a connected system.',
        },
      ],
    },
    workflow: {
      cards: [
        {
          label: 'Input',
          title: 'Channel requirements',
          description:
            'Event needs, social themes, editorial priorities, and presentation requirements enter the campaign plan.',
        },
        {
          label: 'Processing',
          title: 'Weekly coordination',
          description:
            'Content is assigned, sequenced, reviewed, and mapped against National Meeting milestones.',
        },
        {
          label: 'Intelligence',
          title: 'Cadence and format reading',
          description:
            'Publishing rhythm, post types, and event moments guide what gets prioritized next.',
        },
        {
          label: 'Output',
          title: 'Multi-asset delivery',
          description:
            'The campaign ships calendar, program, social, reporting, and branded presentation assets together.',
        },
      ],
    },
    capabilitiesHeadline: 'Built for event campaign operations',
    capabilities: [
      {
        label: 'Calendar',
        title: 'Weekly publishing orchestration',
        description:
          'Maintains a steady content rhythm while accounting for event-specific campaign demands.',
      },
      {
        label: 'Event Program',
        title: 'National Meeting asset support',
        description:
          'Connects programming details to digital materials used before, during, and after the event.',
      },
      {
        label: 'Social',
        title: 'Campaign post execution',
        description:
          'Structures social content around event moments, messaging priorities, and publishing cadence.',
      },
      {
        label: 'Reporting',
        title: 'Post-event story packaging',
        description:
          'Helps translate campaign activity into presentation-ready proof and follow-up materials.',
      },
    ],
    impactHeadline: 'Event content operated as a connected campaign',
    impact: [
      'Maintained a 3-4x weekly publishing cadence with 90%+ on-time delivery during campaign execution.',
      'Reduced missed deadlines -40% by giving event content a clearer planning and review structure.',
      'Identified higher-performing formats that informed future National Meeting content decisions.',
    ],
  },
  'xsolla-developer-hub': {
    problem: {
      headline: 'Developer resources needed a clearer entry point',
      body:
        'Technical education, product context, and resource discovery can easily fragment across documentation, marketing, and support surfaces. The hub needed to make developer learning easier to navigate.',
      bullets: [
        'Developers needed faster paths to relevant technical resources and product context.',
        'Content organization had to support both exploration and task-based discovery.',
        'The experience needed to feel like a product hub, not a static resource list.',
      ],
    },
    preview: {
      label: 'Developer Hub Preview',
      title: 'Xsolla resource navigation layer',
      cards: [
        { label: 'Input', title: 'Docs + guides' },
        { label: 'Processing', title: 'Taxonomy model' },
        { label: 'Intelligence', title: 'Learning paths' },
        { label: 'Output', title: 'Developer hub' },
      ],
    },
    system: {
      intro:
        'Xsolla Developer Hub organizes technical resources, product education, and discovery paths into a developer-facing content architecture.',
      cards: [
        {
          label: 'Inventory',
          title: 'Resource library structure',
          description:
            'Groups docs, guides, explainers, and product materials into a more navigable system.',
        },
        {
          label: 'Taxonomy',
          title: 'Developer intent mapping',
          description:
            'Organizes content around what developers are trying to learn, build, compare, or implement.',
        },
        {
          label: 'Education',
          title: 'Product learning paths',
          description:
            'Guides users through technical concepts and product areas without forcing linear documentation reading.',
        },
        {
          label: 'Access',
          title: 'Resource discovery interface',
          description:
            'Presents technical material through a polished hub designed for scanning and navigation.',
        },
      ],
    },
    workflow: {
      cards: [
        {
          label: 'Input',
          title: 'Resource inventory',
          description:
            'Documentation, tutorials, API explainers, and product education content enter the architecture.',
        },
        {
          label: 'Processing',
          title: 'Taxonomy organization',
          description:
            'Materials are grouped by product area, developer intent, and learning stage.',
        },
        {
          label: 'Intelligence',
          title: 'Pathway recommendation',
          description:
            'Navigation patterns guide users toward the resources most relevant to their implementation goal.',
        },
        {
          label: 'Output',
          title: 'Developer education hub',
          description:
            'Developers get a focused destination for finding, understanding, and applying technical resources.',
        },
      ],
    },
    capabilitiesHeadline: 'Built for developer resource discovery',
    capabilities: [
      {
        label: 'Architecture',
        title: 'Technical content taxonomy',
        description:
          'Creates categories and pathways that make a broad resource library easier to navigate.',
      },
      {
        label: 'Education',
        title: 'Product concept explanation',
        description:
          'Helps developers understand platform capabilities before diving into implementation detail.',
      },
      {
        label: 'Navigation',
        title: 'Intent-based resource access',
        description:
          'Supports users who arrive with different goals, from exploration to integration support.',
      },
      {
        label: 'Experience',
        title: 'Developer-facing presentation',
        description:
          'Packages technical material in a polished interface that feels intentional and product-led.',
      },
    ],
    impactHeadline: 'Technical resources became easier to navigate',
    impact: [
      'Organized developer education into clearer pathways for product understanding and implementation.',
      'Created a stronger entry point for technical resource discovery.',
      'Reduced content fragmentation by presenting docs, guides, and explainers as one hub experience.',
    ],
  },
  'campaignops-ai': {
    problem: {
      headline: 'AI needed to sit inside campaign operations',
      body:
        'Campaign teams often use AI as a separate prompt tool while planning, production, and optimization still happen elsewhere. CampaignOps.ai explores AI as part of the operating workflow itself.',
      bullets: [
        'Planning inputs, campaign tasks, and optimization ideas were split across disconnected surfaces.',
        'AI assistance needed to support workflow decisions instead of producing isolated suggestions.',
        'The concept had to make campaign automation feel operationally useful and easy to understand.',
      ],
    },
    preview: {
      label: 'AI Operations Preview',
      title: 'CampaignOps.ai workflow console',
      cards: [
        { label: 'Input', title: 'Campaign goals' },
        { label: 'Processing', title: 'AI planning' },
        { label: 'Intelligence', title: 'Optimization cues' },
        { label: 'Output', title: 'Ops command' },
      ],
    },
    system: {
      intro:
        'CampaignOps.ai frames AI as an embedded campaign operations layer that can help structure planning, task flow, optimization, and execution.',
      cards: [
        {
          label: 'Briefing',
          title: 'Goal-to-plan translation',
          description:
            'Turns campaign objectives and constraints into structured planning paths.',
        },
        {
          label: 'Automation',
          title: 'AI-assisted workflow design',
          description:
            'Suggests tasks, sequences, and production steps based on campaign goals.',
        },
        {
          label: 'Optimization',
          title: 'Performance prompt layer',
          description:
            'Uses campaign signals to recommend adjustments, experiments, and next actions.',
        },
        {
          label: 'Execution',
          title: 'Campaign command workspace',
          description:
            'Brings planning, AI guidance, and operational tracking into one product surface.',
        },
      ],
    },
    workflow: {
      cards: [
        {
          label: 'Input',
          title: 'Campaign objective intake',
          description:
            'Goals, audiences, offers, constraints, and channel needs enter the campaign workspace.',
        },
        {
          label: 'Processing',
          title: 'AI task planning',
          description:
            'The system proposes sequences, production steps, and workflow structure for the campaign.',
        },
        {
          label: 'Intelligence',
          title: 'Optimization guidance',
          description:
            'Prompts and signal cues help operators decide what to adjust during execution.',
        },
        {
          label: 'Output',
          title: 'Operations command view',
          description:
            'Teams receive an organized workspace for planning, monitoring, and improving campaign work.',
        },
      ],
    },
    capabilitiesHeadline: 'Built for AI-enabled campaign workflow',
    capabilities: [
      {
        label: 'Planning',
        title: 'Campaign planning generator',
        description:
          'Uses AI assistance to turn objectives into clearer plans, tasks, and workstreams.',
      },
      {
        label: 'Operations',
        title: 'Workflow recommendation layer',
        description:
          'Suggests production paths and next steps that fit the campaign context.',
      },
      {
        label: 'Optimization',
        title: 'Signal-based adjustment prompts',
        description:
          'Connects performance movement to practical recommendations for campaign operators.',
      },
      {
        label: 'Product Concept',
        title: 'AI operations prototype',
        description:
          'Demonstrates how AI can live inside the campaign process instead of outside it.',
      },
    ],
    impactHeadline: 'AI campaign planning became operational',
    impact: [
      'Positioned AI as a campaign workflow layer rather than a disconnected prompt experience.',
      'Showed how planning, production, and optimization could live in one assisted workspace.',
      'Created a product concept that makes campaign automation easier to evaluate and explain.',
    ],
  },
  'the-human-mask-is-slipping': {
    problem: {
      headline: 'The essay needed atmosphere, pacing, and restraint',
      body:
        'The concept depended on tension and visual rhythm as much as copy. A conventional article layout would flatten the idea, so the build needed to behave like an editorial experience.',
      bullets: [
        'The narrative required cinematic momentum without sacrificing readability.',
        'Visual pacing had to support the argument instead of becoming decorative noise.',
        'The page needed to feel immersive while keeping the reader oriented through the essay.',
      ],
    },
    preview: {
      label: 'Editorial Experience Preview',
      title: 'Human Mask narrative surface',
      cards: [
        { label: 'Input', title: 'Narrative thesis' },
        { label: 'Processing', title: 'Scroll pacing' },
        { label: 'Intelligence', title: 'Tension cues' },
        { label: 'Output', title: 'Immersive essay' },
      ],
    },
    system: {
      intro:
        'The Human Mask Is Slipping turns a sharp editorial idea into a paced digital essay with atmosphere, visual rhythm, and controlled narrative emphasis.',
      cards: [
        {
          label: 'Concept',
          title: 'Narrative thesis framing',
          description:
            'Establishes the central argument and visual tone before the reader moves into the essay.',
        },
        {
          label: 'Pacing',
          title: 'Scroll-based sequence design',
          description:
            'Uses section rhythm and transitions to create momentum across the editorial experience.',
        },
        {
          label: 'Atmosphere',
          title: 'Cinematic visual language',
          description:
            'Applies mood, contrast, and motion to support the essay without overwhelming the text.',
        },
        {
          label: 'Reading',
          title: 'Immersive article surface',
          description:
            'Keeps the page readable while making the digital format feel more intentional than a standard post.',
        },
      ],
    },
    workflow: {
      cards: [
        {
          label: 'Input',
          title: 'Narrative concept',
          description:
            'The thesis, tone, and supporting ideas define the editorial direction.',
        },
        {
          label: 'Processing',
          title: 'Section choreography',
          description:
            'Copy, transitions, and visual moments are sequenced to control rhythm.',
        },
        {
          label: 'Intelligence',
          title: 'Emotional emphasis',
          description:
            'Design cues highlight tension, contrast, and key interpretive moments.',
        },
        {
          label: 'Output',
          title: 'Cinematic reading path',
          description:
            'Readers move through a polished essay experience with deliberate pacing and atmosphere.',
        },
      ],
    },
    capabilitiesHeadline: 'Built for immersive editorial storytelling',
    capabilities: [
      {
        label: 'Narrative',
        title: 'Thesis-led page structure',
        description:
          'Organizes the experience around the argument rather than a generic article template.',
      },
      {
        label: 'Motion',
        title: 'Controlled scroll rhythm',
        description:
          'Uses movement to pace the reader through moments of tension, pause, and emphasis.',
      },
      {
        label: 'Visual System',
        title: 'Atmospheric editorial treatment',
        description:
          'Builds mood through typography, contrast, depth, and restrained cinematic cues.',
      },
      {
        label: 'Experience',
        title: 'Readable immersive format',
        description:
          'Balances dramatic presentation with clear reading flow and web-native usability.',
      },
    ],
    impactHeadline: 'A narrative concept became a digital experience',
    impact: [
      'Turned a sharp editorial idea into a cinematic web-native essay.',
      'Used pacing and atmosphere to increase the impact of the narrative arc.',
      'Created a premium thought-leadership surface that feels distinct from a standard article.',
    ],
  },
};

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
  const content = projectContent[slug] || {};
  const contentCapabilityCards = Array.isArray(content.capabilities)
    ? content.capabilities
    : content.capabilities?.cards;
  const contentImpactBullets = Array.isArray(content.impact)
    ? content.impact
    : content.impact?.bullets;
  const previewCards =
    content.preview?.cards ||
    (content.preview?.input
      ? [
          { label: 'Input', title: content.preview.input },
          { label: 'Processing', title: content.preview.processing },
          { label: 'Intelligence', title: content.preview.intelligence },
          { label: 'Output', title: content.preview.output },
        ]
      : undefined);
  const resolvedPreview = content.preview
    ? {
        ...content.preview,
        input: content.preview.input || previewCards?.[0]?.title,
        processing: content.preview.processing || previewCards?.[1]?.title,
        intelligence: content.preview.intelligence || previewCards?.[2]?.title,
        output: content.preview.output || previewCards?.[3]?.title,
        cards: previewCards,
      }
    : undefined;
  const resolvedArchitectureSteps =
    content.workflow?.cards || content.architectureSteps || architectureSteps;
  const resolvedSystem = {
    headline: content.system?.headline || `${title} system model`,
    intro:
      content.system?.intro ||
      solution ||
      `${title} packages strategy, information architecture, and interaction design into a focused digital experience that makes the system easier to understand, use, and act on.`,
    cards: content.system?.cards || resolvedCapabilities.cards,
  };
  const resolvedWorkflow = {
    headline: content.workflow?.headline || `${title} workflow logic`,
    cards: resolvedArchitectureSteps,
  };
  const resolvedCapabilities = {
    headline:
      content.capabilities?.headline ||
      content.capabilitiesHeadline ||
      `${title} capabilities`,
    cards: contentCapabilityCards || capabilities,
  };
  const resolvedImpact = {
    headline: content.impact?.headline || content.impactHeadline || `${title} outcomes`,
    bullets: contentImpactBullets || impact || [
      `${title} clarified the core information path for its audience.`,
      `${title} gave the experience a more deliberate operating model.`,
      `${title} made the final product easier to evaluate and use.`,
    ],
  };

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
      content.problem ||
      problem ||
      `Context: ${title} operates in an environment where the audience needs a clearer way to interpret the underlying system. The Challenge: The experience must turn scattered inputs into a focused product narrative without adding operational or editorial friction.`,
    solution: resolvedSystem.intro,
    preview: resolvedPreview,
    system: resolvedSystem,
    workflow: resolvedWorkflow,
    architectureSteps: resolvedArchitectureSteps,
    capabilities: resolvedCapabilities,
    impact: resolvedImpact,
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
    screenshotPlaceholder:
      content.preview?.title || screenshotPlaceholder || `${title} product preview`,
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
      'Surfaced priority demand patterns from search, market, and competitive movement.',
      'Shortened manual scanning cycles through structured signal review.',
      'Ranked intelligence themes before they moved into targeting and content decisions.',
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
      'Brought documentation, guides, and explainers into one resource discovery path.',
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

export const assets = [
  {
    title: 'The Revenue Blueprint',
    category: 'Presentation / Supporting Work',
    description:
      'Framework connecting content, traffic, and conversion into a measurable growth system.',
    link:
      'https://drive.google.com/file/d/1XOrhIYqu6eH42-CUV5WGaA9tB_2MAjH6/view?usp=sharing',
    liveUrl:
      'https://drive.google.com/file/d/1XOrhIYqu6eH42-CUV5WGaA9tB_2MAjH6/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1XOrhIYqu6eH42-CUV5WGaA9tB_2MAjH6/preview',
  },
  {
    title: 'Architecting the Next Phase of Growth',
    category: 'Presentation / Supporting Work',
    description:
      'Strategic growth architecture for moving from fragmented activity into a focused operating plan.',
    link:
      'https://drive.google.com/file/d/1YEHlts6BO-49bWTR-IT1tShn7w1s-D8z/view?usp=sharing',
    liveUrl:
      'https://drive.google.com/file/d/1YEHlts6BO-49bWTR-IT1tShn7w1s-D8z/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1YEHlts6BO-49bWTR-IT1tShn7w1s-D8z/preview',
  },
  {
    title: 'The AI Growth Engine',
    category: 'Presentation / Supporting Work',
    description:
      'Operating model for applying AI across research, content production, optimization, and growth execution.',
    link:
      'https://drive.google.com/file/d/12C0MEdYyu7GVUDzO34h56iV5FUS3_5KZ/view?usp=sharing',
    liveUrl:
      'https://drive.google.com/file/d/12C0MEdYyu7GVUDzO34h56iV5FUS3_5KZ/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/12C0MEdYyu7GVUDzO34h56iV5FUS3_5KZ/preview',
  },
  {
    title: 'Proving ROI & Fixing Attribution Gaps',
    category: 'Presentation / Supporting Work',
    description:
      'Executive-facing analysis for connecting campaign investment, reporting clarity, and measurable return.',
    link:
      'https://drive.google.com/file/d/1zU3kqZqprQv4OCI8qp_9wuBvC9L71pQ6/view?usp=sharing',
    liveUrl:
      'https://drive.google.com/file/d/1zU3kqZqprQv4OCI8qp_9wuBvC9L71pQ6/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1zU3kqZqprQv4OCI8qp_9wuBvC9L71pQ6/preview',
  },
  {
    title: 'Digital Marketing for Mortals: Dayparting',
    category: 'Presentation / Supporting Work',
    description:
      'Accessible marketing strategy asset explaining timing, audience behavior, and dayparting decisions.',
    link:
      'https://drive.google.com/file/d/1UnliUBI_XaKaMFPnqo1wfxW13Xtoi9qI/view?usp=sharing',
    liveUrl:
      'https://drive.google.com/file/d/1UnliUBI_XaKaMFPnqo1wfxW13Xtoi9qI/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1UnliUBI_XaKaMFPnqo1wfxW13Xtoi9qI/preview',
  },
  {
    title: 'Fear-Based Monetization',
    category: 'Presentation / Supporting Work',
    description:
      'Narrative strategy analysis of how urgency, anxiety, and perceived risk influence monetization models.',
    link:
      'https://drive.google.com/file/d/1a3OjeC-LJRe4qjbHArLE5g607z2sAJQz/view?usp=sharing',
    liveUrl:
      'https://drive.google.com/file/d/1a3OjeC-LJRe4qjbHArLE5g607z2sAJQz/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1a3OjeC-LJRe4qjbHArLE5g607z2sAJQz/preview',
  },
  {
    title: 'The AI Financial Navigator',
    category: 'Presentation / Supporting Work',
    description:
      'Product strategy concept for using AI to guide financial decisions, planning, and user understanding.',
    link:
      'https://drive.google.com/file/d/1Ymkj-l_ZYR1dMAtWYxFaKnLIgyNGibHw/view?usp=sharing',
    liveUrl:
      'https://drive.google.com/file/d/1Ymkj-l_ZYR1dMAtWYxFaKnLIgyNGibHw/view?usp=sharing',
    previewUrl:
      'https://drive.google.com/file/d/1Ymkj-l_ZYR1dMAtWYxFaKnLIgyNGibHw/preview',
  },
];

export const strategicAssets = assets;
