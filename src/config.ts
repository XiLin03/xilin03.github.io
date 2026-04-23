export const siteConfig = {
  name: "Xi Lin",
  nameNative: "\u6797\u66e6",
  title: "M.S. Robotics @ JHU",
  description:
    "Personal academic website of Xi Lin, focused on embodied AI, world models, vision-language action and navigation, and robot control.",
  accentColor: "#002FA7",
  heroStatusText:
    "Currently seeking remote research internship opportunities \u{1F44B}",
  social: {
    email: "xilin03@outlook.com",
    linkedin: "https://linkedin.com/in/xilin-jhu",
    github: "https://github.com/xilin03",
    cv: "/Xi-Lin-Resume.pdf",
  },
  about: [
    "I am an M.S. student in Robotics at Johns Hopkins University. My recent work focuses on embodied AI systems that connect real-robot deployment, long-horizon reasoning, and control-aware decision making.",
    "During my graduate path, I started from whole-body control and locomotion, then moved into vision-language navigation and world-model-oriented embodied systems. I am now especially interested in the boundary between world/action models and vision-language action systems, and I am actively seeking remote research internship opportunities.",
  ],
  aboutTags: [
    "World Models",
    "Vision-Language Action",
    "VLN / ObjectNav",
    "Real-Robot Deployment",
    "Whole-Body Control",
    "Retargeting",
    "RL / Sim2Real",
    "Dynamics Modeling",
  ],
  publications: [
    {
      name: "MORN: Metacognitive Object-Goal Regulation for Resource-Rational Long-Horizon Navigation",
      subtitle: "IROS 2026 | Under Review | First Author",
      description:
        "A resource-rational long-horizon navigation framework that adds a metacognitive executive layer on top of frozen navigation backbones, explicitly regulating multi-goal missions under time and budget constraints.",
      image: "/assets/projects/morn-arch.png",
      link: "/publications/morn",
      pdf: "/papers/MORN.pdf",
      skills: ["World Models", "ObjectNav", "Long-Horizon Planning"],
    },
    {
      name: "Dual-Anchoring: Addressing State Drift in Vision-Language Navigation",
      subtitle: "ECCV 2026 | Under Review | Third Author",
      description:
        "A dual-anchoring framework for long-horizon VLN that explicitly addresses progress drift and memory drift through instruction-progress anchoring and landmark-centric world-model supervision.",
      image: "/assets/projects/dual-anchor-arch.png",
      link: "/publications/dual-anchoring",
      pdf: "/papers/Dual-Anchoring.pdf",
      skills: ["VLN", "Video-LLMs", "Landmark-Centric World Models"],
    },
    {
      name: "Research on Object Detection of Robotic Based on Convolutional Neural Network",
      subtitle: "IEEE IPIC 2023 | First Author",
      description:
        "An earlier competition-oriented project that combined YOLOv5 perception with VINS-Fusion for UAV-style visual navigation and target-aware motion.",
      image: "/assets/projects/cnn-accuracy-plot.png",
      link: "/publications/cnn-detection",
      skills: ["CNN", "YOLOv5", "VINS-Fusion"],
    },
  ],
  projects: [
    {
      name: "Embodied Navigation for Real-World Instruction Following",
      subtitle: "JD.com | Embodied Navigation Algorithm Intern",
      description:
        "Built real-robot VLN and zero-shot ObjectNav pipelines covering evaluation, data collection, finetuning, and outdoor deployment.",
      image: "/assets/projects/jd-robot-demo.png",
      link: "/projects/jd-navigation",
      skills: ["World Models", "VLN", "ObjectNav", "Real-Robot"],
    },
    {
      name: "Humanoid Motion Retargeting and Skill Simulation",
      subtitle: "Xiaomi Robotics | Robotics Engineer Intern",
      description:
        "Worked on retargeting, simulation-system construction, and low-level behavior training for assembly-style humanoid tasks.",
      image: "/assets/projects/xiaomi-cover.png",
      link: "/projects/xiaomi-humanoid",
      skills: ["Retargeting", "WBC", "RL", "Sim2Sim"],
    },
    {
      name: "Humanoid Locomotion in Complex Terrain",
      subtitle: "AIR Tsinghua | Embodied AI Research Intern",
      description:
        "Built terrain generation, curriculum training, and ROS2 deployment pipelines for humanoid locomotion and sim-to-real transfer.",
      image: "/assets/projects/control-terrain.png",
      link: "/projects/air-locomotion",
      skills: ["Robot Control", "RL", "ROS2", "Sim-to-Real"],
    },
    {
      name: "Dynamics Modeling for Cockroach-Inspired Robots",
      subtitle: "JHU Terradynamics Lab | Research Assistant",
      description:
        "Modeled robot dynamics and obstacle-avoidance trajectories with LSTM-based forecasting and simulation-validation pipelines.",
      image: "/assets/projects/jhu-trajectory-model.png",
      link: "/projects/jhu-dynamics",
      skills: ["Dynamics Modeling", "LSTM", "C++ / MATLAB", "Trajectory Analysis"],
    },
  ],
  experience: [
    {
      company: "JD.com, Explore Academy",
      title: "Embodied Navigation Algorithm Intern",
      dateRange: "Nov 2025 - Mar 2026",
      bullets: [
        "Systematically evaluated real-world VLN solutions and built a full pipeline for data collection, model finetuning, and outdoor deployment.",
        "Developed a VLM-based zero-shot ObjectNav direction for indoor settings and explored transferable deployment from VLM or VLFM systems to real robots.",
        "This internship led to follow-up work on MORN and Dual-Anchoring for long-horizon navigation and world-model-aware decision making.",
      ],
    },
    {
      company: "Xiaomi Robotics",
      title: "Robotics Engineer Intern",
      dateRange: "Sep 2025 - Nov 2025",
      bullets: [
        "Converted factory assembly videos into SMPL trajectories and retargeted human motions to humanoids for reusable downstream training data.",
        "Built simulation environments and trained low-level tracking behaviors for dexterous assembly and payload-related robot tasks.",
        "Benchmarked sim2sim and RL pipelines in a unified physics stack to support later real-world iteration.",
      ],
    },
    {
      company: "Institute for AI Industry Research, Tsinghua University",
      title: "Embodied AI Research Intern",
      dateRange: "Jan 2025 - Aug 2025",
      bullets: [
        "Built parameterized terrain generation and curriculum-based RL training for humanoid locomotion in complex environments.",
        "Completed sim-to-real transfer from Isaac Gym to Unitree H1 through ROS2 deployment.",
        "Used this stage as a foundation for later work in navigation, SLAM-aware robotics systems, and embodied AI.",
      ],
    },
    {
      company: "Johns Hopkins University Terradynamics Lab",
      title: "Research Assistant",
      dateRange: "Jun 2024 - Dec 2024",
      bullets: [
        "Built LSTM-based motion prediction pipelines using fused IMU and force data for cockroach-inspired robot dynamics.",
        "Developed C++ and MATLAB simulation-validation tooling for trajectory modeling and nonlinear constraint analysis.",
        "This earlier stage formed my foundation in data-centric robotics experimentation and modeling.",
      ],
    },
  ],
  education: [
    {
      school: "Johns Hopkins University",
      degree: "M.S. in Robotics",
      dateRange: "Expected Jun 2027",
      achievements: [
        "Current focus: embodied AI, long-horizon navigation, robot control, and multimodal robotics systems.",
      ],
    },
    {
      school: "Dalian University of Technology",
      degree: "B.S. in Mechanical Engineering",
      dateRange: "Jun 2025",
      achievements: [
        "Minor in Automation.",
        "Joint Program with UC Irvine.",
        "National 3D Design Competition, Third Prize.",
        "DUT Sci-Tech Innovation Scholarship.",
      ],
    },
  ],
};
