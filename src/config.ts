export const siteConfig = {
  description: 'Xi Lin — M.S. Robotics at Johns Hopkins University. Embodied foundation models for robot manipulation. Seeking Fall 2027 Ph.D. opportunities.',
  social: {
    email: 'xlin49@jhu.edu',
    scholar: 'https://scholar.google.com/citations?user=JSBomI4AAAAJ&hl=zh-CN',
    linkedin: 'https://linkedin.com/in/xilin-jhu',
    cv: '/Xi-Lin-Resume.pdf',
    resumeZh: '/Xi-Lin-Resume-ZH.pdf',
  },
};
type Publication = {
  title: string;
  authors: string[];
  venue: string;
  url: string;
  role?: string;
  page?: string;
  openreview?: string;
};

export const publications: Publication[] = [
  { title: 'WASD: Writing Agents Steer Dreams', authors: ['Xi Lin', 'Wenqian Zhang', 'Zhixu Li', 'Zhenghao Ni', 'Dayong Fang', 'Jiachen Li'], venue: 'CVPR 2027 · Under Review', role: 'Project lead', url: '', page: 'https://wasd-cvpr.github.io/' },
  { title: 'Utility-WAM: Correcting Future-Induced Action Changes', authors: ['Feihong Zhang', 'Xi Lin', 'Yulong Shi', 'Zuxing Lu', 'Yanghong Mei', 'Zhaopeng Gu', 'Tingyu Yuan', 'Zihao Liang', 'Yinuo Wang', 'Zhaowen Li'], venue: 'ICLR 2027 · Under Review', url: 'https://arxiv.org/abs/2610.39367' },
  { title: 'ReSync: Re-Aligning the Two Clocks of Asynchronous World-Action Models', authors: ['Xi Lin', 'Feihong Zhang', 'Yulong Shi', 'Yanghong Mei', 'Zuxing Lu', 'Xiaofan Zhu', 'Zihao Liang', 'Zhirui Gao', 'Zhaowen Li'], venue: 'ICLR 2027 · Under Review', url: 'https://arxiv.org/abs/2609.33944' },
  { title: 'Dual-Anchoring: Addressing State Drift in Vision-Language Navigation', authors: ['Kangyi Wu', 'Pengna Li', 'Kailin Lyu', 'Xi Lin', 'Lin Zhao', 'Qingrong He', 'Jinjun Wang', 'Jianyi Liu'], venue: 'ECCV 2026', url: 'https://arxiv.org/abs/2604.17473' },
  { title: 'RepNWM: Effective Representation Modeling and Exploitation for Navigation World Action Models', authors: ['Yanghong Mei', 'Longteng Guo', 'MingMing Yu', 'Xi Lin', 'Guiyu Zhao', 'Feihong Zhang', 'Xingjian He', 'Jianzhang Yang', 'Peng Su', 'Zhaowen Li', 'Jing Liu'], venue: 'CVPR 2027 · Under Review', url: '', openreview: '' },
  { title: 'BAT-Nav: Belief-Based Arbitration and Termination via Remaining Discoverability in Multi-Goal Semantic Navigation', authors: ['Xi Lin', 'Kangyi Wu', 'Jiayi Li', 'Jiaqiao Tang', 'Qingrong He', 'Lin Zhao'], venue: 'ICRA 2027 · Under Review', url: 'https://arxiv.org/abs/2605.16932' },
];
// Contribution symbols follow official papers or author-confirmed submission details.
export const contributionMarks: Record<string, Record<string, string>> = {
  'WASD: Writing Agents Steer Dreams': { 'Xi Lin': '*', 'Wenqian Zhang': '*', 'Zhixu Li': '*' },
  'https://arxiv.org/abs/2609.33944': { 'Xi Lin': '*', 'Feihong Zhang': '*', 'Yulong Shi': '*' },
  'https://arxiv.org/abs/2610.39367': { 'Feihong Zhang': '*', 'Xi Lin': '*', 'Yulong Shi': '*' },
  'https://arxiv.org/abs/2604.17473': { 'Kangyi Wu': '†', 'Pengna Li': '†', 'Kailin Lyu': '‡', 'Xi Lin': '‡' },
  'RepNWM: Effective Representation Modeling and Exploitation for Navigation World Action Models': { 'Yanghong Mei': '*', 'Longteng Guo': '*', 'MingMing Yu': '*' },
};
export const experience = [
  { org: 'Huawei', team: 'Automotive BU', role: 'Research Intern', focus: 'World-Action Model Pretraining & Representation Learning', date: 'Apr 2026 – Sep 2026', logo: '/logos/huawei.svg' },
  { org: 'JD.com', team: 'Explore Academy', role: 'Research Intern', focus: 'Vision-Language Navigation & Embodied Decision-Making', date: 'Nov 2025 – Apr 2026', logo: '/logos/jd.svg' },
  { org: 'Xiaomi', team: 'Robotics Department', role: 'Robotics Engineering Intern', focus: 'Humanoid Whole-Body Control', date: 'Aug 2025 – Nov 2025', logo: '/logos/xiaomi.svg' },
  { org: 'Tsinghua University', team: 'Institute for AI Industry Research', role: 'Research Intern', focus: 'Complex-Terrain Humanoid Locomotion', date: 'Jan 2025 – Aug 2025', logo: '/logos/tsinghua.svg' },
];
