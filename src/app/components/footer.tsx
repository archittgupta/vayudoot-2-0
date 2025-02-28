import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const navigation = [
    { name: 'Team', href: '/team' },
    { name: 'Partners', href: '/partners' },
    { name: 'Guidelines', href: '/guidelines' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'About', href: '/about' },
    { name: 'Home', href: '/' }
];

const legalLinks = [
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
];

const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/archittgupta/vayudoot-2-0' },  // ✅ Replaced Facebook with GitHub
    { name: 'Twitter', icon: Twitter, href: 'http://twitter.com/' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/vayudoot_abesec?utm_source=qr&igsh=MWJ5cXFrYjNjc2UxOQ==' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF5ckQMCpHLxQAAAZVOAI2wmff3W_Fr6AKTbNz15w8J9irHPQwHCbe8VNEvCMMPiCr7Ds4cS5ScB3PfEivj6ueq5Q5bmdDuRlyWKkmeCLSUCKVMC4Qth1tu0PPKBBiwY13OAmg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Farchit-gupta-973b93261' },
];

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* ✅ Main Navigation - Responsive */}
                <nav className="flex flex-wrap justify-center gap-6 sm:gap-6 text-sm md:text-base mb-8">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="hover:text-gray-300 transition-colors">
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* ✅ Divider */}
                <div className="border-t border-gray-800 mb-8 mx-auto w-full max-w-4xl"></div>

                {/* ✅ Social Links - Responsive */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-6 mb-8">
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
                <div className="flex flex-row sm:flex-row justify-center gap-4 text-xs sm:text-sm text-gray-400 mb-6">
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
