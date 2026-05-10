const UX_COURSE_DATA = {
    title: "CSEB414: UX Design",
    tagline: "Master UX Design for Objective Exams",
    outcomes: [
        "Master all UX syllabus concepts with objective exam focus.",
        "Understand definitions, keywords, process order, and tool differences.",
        "Practice unit-wise MCQs, timed quizzes, and mock end-term tests.",
        "Identify weak areas with analytics and revise using flashcards.",
    ],
    units: [{
            id: "u1",
            name: "Unit 1: Introduction to UX Design and Design Thinking",
            topics: [{
                id: "u1t1",
                name: "User-Centered Design Foundations",
                subtopics: [{
                        id: "u1t1s1",
                        name: "Principles of User-Centered Design",
                        microConcepts: [{
                                id: "u1-c1",
                                title: "User-Centered Design (UCD) Principles",
                                definition: "UCD is a design approach where user needs, context, and feedback guide every design decision.",
                                simpleExplanation: "Design starts from user problems, not developer assumptions.",
                                examExplanation: "In MCQs, UCD is identified by iterative feedback, real user involvement, and usability goals.",
                                keywords: ["UCD", "usability", "iteration", "user goals", "context of use"],
                                terminology: ["learnability", "efficiency", "satisfaction", "error tolerance"],
                                oneLineRevision: "UCD = design for users, with users, validated by users.",
                                confusedConcepts: "UCD vs feature-driven design: UCD prioritizes user outcomes, not feature count.",
                                mcqTraps: "Confusing UCD with only visual design; UCD includes research and testing.",
                                realWorldExample: "Navigation redesign based on user task failure data in a student portal.",
                                examPoints: ["User involvement is continuous", "Iteration is mandatory", "Usability metrics are measurable"],
                                processSteps: ["Understand users", "Define needs", "Design solutions", "Evaluate with users", "Refine"],
                                mnemonic: "U-D-D-E-R: Understand, Define, Design, Evaluate, Refine.",
                                repeatedUniversityConcept: "User feedback loop in every design stage.",
                                previousPatternQuestion: "Which principle is core to UCD? -> Early and continuous user involvement.",
                                expectedMcqs: [
                                    "UCD mainly focuses on: users and tasks",
                                    "Which is not a UCD metric? compiler speed",
                                ],
                                quiz: {
                                    question: "Which option best represents User-Centered Design?",
                                    options: [
                                        "Design based only on latest trends",
                                        "Design based on user needs and iterative testing",
                                        "Design based on management preference only",
                                        "Design without user involvement",
                                    ],
                                    answerIndex: 1,
                                    explanation: "UCD requires user needs, feedback, and iterative evaluation."
                                }
                            },
                            {
                                id: "u1-c2",
                                title: "Human-Computer Interaction (HCI)",
                                definition: "HCI studies how humans interact with digital systems to improve usability and experience.",
                                simpleExplanation: "It is the science of making systems easy and effective for people.",
                                examExplanation: "MCQs often ask HCI scope: interaction design, cognitive load, feedback, affordances.",
                                keywords: ["HCI", "interaction", "feedback", "affordance", "mental model"],
                                terminology: ["cognitive load", "discoverability", "consistency", "mapping"],
                                oneLineRevision: "HCI combines human behavior and interface design.",
                                confusedConcepts: "HCI vs UX: HCI is broader academic field; UX is practical holistic experience design.",
                                mcqTraps: "Assuming HCI is only hardware interaction.",
                                realWorldExample: "ATM button layout designed to reduce confusion and errors.",
                                examPoints: ["Human factors matter", "Error prevention and recovery", "Feedback is essential"],
                                processSteps: ["Analyze user tasks", "Design interactions", "Prototype", "Evaluate"],
                                mnemonic: "A-D-P-E: Analyze, Design, Prototype, Evaluate.",
                                repeatedUniversityConcept: "Cognitive load reduction improves task completion.",
                                previousPatternQuestion: "HCI mainly aims to improve: usability and user performance.",
                                expectedMcqs: ["HCI involves: humans + computers + interaction context"],
                                quiz: {
                                    question: "Which concept belongs strongly to HCI?",
                                    options: ["Server uptime", "Cognitive load", "Database indexing", "Packet switching"],
                                    answerIndex: 1,
                                    explanation: "Cognitive load is a core HCI concept tied to human information processing."
                                }
                            }
                        ]
                    },
                    {
                        id: "u1t1s2",
                        name: "Design Thinking Process",
                        microConcepts: [{
                                id: "u1-c3",
                                title: "Empathize",
                                definition: "Empathize is understanding user emotions, needs, and context through observation and engagement.",
                                simpleExplanation: "Know users deeply before solving anything.",
                                examExplanation: "First stage in design thinking; data from interviews and observations is key.",
                                keywords: ["empathy", "observation", "user interviews", "context"],
                                terminology: ["empathy map", "stakeholders", "pain points"],
                                oneLineRevision: "Empathize = discover what users truly feel and need.",
                                confusedConcepts: "Empathize vs Define: empathize collects raw understanding; define frames problem.",
                                mcqTraps: "Treating empathize as solution ideation stage.",
                                realWorldExample: "Watching students register courses reveals form confusion pain points.",
                                examPoints: ["User immersion", "Active listening", "No premature assumptions"],
                                processSteps: ["Observe", "Interview", "Capture pain points", "Synthesize insights"],
                                mnemonic: "O-I-C-S",
                                repeatedUniversityConcept: "Empathy precedes problem definition.",
                                previousPatternQuestion: "Empathize mainly gathers: qualitative user insights.",
                                expectedMcqs: ["First design thinking stage: Empathize"],
                                quiz: {
                                    question: "What is the main output of the Empathize stage?",
                                    options: ["Final UI screens", "User insights and pain points", "Code repository", "Market share chart"],
                                    answerIndex: 1,
                                    explanation: "Empathize collects user insights, pain points, and context information."
                                }
                            },
                            {
                                id: "u1-c4",
                                title: "Define",
                                definition: "Define converts research insights into a clear, actionable problem statement.",
                                simpleExplanation: "Frame the right problem to solve.",
                                examExplanation: "MCQs test distinction between broad issue and specific user-centered problem statement.",
                                keywords: ["problem statement", "POV", "insights", "scope"],
                                terminology: ["How Might We", "framing", "needs statement"],
                                oneLineRevision: "Define = clarity of problem before idea generation.",
                                confusedConcepts: "Define vs Ideate: define selects problem, ideate generates solutions.",
                                mcqTraps: "Writing solution as problem statement.",
                                realWorldExample: "Students cannot find exam notices quickly due to poor information hierarchy.",
                                examPoints: ["Specific", "User-focused", "Actionable"],
                                processSteps: ["Review insights", "Identify patterns", "Write POV statement"],
                                mnemonic: "R-I-W",
                                repeatedUniversityConcept: "Strong problem statements improve idea quality.",
                                previousPatternQuestion: "Define stage output: user-centered problem statement.",
                                expectedMcqs: ["HMW belongs to: Define/Ideate bridge"],
                                quiz: {
                                    question: "Which is a good Define-stage output?",
                                    options: ["A polished prototype", "A user-centered problem statement", "CSS framework", "A/B test code"],
                                    answerIndex: 1,
                                    explanation: "Define stage formalizes the problem in user-centered language."
                                }
                            },
                            {
                                id: "u1-c5",
                                title: "Ideate",
                                definition: "Ideate is generating diverse solution ideas without early judgment.",
                                simpleExplanation: "Think wide before choosing one path.",
                                examExplanation: "Brainstorming, crazy-8s, and mind maps are common ideation tools in MCQs.",
                                keywords: ["brainstorming", "divergent thinking", "creativity", "alternatives"],
                                terminology: ["crazy 8s", "mind mapping", "SCAMPER"],
                                oneLineRevision: "Ideate = quantity first, quality after filtering.",
                                confusedConcepts: "Ideate vs Prototype: ideate proposes, prototype materializes.",
                                mcqTraps: "Picking first idea without alternatives.",
                                realWorldExample: "Generating multiple onboarding flows before final selection.",
                                examPoints: ["No criticism initially", "Encourage wild ideas", "Build on others' ideas"],
                                processSteps: ["Set challenge", "Generate ideas", "Cluster ideas", "Prioritize"],
                                mnemonic: "S-G-C-P",
                                repeatedUniversityConcept: "Divergent then convergent thinking.",
                                previousPatternQuestion: "Ideate stage encourages: broad idea generation.",
                                expectedMcqs: ["Brainstorming is primarily used in: Ideate"],
                                quiz: {
                                    question: "What is the key goal of Ideate?",
                                    options: ["Finalize one UI immediately", "Generate many possible solutions", "Write deployment scripts", "Measure backend latency"],
                                    answerIndex: 1,
                                    explanation: "Ideate emphasizes creating a wide range of solutions before narrowing."
                                }
                            },
                            {
                                id: "u1-c6",
                                title: "Prototype",
                                definition: "Prototype creates a tangible representation of ideas for validation.",
                                simpleExplanation: "Build quick models to test concepts.",
                                examExplanation: "Low or high fidelity based on stage and objective; prototypes reduce risk before development.",
                                keywords: ["prototype", "fidelity", "validation", "interaction"],
                                terminology: ["clickable prototype", "paper prototype", "MVP"],
                                oneLineRevision: "Prototype fast to learn fast.",
                                confusedConcepts: "Prototype vs final product: prototype is exploratory and temporary.",
                                mcqTraps: "Assuming high-fidelity always better.",
                                realWorldExample: "Clickable Figma checkout flow tested before coding.",
                                examPoints: ["Purpose-driven", "Rapid", "Testable"],
                                processSteps: ["Choose idea", "Select fidelity", "Build prototype", "Prepare test tasks"],
                                mnemonic: "C-S-B-P",
                                repeatedUniversityConcept: "Prototype enables early feedback.",
                                previousPatternQuestion: "Prototype stage output: testable representation.",
                                expectedMcqs: ["Paper prototype is: low-fidelity"],
                                quiz: {
                                    question: "Why are prototypes created in UX process?",
                                    options: ["To replace testing", "To validate ideas before full development", "To avoid user feedback", "To lock design permanently"],
                                    answerIndex: 1,
                                    explanation: "Prototypes allow low-risk testing and iteration before coding."
                                }
                            },
                            {
                                id: "u1-c7",
                                title: "Test",
                                definition: "Test evaluates how well design solutions meet user goals and usability criteria.",
                                simpleExplanation: "Give users tasks and observe what works or fails.",
                                examExplanation: "Testing reveals usability issues, validates assumptions, and guides iteration.",
                                keywords: ["usability testing", "task success", "feedback", "iteration"],
                                terminology: ["moderated", "unmoderated", "A/B", "heuristic"],
                                oneLineRevision: "Test to validate, not to prove ego.",
                                confusedConcepts: "Test vs QA: UX test checks usability; QA checks functionality defects.",
                                mcqTraps: "Testing only after final release.",
                                realWorldExample: "Users fail to locate fee payment button in first attempt.",
                                examPoints: ["Task-based", "Observed behavior", "Actionable findings"],
                                processSteps: ["Define objectives", "Recruit users", "Run tasks", "Analyze findings", "Iterate"],
                                mnemonic: "D-R-R-A-I",
                                repeatedUniversityConcept: "Test results feed back into design thinking cycle.",
                                previousPatternQuestion: "Primary output of testing: usability findings.",
                                expectedMcqs: ["Testing in design thinking is: iterative"],
                                quiz: {
                                    question: "In UX, testing mainly helps to:",
                                    options: ["Increase code size", "Validate usability and discover issues", "Skip research", "Freeze design"],
                                    answerIndex: 1,
                                    explanation: "Testing validates usability and identifies improvement opportunities."
                                }
                            }
                        ]
                    },
                    {
                        id: "u1t1s3",
                        name: "Accessibility, Inclusivity, User Understanding, Career",
                        microConcepts: [{
                                id: "u1-c8",
                                title: "Accessibility and Accessibility Principles",
                                definition: "Accessibility ensures products are usable by people with diverse abilities.",
                                simpleExplanation: "Design so everyone can access and use features.",
                                examExplanation: "Common principles include perceivable, operable, understandable, robust (POUR).",
                                keywords: ["accessibility", "WCAG", "POUR", "assistive tech"],
                                terminology: ["contrast ratio", "keyboard navigation", "alt text"],
                                oneLineRevision: "Accessibility is a baseline quality requirement, not optional.",
                                confusedConcepts: "Accessibility vs usability: accessibility focuses inclusive access, usability focuses ease for target users.",
                                mcqTraps: "Thinking accessibility is only for visual impairment.",
                                realWorldExample: "Captions for videos and keyboard-friendly forms in LMS.",
                                examPoints: ["POUR principles", "Semantic structure", "Device independence"],
                                processSteps: ["Identify barriers", "Apply standards", "Test with assistive tech", "Fix issues"],
                                mnemonic: "POUR",
                                repeatedUniversityConcept: "Contrast and keyboard support appear frequently in MCQs.",
                                previousPatternQuestion: "POUR stands for: Perceivable Operable Understandable Robust.",
                                expectedMcqs: ["Alt text supports: perceivable content"],
                                quiz: {
                                    question: "Which acronym is linked to core accessibility principles?",
                                    options: ["CRUD", "POUR", "REST", "MERN"],
                                    answerIndex: 1,
                                    explanation: "POUR is the standard accessibility principle model."
                                }
                            },
                            {
                                id: "u1-c9",
                                title: "Inclusive UX",
                                definition: "Inclusive UX designs for diversity across ability, language, culture, age, and context.",
                                simpleExplanation: "Design for edge users to improve experience for all.",
                                examExplanation: "Inclusive UX emphasizes representation, flexibility, and reduced exclusion.",
                                keywords: ["inclusive UX", "equity", "bias reduction", "diversity"],
                                terminology: ["edge cases", "inclusive language", "localization"],
                                oneLineRevision: "Inclusive design broadens participation.",
                                confusedConcepts: "Inclusive UX vs accessibility: accessibility is one major part of inclusive UX.",
                                mcqTraps: "Assuming one persona represents all users.",
                                realWorldExample: "Multi-language interface and low-literacy icon support.",
                                examPoints: ["Design for diversity", "Avoid exclusion bias", "Context-aware solutions"],
                                processSteps: ["Identify excluded groups", "Co-design", "Validate inclusively"],
                                mnemonic: "I-C-V",
                                repeatedUniversityConcept: "Inclusive UX improves usability for mainstream users too.",
                                previousPatternQuestion: "Inclusive UX mainly addresses: diverse user needs.",
                                expectedMcqs: ["Inclusive UX helps reduce: design bias"],
                                quiz: {
                                    question: "Inclusive UX primarily aims to:",
                                    options: ["Use only one user segment", "Design for diverse user contexts", "Reduce feature set randomly", "Focus only on visuals"],
                                    answerIndex: 1,
                                    explanation: "Inclusive UX addresses diverse users and contexts to prevent exclusion."
                                }
                            },
                            {
                                id: "u1-c10",
                                title: "User Goals, Pain Points, Behavior Patterns",
                                definition: "User goals are intended outcomes; pain points are frustrations; behavior patterns are recurring user actions.",
                                simpleExplanation: "Know what users want, where they struggle, and how they behave repeatedly.",
                                examExplanation: "MCQs often ask relation: goals drive tasks, pain points identify friction, patterns guide design decisions.",
                                keywords: ["user goals", "pain points", "behavior patterns", "task flow"],
                                terminology: ["friction", "drop-off", "intent", "motivation"],
                                oneLineRevision: "Design removes pain between goal and task completion.",
                                confusedConcepts: "Goal vs task: goal is outcome; task is action sequence.",
                                mcqTraps: "Assuming behavior pattern equals user preference always.",
                                realWorldExample: "Students repeatedly abandon form at payment OTP step.",
                                examPoints: ["Goal-task mapping", "Pain point prioritization", "Pattern-driven optimization"],
                                processSteps: ["List goals", "Observe behaviors", "Locate pain points", "Redesign touchpoints"],
                                mnemonic: "G-B-P-R",
                                repeatedUniversityConcept: "Pain-point identification is frequent in objective exams.",
                                previousPatternQuestion: "Pain point means: user friction/problem area.",
                                expectedMcqs: ["Behavior patterns are identified using: observation and analytics"],
                                quiz: {
                                    question: "Which pair is correctly matched?",
                                    options: ["Goal -> user frustration", "Pain point -> friction area", "Pattern -> random event", "Task -> emotional intent only"],
                                    answerIndex: 1,
                                    explanation: "Pain points represent friction and obstacles in user journeys."
                                }
                            },
                            {
                                id: "u1-c11",
                                title: "UX Career Paths, Roles, Responsibilities",
                                definition: "UX career paths include UX researcher, UX designer, interaction designer, content designer, and UX writer.",
                                simpleExplanation: "Different UX roles focus on research, design, testing, or content clarity.",
                                examExplanation: "MCQs commonly test role differences: researcher finds insights, designer creates solutions.",
                                keywords: ["UX researcher", "UX designer", "UI designer", "interaction designer", "UX writer"],
                                terminology: ["deliverables", "stakeholder collaboration", "cross-functional"],
                                oneLineRevision: "Role clarity: research discovers, design solves, testing validates.",
                                confusedConcepts: "UX designer vs UI designer: UX handles flow/experience; UI handles visual interface detail.",
                                mcqTraps: "Equating UX role with only screen beautification.",
                                realWorldExample: "Researcher runs interviews while designer builds task flows.",
                                examPoints: ["Role specialization", "Collaboration with PM/dev", "Evidence-based decisions"],
                                processSteps: ["Research", "Synthesis", "Design", "Validation", "Handoff"],
                                mnemonic: "R-S-D-V-H",
                                repeatedUniversityConcept: "UX roles and responsibility mapping often repeated.",
                                previousPatternQuestion: "Who primarily conducts user interviews? UX researcher.",
                                expectedMcqs: ["UX writer focuses on: microcopy and content clarity"],
                                quiz: {
                                    question: "Which role is most associated with planning and conducting interviews?",
                                    options: ["Backend developer", "UX researcher", "Graphic printer", "Database admin"],
                                    answerIndex: 1,
                                    explanation: "UX researchers commonly handle interview planning and insight extraction."
                                }
                            }
                        ]
                    }
                ]
            }]
        },
        {
            id: "u2",
            name: "Unit 2: UX Research and Ideation Techniques",
            topics: [{
                id: "u2t1",
                name: "Research Planning and Methods",
                subtopics: [{
                        id: "u2t1s1",
                        name: "Research Planning and Goals",
                        microConcepts: [{
                                id: "u2-c1",
                                title: "UX Research Planning",
                                definition: "Research planning defines objectives, target users, methods, timeline, and expected outputs.",
                                simpleExplanation: "It is the blueprint before collecting data.",
                                examExplanation: "Objective exams ask about research plan components and method selection logic.",
                                keywords: ["research plan", "scope", "timeline", "participant criteria"],
                                terminology: ["recruitment", "screener", "protocol"],
                                oneLineRevision: "Strong planning prevents biased and irrelevant research.",
                                confusedConcepts: "Planning vs execution: planning designs strategy, execution collects evidence.",
                                mcqTraps: "Skipping objective definition before interviews.",
                                realWorldExample: "Plan to test hostel app usability with first-year students.",
                                examPoints: ["Clear objective", "Right participants", "Appropriate methods"],
                                processSteps: ["Set goal", "Define audience", "Pick methods", "Prepare instruments", "Schedule"],
                                mnemonic: "G-A-M-I-S",
                                repeatedUniversityConcept: "Method choice depends on question type.",
                                previousPatternQuestion: "Research planning mainly ensures: validity and relevance.",
                                expectedMcqs: ["Participant screener belongs to: planning phase"],
                                quiz: {
                                    question: "What is the first critical step in research planning?",
                                    options: ["Design logo", "Define research goals", "Write final code", "Launch product"],
                                    answerIndex: 1,
                                    explanation: "Goals guide every later method and data decision."
                                }
                            },
                            {
                                id: "u2-c2",
                                title: "Research Goals",
                                definition: "Research goals state what the team needs to learn about users and product behavior.",
                                simpleExplanation: "Goals answer: what do we need to know and why?",
                                examExplanation: "Well-written goals are specific, measurable, and decision-oriented.",
                                keywords: ["research goal", "learning objective", "decision support"],
                                terminology: ["primary objective", "secondary objective", "insight questions"],
                                oneLineRevision: "No clear goals means unusable research data.",
                                confusedConcepts: "Goal vs hypothesis: goal is learning target, hypothesis is testable assumption.",
                                mcqTraps: "Writing broad goals like improve UX without metrics.",
                                realWorldExample: "Determine why students abandon registration before payment.",
                                examPoints: ["Specific", "Actionable", "Aligned with product decision"],
                                processSteps: ["Identify business need", "Formulate learning questions", "Prioritize"],
                                mnemonic: "I-F-P",
                                repeatedUniversityConcept: "Goal-method alignment is frequently tested.",
                                previousPatternQuestion: "Best research goal is: specific and decision-oriented.",
                                expectedMcqs: ["Research goals should be: clear and measurable"],
                                quiz: {
                                    question: "A good research goal should be:",
                                    options: ["Vague and broad", "Specific and actionable", "Only technical", "Only visual"],
                                    answerIndex: 1,
                                    explanation: "Specific goals produce actionable findings."
                                }
                            }
                        ]
                    },
                    {
                        id: "u2t1s2",
                        name: "Research Methods",
                        microConcepts: [{
                                id: "u2-c3",
                                title: "Interviews",
                                definition: "Interviews are direct conversations to uncover motivations, beliefs, and user experiences.",
                                simpleExplanation: "Ask users open-ended questions to learn deeply.",
                                examExplanation: "Interview strength is depth; weakness is smaller sample and interviewer bias.",
                                keywords: ["interviews", "qualitative", "open-ended", "moderated"],
                                terminology: ["probing", "semi-structured", "rapport"],
                                oneLineRevision: "Interviews provide why behind user behavior.",
                                confusedConcepts: "Interview vs survey: interview is depth, survey is breadth.",
                                mcqTraps: "Leading questions reduce reliability.",
                                realWorldExample: "Interviewing students reveals hidden confusion around grade portal.",
                                examPoints: ["Rich insight", "Time-intensive", "Requires moderation skill"],
                                processSteps: ["Prepare guide", "Recruit", "Conduct", "Transcribe", "Analyze"],
                                mnemonic: "P-R-C-T-A",
                                repeatedUniversityConcept: "Open questions improve qualitative depth.",
                                previousPatternQuestion: "Best method for detailed motivations: interviews.",
                                expectedMcqs: ["Interviews usually produce: qualitative data"],
                                quiz: {
                                    question: "Interviews are most useful when you need:",
                                    options: ["Only large-scale numeric trends", "Deep user motivations", "Compiler warnings", "Network logs"],
                                    answerIndex: 1,
                                    explanation: "Interviews capture rich qualitative insights and context."
                                }
                            },
                            {
                                id: "u2-c4",
                                title: "Surveys",
                                definition: "Surveys collect structured responses from many participants quickly.",
                                simpleExplanation: "Use forms to gather large-scale user feedback.",
                                examExplanation: "Surveys are ideal for trends and quantification but limited in depth.",
                                keywords: ["survey", "quantitative", "sample", "Likert scale"],
                                terminology: ["response bias", "closed-ended", "sampling"],
                                oneLineRevision: "Survey = breadth over depth.",
                                confusedConcepts: "Survey data may show what, not always why.",
                                mcqTraps: "Small biased sample treated as general population truth.",
                                realWorldExample: "Collecting satisfaction scores for hostel app updates.",
                                examPoints: ["Scalable", "Fast", "Needs careful question design"],
                                processSteps: ["Define objective", "Draft questions", "Pilot", "Distribute", "Analyze"],
                                mnemonic: "D-D-P-D-A",
                                repeatedUniversityConcept: "Likert scale appears repeatedly in MCQs.",
                                previousPatternQuestion: "Survey method is primarily: quantitative.",
                                expectedMcqs: ["Likert scale measures: attitude/intensity"],
                                quiz: {
                                    question: "Which method is best for collecting responses from many users quickly?",
                                    options: ["Survey", "Contextual interview only", "Code review", "Wireframe sketching"],
                                    answerIndex: 0,
                                    explanation: "Surveys provide scalable data collection for larger participant groups."
                                }
                            },
                            {
                                id: "u2-c5",
                                title: "Usability Testing",
                                definition: "Usability testing observes users performing tasks to identify friction and usability issues.",
                                simpleExplanation: "Watch users do real tasks and note failures.",
                                examExplanation: "Metrics include task success, time on task, error rate, and satisfaction.",
                                keywords: ["usability testing", "task success", "error rate", "efficiency"],
                                terminology: ["moderated", "think-aloud", "scenario task"],
                                oneLineRevision: "Test behavior, not opinions only.",
                                confusedConcepts: "Usability testing vs user interview: behavior vs self-report.",
                                mcqTraps: "Testing with only teammates instead of representative users.",
                                realWorldExample: "Users fail to reset password due to hidden link.",
                                examPoints: ["Task-based", "Evidence-driven", "Repeat after iteration"],
                                processSteps: ["Set tasks", "Recruit users", "Run sessions", "Capture metrics", "Fix"],
                                mnemonic: "S-R-R-C-F",
                                repeatedUniversityConcept: "Task success rate frequently tested.",
                                previousPatternQuestion: "Usability testing primarily evaluates: ease of task completion.",
                                expectedMcqs: ["Think-aloud protocol belongs to: usability testing"],
                                quiz: {
                                    question: "Which metric is common in usability testing?",
                                    options: ["Disk partition size", "Task success rate", "CPU clock speed", "Cache associativity"],
                                    answerIndex: 1,
                                    explanation: "Task success rate is a core usability metric."
                                }
                            }
                        ]
                    },
                    {
                        id: "u2t1s3",
                        name: "Analysis, Artifacts, and Ideation",
                        microConcepts: [{
                                id: "u2-c6",
                                title: "Research Findings",
                                definition: "Research findings are synthesized insights drawn from collected user data.",
                                simpleExplanation: "Convert raw data into clear insights and actions.",
                                examExplanation: "Findings should be evidence-backed and mapped to design decisions.",
                                keywords: ["insights", "themes", "evidence", "synthesis"],
                                terminology: ["affinity mapping", "triangulation", "signal vs noise"],
                                oneLineRevision: "Findings are useful only when actionable.",
                                confusedConcepts: "Data vs finding: data is raw; finding is interpreted insight.",
                                mcqTraps: "Treating anecdote as universal finding.",
                                realWorldExample: "Repeated login failure due to unclear password criteria.",
                                examPoints: ["Evidence-backed", "Pattern-based", "Action-oriented"],
                                processSteps: ["Aggregate data", "Cluster themes", "Validate patterns", "Write insights"],
                                mnemonic: "A-C-V-W",
                                repeatedUniversityConcept: "Affinity mapping linked with synthesis.",
                                previousPatternQuestion: "Primary purpose of synthesis: identify patterns.",
                                expectedMcqs: ["Affinity mapping is used for: organizing qualitative data"],
                                quiz: {
                                    question: "What converts raw interview notes into usable insights?",
                                    options: ["Database migration", "Research synthesis", "Color palette selection", "Source compilation"],
                                    answerIndex: 1,
                                    explanation: "Synthesis transforms raw data into actionable findings."
                                }
                            },
                            {
                                id: "u2-c7",
                                title: "User Personas",
                                definition: "Personas are evidence-based archetypes representing key user groups.",
                                simpleExplanation: "A persona summarizes user goals, behavior, and pain points.",
                                examExplanation: "Personas guide design decisions and prevent generic assumptions.",
                                keywords: ["persona", "archetype", "user segment", "goals"],
                                terminology: ["primary persona", "secondary persona", "proto-persona"],
                                oneLineRevision: "Personas should be data-driven, not fictional stereotypes.",
                                confusedConcepts: "Persona vs target audience: persona is detailed and behavior-rich.",
                                mcqTraps: "Creating persona without user research evidence.",
                                realWorldExample: "Hosteller student persona needing quick fee reminders on low bandwidth.",
                                examPoints: ["Behavioral patterns", "Needs and frustrations", "Decision reference"],
                                processSteps: ["Gather data", "Segment users", "Define attributes", "Draft persona"],
                                mnemonic: "G-S-D-D",
                                repeatedUniversityConcept: "Primary persona concept repeats often.",
                                previousPatternQuestion: "Persona should be based on: research data.",
                                expectedMcqs: ["Persona includes: goals, pain points, behavior"],
                                quiz: {
                                    question: "A strong persona is primarily built from:",
                                    options: ["Designer assumptions", "Research evidence", "Random internet posts", "Brand colors"],
                                    answerIndex: 1,
                                    explanation: "Personas must be grounded in observed and researched user data."
                                }
                            },
                            {
                                id: "u2-c8",
                                title: "Competitive Audits",
                                definition: "Competitive audits evaluate competitor products to identify opportunities and gaps.",
                                simpleExplanation: "Study what others do well or poorly.",
                                examExplanation: "MCQs test purpose: benchmarking features, UX patterns, and differentiation.",
                                keywords: ["competitive audit", "benchmark", "gap analysis", "differentiation"],
                                terminology: ["feature parity", "heuristic score", "positioning"],
                                oneLineRevision: "Audit competitors to design smarter, not copy blindly.",
                                confusedConcepts: "Competitive audit vs plagiarism: audit informs strategy, not cloning.",
                                mcqTraps: "Copying competitor flow without user context validation.",
                                realWorldExample: "Comparing three edtech apps for quiz navigation quality.",
                                examPoints: ["Strength/weakness mapping", "Opportunity discovery", "Market awareness"],
                                processSteps: ["Select competitors", "Define criteria", "Evaluate", "Summarize gaps"],
                                mnemonic: "S-D-E-S",
                                repeatedUniversityConcept: "Gap analysis appears in objective questions.",
                                previousPatternQuestion: "Competitive audit helps identify: design opportunities.",
                                expectedMcqs: ["Benchmarking is part of: competitive audit"],
                                quiz: {
                                    question: "Competitive audit is mainly used to:",
                                    options: ["Write backend API", "Compare market solutions and find gaps", "Create random icons", "Avoid user testing"],
                                    answerIndex: 1,
                                    explanation: "Audits benchmark existing solutions and reveal opportunities."
                                }
                            },
                            {
                                id: "u2-c9",
                                title: "Journey Maps",
                                definition: "Journey maps visualize end-to-end user interactions, emotions, and pain points across stages.",
                                simpleExplanation: "It is a timeline of user experience from start to finish.",
                                examExplanation: "Stages, touchpoints, feelings, and opportunities are key components in MCQs.",
                                keywords: ["journey map", "touchpoints", "stages", "pain points"],
                                terminology: ["moments of truth", "backstage", "frontstage"],
                                oneLineRevision: "Journey map reveals where user friction spikes.",
                                confusedConcepts: "User flow vs journey map: flow maps interface steps; journey map maps broader experience.",
                                mcqTraps: "Ignoring emotional state in journey mapping.",
                                realWorldExample: "Admission journey from notification to payment completion.",
                                examPoints: ["Stage-wise", "Emotion-aware", "Opportunity-focused"],
                                processSteps: ["Define persona", "List stages", "Capture touchpoints", "Add pain/opportunity"],
                                mnemonic: "D-L-C-A",
                                repeatedUniversityConcept: "Touchpoints and pain points are frequent terms.",
                                previousPatternQuestion: "Journey map usually includes: emotions and touchpoints.",
                                expectedMcqs: ["Journey mapping supports: service improvement"],
                                quiz: {
                                    question: "Which element is essential in a journey map?",
                                    options: ["Compiler flags", "Touchpoints and user emotions", "Kernel memory", "Hash function"],
                                    answerIndex: 1,
                                    explanation: "Journey maps track user touchpoints and emotional experience across stages."
                                }
                            },
                            {
                                id: "u2-c10",
                                title: "Brainstorming and Sketching Design Ideas",
                                definition: "Brainstorming generates ideas collaboratively; sketching quickly visualizes early solution concepts.",
                                simpleExplanation: "Think many ideas, then sketch rough interface options.",
                                examExplanation: "Brainstorming is divergent; sketching externalizes ideas for quick discussion.",
                                keywords: ["brainstorming", "sketching", "divergent", "concept generation"],
                                terminology: ["crazy 8s", "thumbnail sketch", "dot voting"],
                                oneLineRevision: "Sketch first, polish later.",
                                confusedConcepts: "Sketching vs wireframing: sketching is rough and fast, wireframing is structured layout planning.",
                                mcqTraps: "Rejecting rough ideas before discussion.",
                                realWorldExample: "Paper sketches for dashboard card layout alternatives.",
                                examPoints: ["Speed", "Quantity", "Collaborative creativity"],
                                processSteps: ["Define challenge", "Generate ideas", "Sketch options", "Select promising"],
                                mnemonic: "D-G-S-S",
                                repeatedUniversityConcept: "Divergent and convergent phases are exam favorites.",
                                previousPatternQuestion: "Sketching is mainly done in: early ideation.",
                                expectedMcqs: ["Crazy 8s is an: ideation method"],
                                quiz: {
                                    question: "Sketching is most useful for:",
                                    options: ["High-fidelity final delivery", "Rapid early idea visualization", "Server deployment", "Data encryption"],
                                    answerIndex: 1,
                                    explanation: "Sketching quickly externalizes concepts before detailed design."
                                }
                            }
                        ]
                    }
                ]
            }]
        },
        {
            id: "u3",
            name: "Unit 3: Wireframing and Low-Fidelity Prototyping",
            topics: [{
                id: "u3t1",
                name: "Wireframing Fundamentals and Flows",
                subtopics: [{
                        id: "u3t1s1",
                        name: "Wireframes, Mockups, Prototypes",
                        microConcepts: [{
                                id: "u3-c1",
                                title: "Wireframes",
                                definition: "Wireframes are low-detail structural layouts showing content hierarchy and placement.",
                                simpleExplanation: "Blueprint of a screen without final visuals.",
                                examExplanation: "Wireframes focus on layout and function, not final colors or imagery.",
                                keywords: ["wireframe", "layout", "hierarchy", "structure"],
                                terminology: ["placeholder", "content blocks", "navigation skeleton"],
                                oneLineRevision: "Wireframes define what goes where.",
                                confusedConcepts: "Wireframe vs mockup: wireframe is structure, mockup is visual styling.",
                                mcqTraps: "Treating wireframe as clickable final prototype.",
                                realWorldExample: "Course page structure with header, filters, cards, footer.",
                                examPoints: ["Low detail", "Function oriented", "Fast to modify"],
                                processSteps: ["Define screens", "Place components", "Check flow", "Review"],
                                mnemonic: "D-P-C-R",
                                repeatedUniversityConcept: "Wireframe-purpose distinction appears often.",
                                previousPatternQuestion: "Wireframe primarily shows: structure.",
                                expectedMcqs: ["Wireframes are usually: low fidelity"],
                                quiz: {
                                    question: "Main purpose of a wireframe is to show:",
                                    options: ["Final brand palette", "Screen structure and layout", "Production database schema", "SEO metadata"],
                                    answerIndex: 1,
                                    explanation: "Wireframes communicate structure and content hierarchy."
                                }
                            },
                            {
                                id: "u3-c2",
                                title: "Mockups",
                                definition: "Mockups are static high-detail visual representations of UI screens.",
                                simpleExplanation: "They show how the final interface will look.",
                                examExplanation: "Mockups include typography, colors, spacing, and visual hierarchy.",
                                keywords: ["mockup", "visual design", "UI", "static screen"],
                                terminology: ["style guide", "visual hierarchy", "pixel-perfect"],
                                oneLineRevision: "Mockups answer visual look and feel.",
                                confusedConcepts: "Mockup vs prototype: mockup may be non-interactive; prototype simulates interaction.",
                                mcqTraps: "Assuming mockup itself tests usability flow fully.",
                                realWorldExample: "Styled student dashboard with icons and typography.",
                                examPoints: ["Visual fidelity", "Brand expression", "Communication with stakeholders"],
                                processSteps: ["Apply style", "Refine spacing", "Align components", "Present"],
                                mnemonic: "A-R-A-P",
                                repeatedUniversityConcept: "Mockup vs wireframe comparison recurring.",
                                previousPatternQuestion: "Mockups are mainly used to present: final visual style.",
                                expectedMcqs: ["Mockup is generally: static visual representation"],
                                quiz: {
                                    question: "Which stage emphasizes final visual styling the most?",
                                    options: ["Wireframe", "Mockup", "Empathize", "Survey"],
                                    answerIndex: 1,
                                    explanation: "Mockups focus on high-detail visual appearance."
                                }
                            },
                            {
                                id: "u3-c3",
                                title: "Low-Fidelity Prototypes",
                                definition: "Low-fidelity prototypes are quick, simplified interaction models for early feedback.",
                                simpleExplanation: "Rough interactive versions to test core flow.",
                                examExplanation: "Low fidelity is fast and cheap, ideal for early iteration.",
                                keywords: ["low-fidelity", "prototype", "rapid iteration", "early testing"],
                                terminology: ["click-through", "draft interactions", "lean validation"],
                                oneLineRevision: "Low-fidelity minimizes waste in early design.",
                                confusedConcepts: "Low-fidelity prototype vs wireframe: prototype includes interactions.",
                                mcqTraps: "Believing low fidelity is low value.",
                                realWorldExample: "Clickable paper flow for hostel complaint submission.",
                                examPoints: ["Fast", "Low cost", "High learning value"],
                                processSteps: ["Choose key tasks", "Build rough screens", "Link interactions", "Test"],
                                mnemonic: "C-B-L-T",
                                repeatedUniversityConcept: "Early validation with low fidelity asked frequently.",
                                previousPatternQuestion: "Low-fidelity prototypes are useful for: quick feedback.",
                                expectedMcqs: ["Low-fidelity prototype supports: rapid iteration"],
                                quiz: {
                                    question: "Why use low-fidelity prototypes early?",
                                    options: ["To avoid user feedback", "To validate flows quickly at low cost", "To finalize production assets", "To replace design system"],
                                    answerIndex: 1,
                                    explanation: "They enable rapid, low-cost learning and early correction."
                                }
                            }
                        ]
                    },
                    {
                        id: "u3t1s2",
                        name: "Paper, Digital, Flows, Feedback, Tools",
                        microConcepts: [{
                                id: "u3-c4",
                                title: "Paper Prototyping",
                                definition: "Paper prototyping uses hand-drawn interfaces to simulate user interactions rapidly.",
                                simpleExplanation: "Sketch screens on paper and test user tasks.",
                                examExplanation: "Best for ideation speed and team collaboration in early stages.",
                                keywords: ["paper prototype", "rapid testing", "manual simulation"],
                                terminology: ["wizard-of-oz", "paper screens", "scenario walkthrough"],
                                oneLineRevision: "Paper prototypes maximize speed and reduce fear of change.",
                                confusedConcepts: "Paper prototype is not equal to final visual quality.",
                                mcqTraps: "Ignoring task realism while testing paper flows.",
                                realWorldExample: "Paper navigation test for exam form filling process.",
                                examPoints: ["Very low cost", "Quick edits", "Great for early concept checks"],
                                processSteps: ["Sketch screens", "Assign tasks", "Simulate interactions", "Record issues"],
                                mnemonic: "S-A-S-R",
                                repeatedUniversityConcept: "Wizard-of-Oz may appear in MCQs.",
                                previousPatternQuestion: "Paper prototyping is mostly used in: early design stages.",
                                expectedMcqs: ["Paper prototype is: low fidelity"],
                                quiz: {
                                    question: "Major advantage of paper prototyping is:",
                                    options: ["High visual polish", "Very fast and inexpensive iteration", "Production-ready assets", "Automatic analytics"],
                                    answerIndex: 1,
                                    explanation: "Paper prototypes are ideal for cheap and fast iteration."
                                }
                            },
                            {
                                id: "u3-c5",
                                title: "Digital Prototyping",
                                definition: "Digital prototyping creates interactive screen simulations using tools like Figma and Adobe XD.",
                                simpleExplanation: "Build clickable screen flows digitally.",
                                examExplanation: "Supports realistic interactions and stakeholder communication.",
                                keywords: ["digital prototype", "clickable", "interaction", "tool-based"],
                                terminology: ["hotspots", "transition", "prototype mode"],
                                oneLineRevision: "Digital prototypes bridge concept and implementation.",
                                confusedConcepts: "Digital prototype vs coded product: prototype simulates but may not contain logic.",
                                mcqTraps: "Assuming clickable flow means fully usable product.",
                                realWorldExample: "Figma prototype for semester registration journey.",
                                examPoints: ["Better fidelity", "Shareable", "Interactive demo"],
                                processSteps: ["Design screens", "Add links", "Set transitions", "Test with users"],
                                mnemonic: "D-A-S-T",
                                repeatedUniversityConcept: "Hotspot and transition terms are commonly tested.",
                                previousPatternQuestion: "Digital prototyping tool example: Figma.",
                                expectedMcqs: ["Prototype mode in Figma is used for: interaction flow"],
                                quiz: {
                                    question: "Digital prototyping is best described as:",
                                    options: ["Only text documentation", "Interactive simulation of UI behavior", "Database optimization", "Security patching"],
                                    answerIndex: 1,
                                    explanation: "Digital prototypes simulate interaction before implementation."
                                }
                            },
                            {
                                id: "u3-c6",
                                title: "User Flows and Interaction Flows",
                                definition: "User flows map path users take to achieve goals; interaction flows detail screen-level behavior and transitions.",
                                simpleExplanation: "Flow diagrams show how users move from start to completion.",
                                examExplanation: "User flow = journey path, interaction flow = detailed interactions.",
                                keywords: ["user flow", "interaction flow", "decision points", "path"],
                                terminology: ["entry point", "exit point", "branching"],
                                oneLineRevision: "Clear flows reduce user confusion and drop-off.",
                                confusedConcepts: "User flow vs journey map distinction is common exam trap.",
                                mcqTraps: "Missing alternate/error paths in flow diagrams.",
                                realWorldExample: "Login -> OTP -> dashboard -> quiz attempt flow.",
                                examPoints: ["Sequence clarity", "Decision branches", "Error handling"],
                                processSteps: ["Define goal", "Map steps", "Add branches", "Validate"],
                                mnemonic: "D-M-A-V",
                                repeatedUniversityConcept: "Flow ordering questions are frequent.",
                                previousPatternQuestion: "User flow mainly represents: task path sequence.",
                                expectedMcqs: ["Branching in flow indicates: alternate user paths"],
                                quiz: {
                                    question: "Which artifact best shows decision branches in a task path?",
                                    options: ["Moodboard", "User flow diagram", "Typography scale", "Color wheel"],
                                    answerIndex: 1,
                                    explanation: "User flow diagrams map paths and decision points."
                                }
                            },
                            {
                                id: "u3-c7",
                                title: "Feedback Cycles and Wireframe Iteration",
                                definition: "Feedback cycles collect evaluation input and iterate wireframes to improve usability.",
                                simpleExplanation: "Review, improve, and retest repeatedly.",
                                examExplanation: "Iteration is central to UX quality and reduces costly late-stage changes.",
                                keywords: ["feedback cycle", "iteration", "refinement", "usability"],
                                terminology: ["design critique", "iteration loop", "versioning"],
                                oneLineRevision: "Iterate early, iterate often.",
                                confusedConcepts: "Revision is not failure; it is evidence-based improvement.",
                                mcqTraps: "One-time wireframe approval without testing.",
                                realWorldExample: "Repositioning CTA after low click-through in test.",
                                examPoints: ["Feedback source quality", "Prioritized fixes", "Version tracking"],
                                processSteps: ["Collect feedback", "Prioritize issues", "Revise wireframe", "Retest"],
                                mnemonic: "C-P-R-R",
                                repeatedUniversityConcept: "Iteration loop appears across units.",
                                previousPatternQuestion: "Feedback cycles help in: continuous improvement.",
                                expectedMcqs: ["Iteration mainly reduces: usability risk"],
                                quiz: {
                                    question: "What is the core benefit of wireframe iteration?",
                                    options: ["Immediate coding", "Progressive usability improvement", "Skipping testing", "Higher server memory"],
                                    answerIndex: 1,
                                    explanation: "Iteration integrates feedback to improve usability over cycles."
                                }
                            },
                            {
                                id: "u3-c8",
                                title: "Figma Introduction and Adobe XD Introduction",
                                definition: "Figma and Adobe XD are design/prototyping tools for creating interfaces and interactions.",
                                simpleExplanation: "Both help design screens and interactive prototypes.",
                                examExplanation: "MCQs test collaboration, cloud workflow, components, and prototyping features.",
                                keywords: ["Figma", "Adobe XD", "components", "prototyping tools"],
                                terminology: ["auto layout", "assets", "co-editing"],
                                oneLineRevision: "Figma is known for browser collaboration; XD for Adobe ecosystem integration.",
                                confusedConcepts: "Tool choice depends on workflow, team, and project needs.",
                                mcqTraps: "Assuming any one tool is universally superior.",
                                realWorldExample: "Team co-edits screens in Figma during review session.",
                                examPoints: ["Tool features", "Collaboration", "Plugin ecosystem"],
                                processSteps: ["Create file", "Build frames", "Add components", "Prototype links", "Share"],
                                mnemonic: "C-B-A-P-S",
                                repeatedUniversityConcept: "Figma feature-based objective questions are common.",
                                previousPatternQuestion: "Which tool supports live collaboration strongly? Figma.",
                                expectedMcqs: ["Auto layout is associated with: Figma"],
                                quiz: {
                                    question: "Which statement is accurate?",
                                    options: ["Figma cannot prototype", "Figma supports collaborative design workflows", "Adobe XD is a coding compiler", "Both tools are only for backend"],
                                    answerIndex: 1,
                                    explanation: "Figma is widely used for collaborative design and prototyping."
                                }
                            }
                        ]
                    }
                ]
            }]
        },
        {
            id: "u4",
            name: "Unit 4: High-Fidelity Prototyping and Design Systems",
            topics: [{
                id: "u4t1",
                name: "Visual UI Principles and Systems",
                subtopics: [{
                        id: "u4t1s1",
                        name: "High-Fidelity Design Concepts",
                        microConcepts: [{
                                id: "u4-c1",
                                title: "High-Fidelity Mockups",
                                definition: "High-fidelity mockups closely represent final product visuals and interaction cues.",
                                simpleExplanation: "Near-final look used for review and handoff.",
                                examExplanation: "High fidelity includes realistic typography, color, spacing, and component behavior.",
                                keywords: ["high-fidelity", "visual realism", "high detail", "handoff"],
                                terminology: ["pixel alignment", "visual polish", "design handoff"],
                                oneLineRevision: "High-fidelity mockups simulate final UI quality.",
                                confusedConcepts: "High fidelity is not always needed in early ideation.",
                                mcqTraps: "Using high fidelity too early increases rework risk.",
                                realWorldExample: "Final dashboard design with exact typography and spacing.",
                                examPoints: ["Visual precision", "Stakeholder communication", "Developer handoff"],
                                processSteps: ["Refine layout", "Apply style system", "Validate consistency", "Prepare specs"],
                                mnemonic: "R-A-V-P",
                                repeatedUniversityConcept: "Fidelity level selection appears in MCQs.",
                                previousPatternQuestion: "High-fidelity mockups are closest to: final UI.",
                                expectedMcqs: ["High fidelity includes: detailed styling"],
                                quiz: {
                                    question: "High-fidelity mockups are mainly used when:",
                                    options: ["No design decisions exist", "Detailed UI communication is required", "Only backend testing is running", "No visuals are needed"],
                                    answerIndex: 1,
                                    explanation: "They provide near-final visuals for review and implementation."
                                }
                            },
                            {
                                id: "u4-c2",
                                title: "UI Design Principles",
                                definition: "UI principles include consistency, hierarchy, feedback, clarity, and simplicity.",
                                simpleExplanation: "Good UI makes actions obvious and predictable.",
                                examExplanation: "MCQs often test recognition of principles in practical scenarios.",
                                keywords: ["consistency", "hierarchy", "feedback", "clarity"],
                                terminology: ["contrast", "alignment", "proximity", "visual balance"],
                                oneLineRevision: "Consistent and clear interfaces reduce cognitive effort.",
                                confusedConcepts: "Simplicity is not lack of features; it is reducing unnecessary complexity.",
                                mcqTraps: "Decorative UI without usability logic.",
                                realWorldExample: "Consistent button styles across all forms.",
                                examPoints: ["Predictability", "Visual hierarchy", "Action feedback"],
                                processSteps: ["Define rules", "Apply patterns", "Review consistency", "Improve clarity"],
                                mnemonic: "D-A-R-I",
                                repeatedUniversityConcept: "Consistency principle appears repeatedly.",
                                previousPatternQuestion: "UI principle improving scanability: visual hierarchy.",
                                expectedMcqs: ["Feedback principle means: system responds to user action"],
                                quiz: {
                                    question: "Which is a core UI principle?",
                                    options: ["Random styling", "Consistency", "Code obfuscation", "Packet routing"],
                                    answerIndex: 1,
                                    explanation: "Consistency is fundamental for learnability and usability."
                                }
                            },
                            {
                                id: "u4-c3",
                                title: "Typography, Layout Grids, Color Theory, Spacing, Icons",
                                definition: "These visual building blocks create readable, balanced, and meaningful interfaces.",
                                simpleExplanation: "Typography improves readability, grids structure layout, colors convey meaning, spacing improves clarity, icons support recognition.",
                                examExplanation: "MCQs test font hierarchy, grid alignment, color contrast, whitespace, and icon consistency.",
                                keywords: ["typography", "layout grid", "color theory", "spacing", "icons"],
                                terminology: ["line height", "baseline grid", "hue saturation value", "whitespace", "iconography"],
                                oneLineRevision: "Visual rhythm = typography + grid + spacing + consistent color/icon system.",
                                confusedConcepts: "Contrast vs saturation, spacing vs margin/padding confusion.",
                                mcqTraps: "Using too many font sizes and inconsistent icon styles.",
                                realWorldExample: "12-column grid for desktop and 4-column mobile layouts.",
                                examPoints: ["Readability", "Alignment", "Contrast accessibility", "Visual consistency"],
                                processSteps: ["Set type scale", "Define grid", "Build color palette", "Set spacing tokens", "Choose icon set"],
                                mnemonic: "T-G-C-S-I",
                                repeatedUniversityConcept: "Color contrast and typography hierarchy are high-frequency.",
                                previousPatternQuestion: "Purpose of layout grid: alignment and consistency.",
                                expectedMcqs: ["Whitespace improves: readability and focus"],
                                quiz: {
                                    question: "What is a major benefit of layout grids?",
                                    options: ["Reduce usability", "Ensure consistent alignment", "Increase random placement", "Replace user testing"],
                                    answerIndex: 1,
                                    explanation: "Grids provide structural consistency and visual order."
                                }
                            }
                        ]
                    },
                    {
                        id: "u4t1s2",
                        name: "Design Systems and Responsive Design",
                        microConcepts: [{
                                id: "u4-c4",
                                title: "Component Libraries and Design Systems",
                                definition: "Component libraries provide reusable UI parts; design systems include components, guidelines, and design principles.",
                                simpleExplanation: "Reusable building blocks plus usage rules.",
                                examExplanation: "Design systems increase consistency, speed, and scalability across products.",
                                keywords: ["component library", "design system", "tokens", "reusability"],
                                terminology: ["atomic design", "design token", "variant", "documentation"],
                                oneLineRevision: "Design system = reusable components + standards + governance.",
                                confusedConcepts: "Component library is subset of design system.",
                                mcqTraps: "Confusing style guide with full design system.",
                                realWorldExample: "Shared button/input/card components used across student apps.",
                                examPoints: ["Consistency", "Faster development", "Cross-team alignment"],
                                processSteps: ["Define tokens", "Build components", "Document usage", "Maintain versions"],
                                mnemonic: "D-B-D-M",
                                repeatedUniversityConcept: "Design token concept appears in objective exams.",
                                previousPatternQuestion: "Design system main benefit: consistent scalable UI.",
                                expectedMcqs: ["Design token stores: reusable style values"],
                                quiz: {
                                    question: "Which statement is true?",
                                    options: ["Design system only means color palette", "Component library is part of a design system", "Design systems reduce consistency", "Tokens are backend APIs"],
                                    answerIndex: 1,
                                    explanation: "A component library is one core part of a broader design system."
                                }
                            },
                            {
                                id: "u4-c5",
                                title: "Responsive Design and Mobile-First UI",
                                definition: "Responsive design adapts interfaces across screen sizes; mobile-first starts designing from smallest screens.",
                                simpleExplanation: "Design should work smoothly on phone, tablet, and desktop.",
                                examExplanation: "Media queries, flexible grids, and mobile-first strategy are frequent MCQ areas.",
                                keywords: ["responsive design", "mobile-first", "breakpoints", "fluid layout"],
                                terminology: ["viewport", "media query", "adaptive", "progressive enhancement"],
                                oneLineRevision: "Mobile-first ensures essential content and performance first.",
                                confusedConcepts: "Responsive vs adaptive: responsive is fluid; adaptive switches fixed layouts.",
                                mcqTraps: "Desktop-first complexity copied directly to mobile.",
                                realWorldExample: "Quiz dashboard stacks cards on mobile, grid on desktop.",
                                examPoints: ["Breakpoint planning", "Touch-friendly targets", "Content prioritization"],
                                processSteps: ["Design mobile", "Add breakpoints", "Scale components", "Test devices"],
                                mnemonic: "D-A-S-T",
                                repeatedUniversityConcept: "Mobile-first vs responsive distinction repeated.",
                                previousPatternQuestion: "Mobile-first means: start from smallest screen constraints.",
                                expectedMcqs: ["Media queries are used for: responsive behavior"],
                                quiz: {
                                    question: "Mobile-first design approach starts with:",
                                    options: ["4K desktop screen", "Smallest screen constraints", "Server architecture", "Data warehouse"],
                                    answerIndex: 1,
                                    explanation: "Mobile-first prioritizes core experience for small screens first."
                                }
                            },
                            {
                                id: "u4-c6",
                                title: "Hands-on Figma Screen Design",
                                definition: "Hands-on Figma design involves creating frames, components, auto layout, and interactive prototypes.",
                                simpleExplanation: "Build real screen designs with reusable elements in Figma.",
                                examExplanation: "Objective questions may ask frame, component, auto layout, and prototyping workflows.",
                                keywords: ["frames", "components", "auto layout", "prototype links"],
                                terminology: ["instance", "constraints", "variants", "shared library"],
                                oneLineRevision: "Figma workflow: frame -> components -> auto layout -> prototype.",
                                confusedConcepts: "Frame vs group: frame supports constraints and layout behavior.",
                                mcqTraps: "Using detached components causing inconsistency.",
                                realWorldExample: "Creating reusable quiz card component with variants.",
                                examPoints: ["Structured hierarchy", "Reusable components", "Consistent spacing"],
                                processSteps: ["Create frame", "Build components", "Apply auto layout", "Connect interactions", "Share"],
                                mnemonic: "C-B-A-C-S",
                                repeatedUniversityConcept: "Auto layout and constraints are frequent in feature-based MCQs.",
                                previousPatternQuestion: "Auto layout helps in: responsive spacing and alignment.",
                                expectedMcqs: ["Component instance is: reusable linked copy"],
                                quiz: {
                                    question: "In Figma, components mainly help with:",
                                    options: ["Inconsistent UI", "Reusable and consistent UI elements", "Database indexing", "Video compression"],
                                    answerIndex: 1,
                                    explanation: "Components improve consistency and maintenance speed."
                                }
                            }
                        ]
                    }
                ]
            }]
        },
        {
            id: "u5",
            name: "Unit 5: UI Development and Web Interface Implementation",
            topics: [{
                id: "u5t1",
                name: "Web Foundations and Frameworks",
                subtopics: [{
                        id: "u5t1s1",
                        name: "HTML, CSS, JavaScript Basics",
                        microConcepts: [{
                                id: "u5-c1",
                                title: "HTML Basics",
                                definition: "HTML structures web content using semantic tags and document hierarchy.",
                                simpleExplanation: "HTML gives structure to headings, paragraphs, forms, and links.",
                                examExplanation: "MCQs test tags, semantic elements, forms, and document structure.",
                                keywords: ["HTML", "semantic tags", "DOM", "forms"],
                                terminology: ["<header>", "<section>", "<article>", "<form>"],
                                oneLineRevision: "HTML defines structure, not presentation.",
                                confusedConcepts: "HTML vs CSS: structure vs style.",
                                mcqTraps: "Using non-semantic div for everything.",
                                realWorldExample: "Semantic layout for course page improves accessibility and SEO.",
                                examPoints: ["Semantic meaning", "Document hierarchy", "Form controls"],
                                processSteps: ["Set document", "Add semantic sections", "Insert content", "Validate"],
                                mnemonic: "S-A-I-V",
                                repeatedUniversityConcept: "Semantic tags and form elements repeated often.",
                                previousPatternQuestion: "HTML stands for: HyperText Markup Language.",
                                expectedMcqs: ["<section> is used for: thematic grouping"],
                                quiz: {
                                    question: "HTML is primarily responsible for:",
                                    options: ["Styling", "Structure", "Animation engine", "Database query"],
                                    answerIndex: 1,
                                    explanation: "HTML provides structural markup of web content."
                                }
                            },
                            {
                                id: "u5-c2",
                                title: "CSS Basics",
                                definition: "CSS controls presentation, layout, colors, typography, and spacing of web interfaces.",
                                simpleExplanation: "CSS styles HTML to make it look polished and readable.",
                                examExplanation: "Common MCQs include selectors, box model, display, positioning, and specificity.",
                                keywords: ["CSS", "selectors", "box model", "specificity"],
                                terminology: ["margin", "padding", "flexbox", "grid"],
                                oneLineRevision: "CSS defines look, layout, and responsive behavior.",
                                confusedConcepts: "Margin vs padding and relative vs absolute positioning.",
                                mcqTraps: "Ignoring specificity causes style conflicts.",
                                realWorldExample: "Using flexbox to align navigation elements.",
                                examPoints: ["Cascade order", "Responsive layout", "Visual consistency"],
                                processSteps: ["Select element", "Apply properties", "Test responsive", "Refine"],
                                mnemonic: "S-A-T-R",
                                repeatedUniversityConcept: "Box model and specificity appear frequently.",
                                previousPatternQuestion: "Box model includes: content, padding, border, margin.",
                                expectedMcqs: ["display:flex is used for: flexible layout"],
                                quiz: {
                                    question: "Which CSS concept determines which style rule wins?",
                                    options: ["Specificity", "Compilation", "Threading", "Encryption"],
                                    answerIndex: 0,
                                    explanation: "Specificity and cascade determine final applied styles."
                                }
                            },
                            {
                                id: "u5-c3",
                                title: "JavaScript Basics",
                                definition: "JavaScript adds interactivity, logic, and dynamic behavior to web pages.",
                                simpleExplanation: "JS handles clicks, data changes, and dynamic updates.",
                                examExplanation: "Objective questions include variables, functions, events, DOM manipulation.",
                                keywords: ["JavaScript", "events", "DOM", "functions"],
                                terminology: ["let/const", "event listener", "callback", "conditionals"],
                                oneLineRevision: "JavaScript makes UI dynamic and interactive.",
                                confusedConcepts: "== vs === and var vs let confusion is common.",
                                mcqTraps: "Mixing synchronous assumptions with asynchronous behaviors.",
                                realWorldExample: "Auto-scoring quiz answers on button click.",
                                examPoints: ["Event handling", "State changes", "DOM updates"],
                                processSteps: ["Select element", "Attach event", "Run logic", "Update UI"],
                                mnemonic: "S-A-R-U",
                                repeatedUniversityConcept: "DOM event handling is repeated in exams.",
                                previousPatternQuestion: "Which language adds interactivity to web pages? JavaScript.",
                                expectedMcqs: ["addEventListener is used for: handling events"],
                                quiz: {
                                    question: "What is JavaScript commonly used for in UI development?",
                                    options: ["Only static markup", "Dynamic interactions and logic", "Compiling CSS", "Database storage only"],
                                    answerIndex: 1,
                                    explanation: "JavaScript enables dynamic behavior and user interaction handling."
                                }
                            }
                        ]
                    },
                    {
                        id: "u5t1s2",
                        name: "Bootstrap, Tailwind, Dynamic UI, Integration",
                        microConcepts: [{
                                id: "u5-c4",
                                title: "Bootstrap Framework",
                                definition: "Bootstrap is a component-based CSS framework with predefined classes and responsive grid system.",
                                simpleExplanation: "It helps build responsive UI quickly with ready classes/components.",
                                examExplanation: "MCQs ask about grid system, utility classes, and component usage.",
                                keywords: ["Bootstrap", "grid", "components", "responsive classes"],
                                terminology: ["container", "row", "col", "utility class"],
                                oneLineRevision: "Bootstrap = quick UI through predefined components.",
                                confusedConcepts: "Bootstrap vs custom CSS flexibility trade-off.",
                                mcqTraps: "Overriding many classes may create maintenance issues.",
                                realWorldExample: "Building responsive navbar with Bootstrap components.",
                                examPoints: ["Fast prototyping", "Consistent components", "Grid responsiveness"],
                                processSteps: ["Add Bootstrap", "Use grid", "Apply components", "Customize"],
                                mnemonic: "A-U-A-C",
                                repeatedUniversityConcept: "Bootstrap grid terminology is exam-relevant.",
                                previousPatternQuestion: "Bootstrap column class example: col-md-6.",
                                expectedMcqs: ["Bootstrap provides: ready UI components"],
                                quiz: {
                                    question: "Bootstrap is mainly known for:",
                                    options: ["Backend ORM", "Ready responsive UI components", "Machine learning model", "Compiler optimization"],
                                    answerIndex: 1,
                                    explanation: "Bootstrap accelerates UI development with reusable classes/components."
                                }
                            },
                            {
                                id: "u5-c5",
                                title: "Tailwind CSS Framework",
                                definition: "Tailwind CSS is a utility-first framework using low-level classes to build custom designs rapidly.",
                                simpleExplanation: "Style directly in markup with utility classes.",
                                examExplanation: "MCQs compare Tailwind utility-first model vs Bootstrap component-first style.",
                                keywords: ["Tailwind CSS", "utility-first", "atomic classes", "custom design"],
                                terminology: ["utility classes", "config", "JIT", "responsive utilities"],
                                oneLineRevision: "Tailwind offers high customization with utility composition.",
                                confusedConcepts: "Tailwind is not a prebuilt component library by default.",
                                mcqTraps: "Assuming Tailwind equals inline CSS; it is systematic utility design.",
                                realWorldExample: "Designing unique cards with utility classes without custom CSS file.",
                                examPoints: ["High flexibility", "Fast iteration", "Class-based styling"],
                                processSteps: ["Install Tailwind", "Use utilities", "Compose patterns", "Refine"],
                                mnemonic: "I-U-C-R",
                                repeatedUniversityConcept: "Bootstrap vs Tailwind comparison appears repeatedly.",
                                previousPatternQuestion: "Tailwind is primarily: utility-first CSS framework.",
                                expectedMcqs: ["Tailwind promotes: composable utility classes"],
                                quiz: {
                                    question: "Tailwind CSS is best described as:",
                                    options: ["Component-first fixed theme only", "Utility-first styling framework", "JavaScript runtime", "Database migration tool"],
                                    answerIndex: 1,
                                    explanation: "Tailwind provides utility classes for custom, composable styling."
                                }
                            },
                            {
                                id: "u5-c6",
                                title: "Interactive Websites and Dynamic UI Concepts",
                                definition: "Interactive websites respond to user actions with dynamic changes in content or state.",
                                simpleExplanation: "UI updates in real time based on user input and events.",
                                examExplanation: "Objective focus: event-driven UI, dynamic rendering, and state handling.",
                                keywords: ["interactive UI", "dynamic rendering", "event-driven", "state"],
                                terminology: ["state update", "render", "DOM manipulation", "conditional UI"],
                                oneLineRevision: "Dynamic UI improves engagement and task efficiency.",
                                confusedConcepts: "Interactive UI is not only animation; it includes logic-driven behavior.",
                                mcqTraps: "Uncontrolled state changes causing inconsistent interfaces.",
                                realWorldExample: "Quiz score updates instantly after each answer.",
                                examPoints: ["Event handling", "Real-time feedback", "Consistent state"],
                                processSteps: ["Capture event", "Update state", "Re-render UI", "Provide feedback"],
                                mnemonic: "C-U-R-P",
                                repeatedUniversityConcept: "Event-state-render sequence often tested.",
                                previousPatternQuestion: "Dynamic UI responds to: user events and state changes.",
                                expectedMcqs: ["DOM manipulation is related to: dynamic interface updates"],
                                quiz: {
                                    question: "Dynamic UI generally depends on:",
                                    options: ["Static HTML only", "Events and state updates", "Printer drivers", "Filesystem sectors"],
                                    answerIndex: 1,
                                    explanation: "Dynamic interfaces react to events and state transitions."
                                }
                            },
                            {
                                id: "u5-c7",
                                title: "Frontend-Backend Connection Overview",
                                definition: "Frontend-backend integration enables UI to fetch, send, and display data through APIs.",
                                simpleExplanation: "Frontend talks to server for data and actions.",
                                examExplanation: "MCQs may ask APIs, request-response model, JSON, and asynchronous calls.",
                                keywords: ["API", "frontend", "backend", "JSON", "fetch"],
                                terminology: ["request", "response", "endpoint", "async"],
                                oneLineRevision: "Frontend consumes APIs to make interfaces data-driven.",
                                confusedConcepts: "Frontend rendering vs backend processing distinction.",
                                mcqTraps: "Assuming frontend can securely store secrets.",
                                realWorldExample: "Quiz module fetches question set from server endpoint.",
                                examPoints: ["Client-server model", "Data flow", "Asynchronous communication"],
                                processSteps: ["Send request", "Receive response", "Parse data", "Update UI"],
                                mnemonic: "S-R-P-U",
                                repeatedUniversityConcept: "Request-response cycle is objective exam staple.",
                                previousPatternQuestion: "Common API data format: JSON.",
                                expectedMcqs: ["fetch() in JS is used for: HTTP requests"],
                                quiz: {
                                    question: "Which is most accurate about frontend-backend connection?",
                                    options: ["No data exchange is needed", "Frontend interacts with backend APIs for data", "Backend only handles CSS", "Frontend runs SQL directly on server"],
                                    answerIndex: 1,
                                    explanation: "Frontend calls APIs to exchange data with backend services."
                                }
                            }
                        ]
                    }
                ]
            }]
        },
        {
            id: "u6",
            name: "Unit 6: UX for Social Good and Figma Mockup",
            topics: [{
                id: "u6t1",
                name: "Impact, Career Readiness, and Figma Mockups",
                subtopics: [{
                        id: "u6t1s1",
                        name: "Social Good, Sustainability, Case Studies",
                        microConcepts: [{
                                id: "u6-c1",
                                title: "Inclusive UX and Sustainable UX",
                                definition: "Inclusive UX ensures accessibility and fairness; sustainable UX minimizes long-term social and environmental impact.",
                                simpleExplanation: "Design should be inclusive, ethical, and resource-conscious.",
                                examExplanation: "MCQs ask inclusive principles, social impact, and sustainability choices.",
                                keywords: ["inclusive UX", "sustainable UX", "ethical design", "social impact"],
                                terminology: ["digital inclusion", "dark patterns", "eco-design"],
                                oneLineRevision: "Responsible UX balances people, purpose, and planet.",
                                confusedConcepts: "Sustainable UX is not only energy usage; it includes cognitive and social sustainability.",
                                mcqTraps: "Ignoring ethical consequences while optimizing engagement.",
                                realWorldExample: "Low-data mobile interface for rural health access.",
                                examPoints: ["Ethics", "Inclusion", "Long-term impact"],
                                processSteps: ["Identify affected groups", "Assess impact", "Design responsibly", "Evaluate outcomes"],
                                mnemonic: "I-A-D-E",
                                repeatedUniversityConcept: "Dark patterns vs ethical UX is frequent.",
                                previousPatternQuestion: "Sustainable UX aims for: long-term responsible design.",
                                expectedMcqs: ["Dark patterns are: manipulative design practices"],
                                quiz: {
                                    question: "Sustainable UX mainly focuses on:",
                                    options: ["Short-term clicks only", "Responsible long-term user impact", "Ignoring accessibility", "Visual decoration only"],
                                    answerIndex: 1,
                                    explanation: "Sustainable UX prioritizes responsible long-term outcomes."
                                }
                            },
                            {
                                id: "u6-c2",
                                title: "Real-World UX Problems and UX Case Studies",
                                definition: "Case studies document problem context, process, solution, and measurable outcomes.",
                                simpleExplanation: "A case study shows how a UX problem was solved step by step.",
                                examExplanation: "Objective exams test case study structure and decision rationale.",
                                keywords: ["case study", "problem statement", "process", "impact metrics"],
                                terminology: ["constraints", "iterations", "outcomes", "validation"],
                                oneLineRevision: "Strong case studies connect evidence to design decisions.",
                                confusedConcepts: "Portfolio screenshot gallery is not equal to a case study.",
                                mcqTraps: "Skipping measurable outcomes in case study.",
                                realWorldExample: "Improving scholarship portal completion rate by reducing form complexity.",
                                examPoints: ["Problem clarity", "Method transparency", "Result metrics"],
                                processSteps: ["Define problem", "Research", "Design iterations", "Test", "Measure"],
                                mnemonic: "D-R-D-T-M",
                                repeatedUniversityConcept: "Case-study storytelling is common in viva/objective mix.",
                                previousPatternQuestion: "Case study must include: problem, process, outcomes.",
                                expectedMcqs: ["UX case studies demonstrate: applied problem solving"],
                                quiz: {
                                    question: "Which element is essential in a UX case study?",
                                    options: ["Only final screenshot", "Process and measurable outcomes", "Random moodboard only", "Source code only"],
                                    answerIndex: 1,
                                    explanation: "Case studies need process evidence and outcomes, not just visuals."
                                }
                            }
                        ]
                    },
                    {
                        id: "u6t1s2",
                        name: "Portfolio, Resume, Interviews, Figma Mockups",
                        microConcepts: [{
                                id: "u6-c3",
                                title: "UX Portfolio",
                                definition: "A UX portfolio is a curated showcase of projects demonstrating process, thinking, and outcomes.",
                                simpleExplanation: "It proves your UX skills with evidence.",
                                examExplanation: "Key sections: problem, role, process, deliverables, impact, reflection.",
                                keywords: ["portfolio", "projects", "process evidence", "impact"],
                                terminology: ["artifact", "narrative", "reflection", "deliverable"],
                                oneLineRevision: "Portfolio quality depends on process clarity, not only visuals.",
                                confusedConcepts: "Portfolio vs resume: portfolio shows work depth, resume summarizes profile.",
                                mcqTraps: "Including only polished mockups without methodology.",
                                realWorldExample: "Student includes hostel app redesign with usability metrics.",
                                examPoints: ["Process storytelling", "Role clarity", "Outcome credibility"],
                                processSteps: ["Select projects", "Document process", "Highlight impact", "Publish"],
                                mnemonic: "S-D-H-P",
                                repeatedUniversityConcept: "Portfolio components can be objective question topics.",
                                previousPatternQuestion: "Best portfolio project includes: measurable UX outcome.",
                                expectedMcqs: ["Portfolio should emphasize: problem-solving process"],
                                quiz: {
                                    question: "A strong UX portfolio primarily demonstrates:",
                                    options: ["Only decorative UI", "Process-driven problem solving", "Random certificates only", "Backend optimization scripts"],
                                    answerIndex: 1,
                                    explanation: "Portfolio strength comes from process evidence and impact."
                                }
                            },
                            {
                                id: "u6-c4",
                                title: "Resume Building for UX",
                                definition: "UX resumes summarize skills, tools, projects, impact, and role-specific strengths.",
                                simpleExplanation: "A resume is your concise professional snapshot.",
                                examExplanation: "Objective focus includes role keywords, tools, measurable achievements, and clarity.",
                                keywords: ["resume", "keywords", "ATS", "impact metrics"],
                                terminology: ["bullet impact", "action verbs", "role tailoring"],
                                oneLineRevision: "Use quantified outcomes and UX keywords in resume bullets.",
                                confusedConcepts: "Resume is concise summary; portfolio holds detailed evidence.",
                                mcqTraps: "Generic resume not aligned to UX role.",
                                realWorldExample: "Improved task completion by 24% in project bullet.",
                                examPoints: ["Role alignment", "Metrics", "Clear structure"],
                                processSteps: ["Choose template", "Add role keywords", "Quantify achievements", "Review"],
                                mnemonic: "C-A-Q-R",
                                repeatedUniversityConcept: "Tool and skill keyword relevance appears in objective questions.",
                                previousPatternQuestion: "Best resume bullet includes: measurable achievement.",
                                expectedMcqs: ["ATS-friendly resumes require: relevant keywords"],
                                quiz: {
                                    question: "Which resume line is strongest for UX?",
                                    options: ["Worked on many tasks", "Improved task success by 24% using usability testing", "Good at computers", "Knows internet"],
                                    answerIndex: 1,
                                    explanation: "Quantified, method-linked impact is strongest in UX resumes."
                                }
                            },
                            {
                                id: "u6-c5",
                                title: "UX Interview Preparation",
                                definition: "UX interview prep includes design thinking communication, portfolio walkthrough, and scenario problem-solving.",
                                simpleExplanation: "Prepare to explain your UX decisions clearly.",
                                examExplanation: "Frequent objective focus: STAR method, trade-offs, user-centered rationale.",
                                keywords: ["UX interview", "portfolio walkthrough", "scenario", "STAR"],
                                terminology: ["trade-off", "stakeholder communication", "behavioral interview"],
                                oneLineRevision: "Explain decisions with user evidence and impact.",
                                confusedConcepts: "Interview is not only tool demo; it tests thinking and collaboration.",
                                mcqTraps: "Describing final UI without rationale.",
                                realWorldExample: "Explaining why low-fidelity testing reduced rework.",
                                examPoints: ["Structured communication", "Evidence-based choices", "Reflection"],
                                processSteps: ["Review projects", "Prepare stories", "Practice scenarios", "Refine responses"],
                                mnemonic: "R-P-P-R",
                                repeatedUniversityConcept: "STAR framework occasionally appears in career objective sections.",
                                previousPatternQuestion: "Best interview response includes: context, action, result.",
                                expectedMcqs: ["STAR stands for: Situation Task Action Result"],
                                quiz: {
                                    question: "In UX interviews, evaluators usually value:",
                                    options: ["Only software shortcuts", "Problem-solving reasoning with user evidence", "Memorized jargon only", "No process explanation"],
                                    answerIndex: 1,
                                    explanation: "Interviewers look for user-centered decision-making and communication clarity."
                                }
                            },
                            {
                                id: "u6-c6",
                                title: "Creating Mockups in Figma",
                                definition: "Creating Figma mockups involves visual hierarchy, components, auto layout, and responsive constraints.",
                                simpleExplanation: "Build polished screens using reusable design system pieces in Figma.",
                                examExplanation: "MCQs test Figma features: frames, components, variants, styles, and prototype links.",
                                keywords: ["Figma mockup", "frames", "styles", "components"],
                                terminology: ["constraints", "variant properties", "library"],
                                oneLineRevision: "Figma mockup quality comes from hierarchy and consistency.",
                                confusedConcepts: "Mockup completeness does not replace usability validation.",
                                mcqTraps: "Designing without reusable components leads to inconsistency.",
                                realWorldExample: "Final mobile and desktop mockups for exam practice app.",
                                examPoints: ["Consistency", "Responsiveness", "Developer-friendly handoff"],
                                processSteps: ["Set frame", "Define style tokens", "Build components", "Compose screens", "Prototype"],
                                mnemonic: "S-D-B-C-P",
                                repeatedUniversityConcept: "Component variants and constraints are expected objective topics.",
                                previousPatternQuestion: "Variant feature in Figma helps with: component states.",
                                expectedMcqs: ["Constraints control: responsive element behavior"],
                                quiz: {
                                    question: "Which Figma feature is key for reusable stateful UI elements?",
                                    options: ["Rasterize", "Component variants", "Print preview", "Version uninstall"],
                                    answerIndex: 1,
                                    explanation: "Component variants model multiple states while preserving consistency."
                                }
                            }
                        ]
                    }
                ]
            }]
        }
    ],
    courseraTracker: [
        { title: "Foundations of UX Design", week: "Week 2" },
        { title: "UX Design Process", week: "Week 3" },
        { title: "Wireframes & Low Fidelity", week: "Week 4" },
        { title: "UX Research", week: "Week 5" },
        { title: "High Fidelity Design in Figma", week: "Week 7" },
        { title: "Dynamic UI Building", week: "Week 9" },
        { title: "UX for Social Good", week: "Week 12" },
        { title: "Create Mockup in Figma", week: "Week 14" }
    ],
    flashcards: [
        { term: "UX", meaning: "Overall user experience across product interactions." },
        { term: "HCI", meaning: "Study of human interaction with computing systems." },
        { term: "Design Thinking", meaning: "Empathize, Define, Ideate, Prototype, Test." },
        { term: "Accessibility", meaning: "Designing products usable by people with diverse abilities." },
        { term: "Persona", meaning: "Data-driven user archetype used for design decisions." },
        { term: "Journey Map", meaning: "Stage-wise map of user touchpoints, emotions, and pain points." },
        { term: "Wireframe", meaning: "Low-detail structural layout of interface." },
        { term: "Mockup", meaning: "High-detail visual representation of UI." },
        { term: "Typography", meaning: "Selection and arrangement of type for readability and hierarchy." },
        { term: "Color Theory", meaning: "Principles for color harmony, contrast, and visual meaning." },
        { term: "Design System", meaning: "Reusable components, tokens, and guidelines." },
        { term: "HTML", meaning: "Markup language for web structure." },
        { term: "CSS", meaning: "Stylesheet language for web presentation." },
        { term: "JavaScript", meaning: "Programming language for dynamic web interactions." },
        { term: "Bootstrap", meaning: "Component-based CSS framework." },
        { term: "Tailwind CSS", meaning: "Utility-first CSS framework for rapid custom UI." },
        { term: "Figma Auto Layout", meaning: "Automatic spacing/alignment for responsive components." },
        { term: "Usability Testing", meaning: "Task-based evaluation of interface effectiveness." }
    ]
};

function flattenConcepts(data = UX_COURSE_DATA) {
    const flat = [];
    data.units.forEach((unit) => {
        unit.topics.forEach((topic) => {
            topic.subtopics.forEach((subtopic) => {
                subtopic.microConcepts.forEach((micro) => {
                    flat.push({
                        unitId: unit.id,
                        unitName: unit.name,
                        topicId: topic.id,
                        topicName: topic.name,
                        subtopicId: subtopic.id,
                        subtopicName: subtopic.name,
                        ...micro,
                    });
                });
            });
        });
    });
    return flat;
}

const ALL_CONCEPTS = flattenConcepts();

function uniqueArray(items) {
    const seen = new Set();
    const out = [];
    items.forEach((item) => {
        const normalized = String(item || "").trim();
        if (!normalized) return;
        const key = normalized.toLowerCase();
        if (!seen.has(key)) {
            seen.add(key);
            out.push(normalized);
        }
    });
    return out;
}

function rotatePick(pool, startIndex, count, banned) {
    const normalizedPool = uniqueArray(pool).filter((item) => !banned.has(item.toLowerCase()));
    if (!normalizedPool.length) return [];
    const out = [];
    for (let i = 0; i < normalizedPool.length && out.length < count; i += 1) {
        const idx = (startIndex + i) % normalizedPool.length;
        const item = normalizedPool[idx];
        const key = item.toLowerCase();
        if (!banned.has(key)) {
            out.push(item);
            banned.add(key);
        }
    }
    return out;
}

function buildOptionSet(correct, distractors, seed) {
    const banned = new Set([String(correct).toLowerCase()]);
    const picked = rotatePick(distractors, seed, 3, banned);
    const base = [correct, ...picked];
    while (base.length < 4) {
        base.push("None of the above");
    }
    const options = base.slice(0, 4);
    const shift = seed % 4;
    const rotated = options.map((_, idx) => options[(idx + shift) % 4]);
    const answerIndex = rotated.findIndex((opt) => opt === correct);
    return { options: rotated, answerIndex };
}

function processVariants(steps) {
    const clean = uniqueArray(steps);
    if (clean.length < 3) {
        return [clean.join(" -> "), "Review -> Build -> Launch", "Analyze -> Design -> Deploy", "Define -> Code -> Maintain"];
    }

    const correct = clean.join(" -> ");
    const reversed = [...clean].reverse().join(" -> ");

    const swap = [...clean];
    const t = swap[0];
    swap[0] = swap[1];
    swap[1] = t;

    const middleShift = [...clean];
    const last = middleShift.pop();
    middleShift.splice(1, 0, last);

    return uniqueArray([correct, reversed, swap.join(" -> "), middleShift.join(" -> ")]);
}

function getConceptCollections(concept, conceptIndex) {
    const sameUnit = ALL_CONCEPTS.filter((c) => c.unitId === concept.unitId && c.id !== concept.id);
    const globalOther = ALL_CONCEPTS.filter((c) => c.id !== concept.id);

    const defs = sameUnit.map((c) => c.definition).concat(globalOther.map((c) => c.definition));
    const examExplanations = sameUnit.map((c) => c.examExplanation).concat(globalOther.map((c) => c.examExplanation));
    const oneLiners = sameUnit.map((c) => c.oneLineRevision).concat(globalOther.map((c) => c.oneLineRevision));
    const terms = sameUnit.flatMap((c) => c.terminology).concat(globalOther.flatMap((c) => c.terminology));
    const keywords = sameUnit.flatMap((c) => c.keywords).concat(globalOther.flatMap((c) => c.keywords));
    const traps = sameUnit.map((c) => c.mcqTraps).concat(globalOther.map((c) => c.mcqTraps));
    const repeated = sameUnit.map((c) => c.repeatedUniversityConcept).concat(globalOther.map((c) => c.repeatedUniversityConcept));
    const confusion = sameUnit.map((c) => c.confusedConcepts).concat(globalOther.map((c) => c.confusedConcepts));

    return {
        seed: conceptIndex,
        defs,
        examExplanations,
        oneLiners,
        terms,
        keywords,
        traps,
        repeated,
        confusion,
    };
}

function createMcqItem({ concept, idSuffix, difficulty, question, correct, distractors, explanation, seed }) {
    const { options, answerIndex } = buildOptionSet(correct, distractors, seed);
    return {
        id: `g-${concept.id}-${idSuffix}`,
        unitId: concept.unitId,
        unitName: concept.unitName,
        topic: concept.title,
        difficulty,
        question,
        options,
        answerIndex,
        explanation,
    };
}

function buildConceptQuestionSet(concept, conceptIndex) {
    const bag = getConceptCollections(concept, conceptIndex);
    const set = [];

    set.push({
        id: `g-${concept.id}-base`,
        unitId: concept.unitId,
        unitName: concept.unitName,
        topic: concept.title,
        difficulty: conceptIndex % 3 === 0 ? "easy" : conceptIndex % 3 === 1 ? "medium" : "hard",
        question: concept.quiz.question,
        options: concept.quiz.options,
        answerIndex: concept.quiz.answerIndex,
        explanation: concept.quiz.explanation,
    });

    set.push(createMcqItem({
        concept,
        idSuffix: "def",
        difficulty: "medium",
        question: `Which option best defines "${concept.title}"?`,
        correct: concept.definition,
        distractors: bag.defs,
        explanation: `The correct definition of ${concept.title} matches the concept scope from the syllabus.`,
        seed: bag.seed + 1,
    }));

    set.push(createMcqItem({
        concept,
        idSuffix: "exam",
        difficulty: "hard",
        question: `In objective exams, ${concept.title} is most strongly identified with:`,
        correct: concept.examExplanation,
        distractors: bag.examExplanations,
        explanation: "Exam-oriented cues prioritize what is repeatedly tested in objective patterns.",
        seed: bag.seed + 2,
    }));

    set.push(createMcqItem({
        concept,
        idSuffix: "rev",
        difficulty: "easy",
        question: `Choose the most accurate one-line revision for "${concept.title}".`,
        correct: concept.oneLineRevision,
        distractors: bag.oneLiners,
        explanation: "One-line revision should preserve exact conceptual intent.",
        seed: bag.seed + 3,
    }));

    const primaryTerm = concept.terminology[0] || concept.keywords[0] || "core term";
    set.push(createMcqItem({
        concept,
        idSuffix: "term",
        difficulty: "medium",
        question: `Which term is directly associated with "${concept.title}"?`,
        correct: primaryTerm,
        distractors: bag.terms.concat(bag.keywords),
        explanation: "Associated terminology helps identify close but distinct concepts in MCQs.",
        seed: bag.seed + 4,
    }));

    const processOptions = processVariants(concept.processSteps);
    set.push(createMcqItem({
        concept,
        idSuffix: "process",
        difficulty: "hard",
        question: `What is the correct process order for "${concept.title}"?`,
        correct: processOptions[0],
        distractors: processOptions.slice(1),
        explanation: "Process-order questions test sequencing accuracy, a common objective exam pattern.",
        seed: bag.seed + 5,
    }));

    const confText = concept.confusedConcepts || "";
    const hasVs = confText.toLowerCase().includes(" vs ");
    const confCorrect = hasVs && confText.includes(":") ? confText.split(":").slice(1).join(":").trim() : confText;
    set.push(createMcqItem({
        concept,
        idSuffix: "conf",
        difficulty: "hard",
        question: hasVs ?
            `Which statement best resolves the distinction in ${confText.split(":")[0]}?` :
            `Which statement best clarifies a commonly confused idea in "${concept.title}"?`,
        correct: confCorrect,
        distractors: bag.confusion.map((c) => (c.includes(":") ? c.split(":").slice(1).join(":").trim() : c)),
        explanation: "Confusion-based questions are designed to reduce conceptual mix-ups in objective exams.",
        seed: bag.seed + 6,
    }));

    set.push(createMcqItem({
        concept,
        idSuffix: "trap",
        difficulty: "medium",
        question: `Which of the following is a common MCQ trap for "${concept.title}"?`,
        correct: concept.mcqTraps,
        distractors: bag.traps,
        explanation: "Trap-awareness prevents selecting distractors that appear partially true.",
        seed: bag.seed + 7,
    }));

    set.push(createMcqItem({
        concept,
        idSuffix: "repeat",
        difficulty: "medium",
        question: `Which repeatedly tested university concept is tied to "${concept.title}"?`,
        correct: concept.repeatedUniversityConcept,
        distractors: bag.repeated,
        explanation: "Repeated concepts often appear in objective exams with slight wording changes.",
        seed: bag.seed + 8,
    }));

    return set;
}

const GLOBAL_MCQ_BANK = ALL_CONCEPTS.flatMap((concept, index) => buildConceptQuestionSet(concept, index));