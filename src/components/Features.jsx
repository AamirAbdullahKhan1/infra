import { Microscope, Building2, Calendar, Clock, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: <Microscope className="h-6 w-6" />,
    title: 'Research Equipment',
    description: 'Access state-of-the-art research equipment from top institutions across India'
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: 'Lab Facilities',
    description: 'Book complete laboratory spaces for your research and development needs'
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Easy Booking',
    description: 'Streamlined booking process with real-time availability updates'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Flexible Duration',
    description: 'Book facilities for hours, days, or weeks based on your requirements'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure Platform',
    description: 'Verified institutions and secure payment processing'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Expert Support',
    description: 'Get assistance from facility experts during your sessions'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Access world-class facilities and equipment from leading institutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}