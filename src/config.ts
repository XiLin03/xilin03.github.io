export const siteConfig = {
  name: "Xi Lin",
  title: "M.S. Student in Robotics at Johns Hopkins University",
  description:
    "Personal academic website of Xi Lin, focused on embodied AI, vision-language navigation, and robot learning.",
  accentColor: "#2563eb",
  heroLabel: "Embodied AI | Robot Learning | Vision-Language Navigation",
  heroDescription:
    "I work on embodied AI systems that combine perception, planning, and control for robust long-horizon behavior. I am especially interested in remote research opportunities in navigation, world models, multimodal reasoning, and real-world robot deployment.",
  social: {
    email: "xilin03@outlook.com",
    linkedin: "https://linkedin.com/in/xilin-jhu",
    github: "https://github.com/xilin03",
    cv: "/Xi-Lin-Resume.pdf",
  },
  about: [
    "I am currently an M.S. student in Robotics at Johns Hopkins University. My recent work spans vision-language navigation, object-goal navigation, humanoid control, and multimodal robot systems.",
    "Across internships at JD.com, Xiaomi Robotics, and AIR Tsinghua, I have worked on zero-shot navigation, world-model-integrated VLN, simulation-to-real robot learning, and motion retargeting pipelines.",
    "I am building toward research that connects embodied foundation models with efficient decision-making and deployable robot behavior.",
  ],
  researchInterests: [
    "Embodied AI",
    "Vision-Language Navigation",
    "ObjectNav and Semantic Navigation",
    "World Models",
    "Robot Learning and Control",
    "3D Vision and SLAM",
  ],
  projects: [
    {
      name: "MORN: Metacognitive Object-Goal Regulation for Resource-Rational Long-Horizon Navigation",
      eyebrow: "IROS 2026 under review | First author",
      description:
        "Designed a metacognitive planning framework for zero-shot multi-goal object navigation under partial observability, improving goal completion rate by 33% and reducing wasted steps by 22% on HM3D and real robots.",
      skills: ["ObjectNav", "Embodied AI", "Planning", "HM3D"],
    },
    {
      name: "Dual-Anchoring: Addressing State Drift in Vision-Language Navigation",
      eyebrow: "ECCV 2026 under review | Third author",
      description:
        "Contributed to a VLN system that integrates world-model-based state prediction and visual-history reasoning to improve robustness, generalization, and interpretability in open-world navigation.",
      skills: ["VLN", "World Models", "Multimodal Reasoning"],
    },
    {
      name: "Trajectory Forecasting for Dynamic Environments",
      eyebrow: "Johns Hopkins Terradynamics Lab",
      description:
        "Architected and optimized an LSTM-based forecasting network for trajectory anticipation, achieving a Spearman correlation of 0.87 and expanding effective training coverage with a Gaussian-mixture data generator.",
      skills: ["Sequence Modeling", "Forecasting", "Robot Dynamics"],
    },
    {
      name: "CNN-Based Robotic Object Detection",
      eyebrow: "IEEE IPIC 2023 | First author",
      description:
        "Improved YOLOv5 with adaptive convolution and multi-scale training, then integrated the detector with VINS for real-time obstacle avoidance and UAV navigation.",
      skills: ["Object Detection", "YOLOv5", "VINS", "Robotics"],
    },
  ],
  experience: [
    {
      company: "JD.com, Explore Academy",
      title: "Embodied AI Algorithm Intern",
      dateRange: "Nov 2025 - Mar 2026",
      bullets: [
        "Built a zero-shot multi-goal benchmark on HM3D and deployed an embodied navigation stack on robots.",
        "Decoupled low-level locomotion from high-level decision-making in a VLFM-based system.",
        "Implemented scheduling for goal switching, backtracking, and episode termination in long-horizon navigation.",
      ],
    },
    {
      company: "Xiaomi Robotics",
      title: "Robotics Engineer Intern",
      dateRange: "Sep 2025 - Nov 2025",
      bullets: [
        "Converted factory assembly videos into SMPL trajectories and retargeted human motions to humanoids with PHC.",
        "Built simulation environments in Unitree RL Gym and trained tracking policies for dexterous assembly-style behavior.",
        "Benchmarked sim-to-real pipelines and automated evaluation for whole-body tasks.",
      ],
    },
    {
      company: "Institute for AI Industry Research, Tsinghua University",
      title: "Embodied AI Research Intern",
      dateRange: "Jan 2025 - Aug 2025",
      bullets: [
        "Built unstructured training environments with procedural terrain generation for H1 humanoids.",
        "Designed a curriculum strategy that accelerated policy convergence.",
        "Integrated 3D semantics, SLAM, and ROS2 into a multimodal control stack for mapping and obstacle avoidance.",
      ],
    },
    {
      company: "Johns Hopkins University Terradynamics Lab",
      title: "Research Assistant",
      dateRange: "Jun 2024 - Dec 2024",
      bullets: [
        "Developed forecasting models for trajectory anticipation in dynamic environments.",
        "Built synthetic data generation pipelines with Gaussian Mixture Models.",
        "Derived non-holonomic constraints for physically grounded closed-loop control analysis.",
      ],
    },
  ],
  education: [
    {
      school: "Johns Hopkins University",
      degree: "M.S. in Robotics",
      dateRange: "Expected Jun 2027",
      achievements: [
        "Current graduate student focused on embodied AI, navigation, and robot learning.",
      ],
    },
    {
      school: "Dalian University of Technology",
      degree: "B.S. in Mechanical Engineering; Dual Degree in Automation",
      dateRange: "Jun 2025",
      achievements: [
        "Joint Program with UC Irvine.",
        "National 3D Design Competition, Third Prize.",
        "DUT Sci-Tech Innovation Scholarship.",
      ],
    },
  ],
};
