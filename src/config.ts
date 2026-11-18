export const siteConfig = {
  description: 'Xi Lin — M.S. Robotics at Johns Hopkins University. Embodied foundation models for robot manipulation. Seeking Fall 2027 Ph.D. opportunities.',
  social: {
    email: 'xlin49@jhu.edu',
    scholar: 'https://scholar.google.com/citations?user=JSBomI4AAAAJ&hl=zh-CN',
    linkedin: 'https://linkedin.com/in/xilin-jhu',
    cv: '/Xi-Lin-Resume.pdf',
  },
};
export const publications = [
  { title: 'WASD: Writing Agents Steer Dreams', authors: ['Xi Lin', 'Wenqian Zhang', 'Zhixu Li', 'Zhenghao Ni', 'Dayong Fang', 'Jiachen Li'], venue: 'CVPR 2027 · Under Review', role: 'Project lead', url: '' },
  { title: 'ReSync: Re-Aligning the Two Clocks of Asynchronous World-Action Models', authors: ['Xi Lin', 'Feihong Zhang', 'Yulong Shi', 'Yanghong Mei', 'Zuxing Lu', 'Xiaofan Zhu', 'Zihao Liang', 'Zhirui Gao', 'Zhaowen Li'], venue: 'ICLR 2027 · Under Review', url: 'https://arxiv.org/abs/2609.33944' },
  { title: 'Utility-WAM: Correcting Future-Induced Action Changes', authors: ['Feihong Zhang', 'Xi Lin', 'Yulong Shi', 'Zuxing Lu', 'Yanghong Mei', 'Zhaopeng Gu', 'Tingyu Yuan', 'Zihao Liang', 'Yinuo Wang', 'Zhaowen Li'], venue: 'ICLR 2027 · Under Review', url: 'https://arxiv.org/abs/2610.39367' },
  { title: 'Dual-Anchoring: Addressing State Drift in Vision-Language Navigation', authors: ['Kangyi Wu', 'Pengna Li', 'Kailin Lyu', 'Xi Lin', 'Lin Zhao', 'Qingrong He', 'Jinjun Wang', 'Jianyi Liu'], venue: 'ECCV 2026', url: 'https://arxiv.org/abs/2604.17473' },
  { title: 'BAT-Nav: Belief-Based Arbitration and Termination via Remaining Discoverability in Multi-Goal Semantic Navigation', authors: ['Xi Lin', 'Kangyi Wu', 'Jiayi Li', 'Jiaqiao Tang', 'Qingrong He', 'Lin Zhao'], venue: 'ICRA 2027 · Under Review', url: 'https://arxiv.org/abs/2605.16932' },
];
// Contribution symbols follow official papers or author-confirmed submission details.
export const contributionMarks: Record<string, Record<string, string>> = {
  'WASD: Writing Agents Steer Dreams': { 'Xi Lin': '*', 'Wenqian Zhang': '*', 'Zhixu Li': '*' },
  'https://arxiv.org/abs/2609.33944': { 'Xi Lin': '*', 'Feihong Zhang': '*', 'Yulong Shi': '*' },
  'https://arxiv.org/abs/2610.39367': { 'Feihong Zhang': '*', 'Xi Lin': '*', 'Yulong Shi': '*' },
  'https://arxiv.org/abs/2604.17473': { 'Kangyi Wu': '†', 'Pengna Li': '†', 'Kailin Lyu': '‡', 'Xi Lin': '‡' },
};
export const industry = [
  { company: 'Meituan LongCat', date: 'Nov 2026 · Incoming', description: 'Research Intern · Embodied Foundation Model Pretraining' },
  { company: 'Huawei Automotive BU', date: 'Apr 2026 – Sep 2026', description: 'Research Intern · World-Action Model Pretraining & Representation Learning' },
  { company: 'JD Explore Academy', date: 'Nov 2025 – Apr 2026', description: 'Research Intern · Vision-Language Navigation & Embodied Decision-Making' },
  { company: 'Xiaomi Robotics', date: 'Aug 2025 – Nov 2025', description: 'Robotics Engineering Intern · Humanoid Whole-Body Control' },
];
