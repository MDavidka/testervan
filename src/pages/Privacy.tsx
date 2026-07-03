export default function Privacy() {
  const sections = [
    {
      title: 'Information We Collect',
      content:
        'We collect information you provide directly to us, such as your name, email address, and billing information when you create an account or contact our support team. We also automatically collect certain technical information when you use our services, including IP addresses, browser type, device information, and usage data.',
    },
    {
      title: 'How We Use Your Information',
      content:
        'We use the information we collect to provide, maintain, and improve our hosting services; process transactions and send related information; communicate with you about your account, updates, and technical issues; and detect, investigate, and prevent fraudulent or unauthorized activities.',
    },
    {
      title: 'Data Storage & Security',
      content:
        'Your data is stored on secure servers across our global network of data centers. We implement industry-standard encryption protocols (SSL/TLS), firewalls, and access controls to protect your information. Regular security audits and penetration testing are conducted to ensure the integrity of our systems.',
    },
    {
      title: 'Data Sharing & Disclosure',
      content:
        'We do not sell your personal information to third parties. We may share your data with trusted service providers who assist us in operating our infrastructure (e.g., payment processors, cloud providers), bound by strict confidentiality agreements. We may also disclose information when required by law or to protect our rights.',
    },
    {
      title: 'Your Rights & Choices',
      content:
        'You have the right to access, update, or delete your personal information at any time through your account settings. You can opt out of marketing communications at any time. Depending on your jurisdiction, you may have additional rights under applicable data protection laws, including the GDPR and CCPA.',
    },
    {
      title: 'Cookies & Tracking',
      content:
        'We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie preferences through your browser settings. Essential cookies are required for the basic functionality of our platform.',
    },
    {
      title: 'Third-Party Services',
      content:
        'Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.',
    },
    {
      title: 'Changes to This Policy',
      content:
        'We may update this privacy policy from time to time. We will notify you of material changes by email or through a prominent notice on our website. Your continued use of our services after such modifications constitutes acceptance of the updated policy.',
    },
    {
      title: 'Contact Us',
      content:
        'If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact our Data Protection Officer at privacy@nebulahost.com or write to us at 548 Market Street, Suite 98420, San Francisco, CA 94104, United States.',
    },
  ];

  return (
    <>
      <section className="pt-32 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Last updated: March 15, 2024
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              At NebulaHost, we take your privacy seriously. This policy describes how we collect,
              use, and protect your personal information when you use our hosting services and website.
            </p>

            {sections.map((section) => (
              <div key={section.title} className="mb-10">
                <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}