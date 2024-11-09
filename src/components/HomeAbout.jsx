import { BadgeCheck } from 'lucide-react';

const benefits = [
  'Access to cutting-edge equipment and facilities',
  'Simplified booking and management system',
  'Verified institutional partners',
  'Dedicated support team',
  'Transparent pricing and policies'
];

export default function AboutHome() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="Research Lab"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Empowering Research Across India
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              InfraShare bridges the gap between institutions and researchers, making advanced research infrastructure accessible to all. Our platform enables efficient resource sharing and fosters collaboration across the scientific community.
            </p>
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center">
                  <BadgeCheck className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}