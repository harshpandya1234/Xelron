import Link from 'next/link';

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-12">Team</h1>

          <div className="max-w-3xl">
            <p className="text-xl mb-6 leading-relaxed">
              Sesame is led by <strong>Brendan Iribe, Ankit Kumar, Ryan Brown</strong>, and a team of
              creative individuals with a shared passion. We are backed by Anjney Midha
              and Marc Andreessen at Andreessen Horowitz, along with Spark Capital,
              Matrix Partners, and a collection of founders and investors.
            </p>

            <p className="text-xl mb-6 leading-relaxed">
              We have offices in San Francisco, Bellevue, and New York. Our team
              members have long-tenured careers in machine learning, hardware,
              software, and entertainment.
            </p>

            <p className="text-xl mb-8 leading-relaxed">
              We strongly believe that a small, focused team with a clear vision can build
              great things.
            </p>

            <Link
              href="https://jobs.ashbyhq.com/sesame"
              className="inline-flex items-center bg-gray-100 hover:bg-gray-200 transition-colors py-3 px-6 rounded-full text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">See open roles</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L8 12L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Images Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="relative rounded-lg overflow-hidden aspect-w-16 aspect-h-9 mb-4">
            <img
              src="https://ext.same-assets.com/2799681230/849522504.jpeg"
              alt="Team at work"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex justify-end">
            <span className="text-sm text-gray-500">1 / 4</span>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12 lg:py-16 border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Product</h2>
            <p className="text-lg mb-6 leading-relaxed">
              We are building voice companions capable of holding natural conversations
              and devices that make them more effective.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Voice as an interface is nuanced and intimate, which makes it a difficult
              medium to get right. There is a high bar that must be met for voice interfaces
              to be useful and not annoying, and we are careful and deliberate in how we
              design our products to meet our users where they want to be.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              We believe that a great voice product calls for an interdisciplinary approach
              that tightly integrates hardware, software, and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-12 lg:py-16 border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Research</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Deep and innovative machine learning research is essential to our goals.
              Our research team is actively pushing forward on multiple fronts, including
              speech generation, personality modeling, and multimodality. Read more about our
              research in{' '}
              <Link href="/research/crossing_the_uncanny_valley_of_voice#technical" className="text-black underline hover:text-gray-700">
                conversational speech generation
              </Link>.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              These ambitious research outcomes are only possible with scaled infrastructure
              for data and training. We operate large GPU clusters and cultivate in-house
              expertise in training and evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16 border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Interested?</h2>
            <p className="text-lg mb-8 leading-relaxed">
              If what we are doing resonates with you, reach out.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:careers@sesame.com"
                className="bg-gray-100 hover:bg-gray-200 transition-colors py-3 px-6 rounded-full text-black"
              >
                Email us
              </Link>
              <Link
                href="https://jobs.ashbyhq.com/sesame"
                className="bg-gray-100 hover:bg-gray-200 transition-colors py-3 px-6 rounded-full text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                See open roles
              </Link>
              <Link
                href="https://www.linkedin.com/company/sesameai/"
                className="bg-gray-100 hover:bg-gray-200 transition-colors py-3 px-6 rounded-full text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sesame on Linkedin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
