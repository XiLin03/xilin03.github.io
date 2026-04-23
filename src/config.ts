export const siteConfig = {
  name: "Xi Lin",
  title: "M.S. Robotics @ JHU",
  description:
    "Personal academic website of Xi Lin, focused on robotics, embodied AI, whole-body control, vision-language navigation, and world models.",
  accentColor: "#2563eb",
  heroInterests: ["WBC", "VLN", "World Models"],
  social: {
    email: "xilin03@outlook.com",
    linkedin: "https://linkedin.com/in/xilin-jhu",
    github: "https://github.com/xilin03",
    cv: "/Xi-Lin-Resume.pdf",
  },
  about: [
    "I am an M.S. student in Robotics at Johns Hopkins University. My recent work sits across robot control, embodied navigation, and multimodal decision-making.",
    "I started from motion control and locomotion, then moved into VLN and world-model-related embodied navigation. Going forward, I want to keep pushing toward the boundary between world action models and vision-language action systems, while continuing to learn in that direction.",
    "I have hands-on experience in WBC, VLN, and world-model-oriented embodied systems, and I am currently looking for remote research internship opportunities.",
  ],
  projects: [
    {
      name: "Undergraduate Research",
      subtitle: "Perception, detection, and early robotics research",
      description:
        "My undergraduate work focused on robotic perception and research prototyping, including CNN-based object detection, UAV-oriented visual navigation, and trajectory modeling in lab environments.",
      image: "/assets/projects/undergrad-trajectory.png",
      link: "/projects/undergraduate",
      skills: ["Perception", "Object Detection", "Trajectory Modeling"],
    },
    {
      name: "Whole-Body Control and Locomotion",
      subtitle: "Humanoid control, sim-to-real transfer, and motion retargeting",
      description:
        "I worked on humanoid locomotion and control across AIR Tsinghua and Xiaomi, covering terrain generation, policy training, sim-to-real deployment, retargeting, and low-level tracking behaviors.",
      image: "/assets/projects/control-terrain.png",
      link: "/projects/control",
      skills: ["WBC", "Locomotion", "Retargeting", "Sim-to-Real"],
    },
    {
      name: "VLN and World Models",
      subtitle: "Real-robot navigation, MORN, and dual-anchoring",
      description:
        "My recent focus is embodied navigation: VLN evaluation and deployment, VLM-based ObjectNav, metacognitive long-horizon planning, and world-model-informed navigation reasoning.",
      image: "/assets/projects/morn-arch.png",
      link: "/projects/vln-world-models",
      skills: ["VLN", "ObjectNav", "World Models", "Embodied AI"],
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
