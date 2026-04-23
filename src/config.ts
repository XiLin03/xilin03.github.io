export const siteConfig = {
  name: "Xi Lin",
  title: "M.S. Robotics @ JHU",
  description:
    "Personal academic website of Xi Lin, focused on robotics, embodied AI, world models, vision-language navigation, and control.",
  accentColor: "#2563eb",
  heroInterestsText:
    "Research interests include world models, vision-language navigation, and robot control.",
  social: {
    email: "xilin03@outlook.com",
    linkedin: "https://linkedin.com/in/xilin-jhu",
    github: "https://github.com/xilin03",
    cv: "/Xi-Lin-Resume.pdf",
  },
  about: [
    "I am an M.S. student in Robotics at Johns Hopkins University. My work sits across robot control, embodied navigation, and multimodal robotics systems.",
    "I started from motion control and locomotion, then moved into vision-language navigation and world-model-related embodied systems. Going forward, I want to continue learning at the boundary between world action models and vision-language action systems.",
    "I have experience in WBC, VLN, and world-model-oriented robotics pipelines, and I am currently looking for remote research internship opportunities.",
  ],
  projects: [
    {
      name: "Embodied Navigation Systems for Real-World Instruction Following",
      subtitle: "JD.com | Embodied Navigation Algorithm Intern",
      description:
        "Built and evaluated embodied navigation systems spanning real-robot VLN, VLM-based ObjectNav, long-horizon planning, data collection, model finetuning, and deployment for open-world robotic settings.",
      image: "/assets/projects/jd-robot-demo.png",
      link: "/projects/jd-navigation",
      skills: ["VLN", "ObjectNav", "World Models", "Real-Robot Deployment"],
    },
    {
      name: "Humanoid Motion Retargeting and Low-Level Skill Simulation",
      subtitle: "Xiaomi Robotics | Robotics Engineer Intern",
      description:
        "Worked on humanoid motion retargeting, simulation-system construction, and low-level tracking behavior training for assembly-style and payload-related robotic tasks.",
      image: "/assets/projects/xiaomi-retargeting.png",
      link: "/projects/xiaomi-humanoid",
      skills: ["Retargeting", "WBC", "RL", "Sim2Sim"],
    },
    {
      name: "Humanoid Locomotion in Complex Terrain",
      subtitle: "AIR Tsinghua | Embodied AI Research Intern",
      description:
        "Built terrain-generation and curriculum-training pipelines for humanoid locomotion, then transferred learned policies from simulation to Unitree H1 through ROS2 deployment.",
      image: "/assets/projects/control-terrain.png",
      link: "/projects/air-locomotion",
      skills: ["Locomotion", "PPO", "ROS2", "Sim-to-Real"],
    },
    {
      name: "CNN-Based Robotic Object Detection",
      subtitle: "Dalian University of Technology | Undergraduate Research",
      description:
        "Improved a CNN-based robotic perception pipeline and connected object detection with visual navigation components for robotics and UAV-oriented applications.",
      image: "/assets/projects/cnn-detection.png",
      link: "/projects/cnn-detection",
      skills: ["Perception", "Object Detection", "YOLOv5", "VINS-Fusion"],
    },
  ],
  experience: [
    {
      company: "JD.com, Explore Academy",
      title: "Embodied Navigation Algorithm Intern",
      dateRange: "Nov 2025 - Mar 2026",
      bullets: [
        "Built and evaluated embodied navigation pipelines spanning VLN, ObjectNav, real-robot data collection, model finetuning, and deployment.",
        "Developed a VLM-based zero-shot multi-goal ObjectNav framework and pushed it from simulation toward real-robot validation.",
        "Worked on long-horizon navigation reasoning and world-model-oriented system design for future embodied tasks.",
      ],
    },
    {
      company: "Xiaomi Robotics",
      title: "Robotics Engineer Intern",
      dateRange: "Sep 2025 - Nov 2025",
      bullets: [
        "Worked on humanoid control and hardware-configuration optimization through motion retargeting, simulation, and low-level policy training.",
        "Converted human assembly videos into SMPL trajectories and built reusable retargeting data for humanoid behaviors.",
        "Benchmarked sim2sim and RL pipelines for dexterous and payload-related robot tasks.",
      ],
    },
    {
      company: "Institute for AI Industry Research, Tsinghua University",
      title: "Embodied AI Research Intern",
      dateRange: "Jan 2025 - Aug 2025",
      bullets: [
        "Built terrain generation and curriculum-training pipelines for humanoid locomotion in complex environments.",
        "Trained locomotion policies in simulation and deployed them onto Unitree H1 through ROS2.",
        "Explored how RL-based locomotion stacks can extend toward SLAM and embodied navigation tasks.",
      ],
    },
    {
      company: "Johns Hopkins University Terradynamics Lab",
      title: "Research Assistant",
      dateRange: "Jun 2024 - Dec 2024",
      bullets: [
        "Worked on dynamics forecasting and trajectory modeling for cockroach-inspired robots.",
        "Built data generation and validation pipelines for motion prediction in dynamic environments.",
        "This stage was where I developed my earlier research foundation in modeling and robotics experimentation.",
      ],
    },
  ],
  education: [
    {
      school: "Johns Hopkins University",
      degree: "M.S. in Robotics",
      dateRange: "Expected Jun 2027",
      achievements: [
        "Current focus: embodied AI, robot control, navigation, and multimodal robotics.",
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
