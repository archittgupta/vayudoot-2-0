import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const navigation = [
    { name: 'Team', href: '/components/overview' },
    { name: 'Partners', href: '/components/sponsers' },
    { name: 'Overview', href: '/components/guidelines' },
    { name: 'Sponsors', href: '/components/news' },
    { name: 'About', href: '/components/faq' },
    { name: 'Home', href: '/components/faq' }
];

const legalLinks = [
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
];

const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },  // ✅ Replaced Facebook with GitHub
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* ✅ Main Navigation - Responsive */}
                <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm md:text-base mb-8">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="hover:text-gray-300 transition-colors">
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* ✅ Divider */}
                <div className="border-t border-gray-800 mb-8 mx-auto w-full max-w-4xl"></div>

                {/* ✅ Social Links - Responsive */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
                    {socialLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a key={item.name} href={item.href} className="hover:text-gray-300 transition-colors" aria-label={item.name}>
                                <Icon className="w-6 h-6" />
                            </a>
                        );
                    })}
                </div>

                {/* ✅ Legal Links - Stacked on Mobile, Inline on Larger Screens */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs sm:text-sm text-gray-400 mb-6">
                    {legalLinks.map((item) => (
                        <a key={item.name} href={item.href} className="hover:text-gray-300 transition-colors">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* ✅ Copyright */}
                <div className="text-center text-xs sm:text-sm text-gray-500">
                    <p>© Vayudoot Foundation. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
