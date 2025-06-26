export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Understanding Quantum Algorithms',
    date: '2024-05-01',
    excerpt: 'A brief overview of quantum algorithms and their potential applications.',
    content: `Quantum computing promises to revolutionize computing by leveraging qubits to perform calculations beyond classical capabilities. In this post we explore basic quantum algorithms such as Grover's and Shor's and discuss their implications for the future.`,
  },
  {
    id: '2',
    title: 'Teaching with AI Assistance',
    date: '2024-06-15',
    excerpt: 'How artificial intelligence can support modern pedagogy.',
    content: `Artificial intelligence tools can personalize learning and automate administrative tasks. We look at current technologies and share strategies for integrating AI into the classroom while maintaining a human-centered approach to education.`,
  },
  {
    id: '3',
    title: 'The Importance of Open Research',
    date: '2024-07-20',
    excerpt: 'Why sharing research openly accelerates scientific progress.',
    content: `Open research fosters collaboration and transparency. By making data and methodologies accessible, researchers can validate findings and build on each other's work more effectively. This post outlines best practices for sharing and collaborating in academia.`,
  },
];
