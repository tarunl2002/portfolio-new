import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    name: 'Brain Bridge',
    shortDesc: 'AI-powered games using LSTM for cognitive therapy.',
    tags: ['ESP8266', 'MQ135', 'NodeJS', 'TensorFlow'],
    fullDesc: 'Brain Bridge is an award-winning AI-powered application designed to support cognitive therapy for children. It features interactive brain-training games like Minesweeper and Tic-Tac-Toe to enhance memory, focus, and logic. The platform integrates a custom LSTM-based machine learning model trained on EEG data to assist in early-stage mental health diagnosis, making professional intervention more accessible and proactive. Designed with both playfulness and precision, Brain Bridge brings together gamification and AI for meaningful mental wellness.',
    image: '/images/BrianBridge.jpg', // Replace with your actual images
  },
  {
    name: 'Swachh',
    shortDesc: 'Blockchain platform for managing carbon credits.',
    fullDesc: 'Swachh is a blockchain-based platform built to incentivize companies to actively reduce their carbon emissions. Leveraging the Sepolia testnet and ERC-20 tokens, it enables enterprises to register, receive emission limits, and trade verified carbon credits transparently. The system ensures real-time monitoring, robust security, and scalability while promoting environmental sustainability. Swachh simplifies carbon credit management and fosters eco-conscious business practices through a seamless and decentralized solution.',
    tags: ['Solidity', 'Raspberry PI', 'MongoDB', 'Flutter'],
    image: '/images/Swachh.jpg',
  },
  {
    name: 'BrewCraft',
    shortDesc: 'ML-driven health recipes stored with IPFS.',
    fullDesc: 'BrewCraft is a smart health recipe application that merges gamification, machine learning, and decentralized storage to offer personalized nutrition. Users can drag and drop ingredients in a playful interface to discover suitable recipes. In addition, the app analyzes blood reports using ML models to recommend meals tailored to individual nutritional deficiencies. To ensure data privacy and security, BrewCraft stores blood reports on IPFS, providing decentralized and tamper-proof access. It’s a complete solution for health-conscious and tech-savvy users alike.',
    tags: ['Python', 'NodeJS', 'IPFS', 'React'],
    image: '/images/Feast_ML.jpg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <h2 className="text-4xl font-bold text-center text-white mb-12">🚀 Highlighted Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
