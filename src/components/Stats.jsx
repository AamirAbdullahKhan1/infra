import { Building2, Users, BadgeCheck } from 'lucide-react';

const stats = [
  {
    icon: <Building2 className="h-8 w-8 text-indigo-600" />,
    value: '500+',
    label: 'Available Equipment'
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    value: '10,000+',
    label: 'Researchers Served'
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-indigo-600" />,
    value: '98%',
    label: 'Satisfaction Rate'
  }
];

export default function Stats() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-4 p-10 bg-neutral-2 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-lg">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}