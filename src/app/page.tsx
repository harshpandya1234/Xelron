
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
<div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-12 leading-tight">
            Bringing superior foundational models to life

            </h1>
            <p className="text-xl mb-6 leading-relaxed">
            We believe in a future where we unlock new possibilities and push the boundaries of what’s achievable.

            </p>
            <p className="text-xl font-bold mb-12 leading-relaxed">
              To start, we have two goals.
            </p>
          </div>
        </div>
      </section>

  {/* Goal 01 Section */}
  <section className="py-12 lg:py-16 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="text-xl text-gray-500">01</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
              Built to Advance Human Potential
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
              Training the foundational model for Code & Math
              </p>
              <p className="text-lg mb-8">
              At the core of human cognitive evolution lies our ability to reason through logic and math. With the same principle applied to AI, the multipliers are exponential.
That’s the problem we’re here to solve. 
              </p>
            </div>
            <div className="lg:w-1/2">
            </div>
          </div>
        </div>
      </section>



      {/* Goal 01 Section */}
      <section className="py-12 lg:py-16 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="text-xl text-gray-500">02</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
Obsessed with every decision</h2>
              <p className="text-lg font-bold mb-8 leading-relaxed">
              We’re deeply intentional about who we work with inside & out side of team.

              </p>
              <p className="text-lg mb-8">
              For us, quality isn’t a checkbox, it’s the only thing that truly matters. That’s why our core team is built with engineers from IIT Delhi, IIT Bombay, and 100x engineers of India with unmatched depth in coding and mathematics.
              </p>
            </div>
            <div className="lg:w-1/2">
            </div>
          </div>
        </div>
      </section>

      {/* Goal 02 Section */}
      <section className="py-12 lg:py-16 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-xl text-gray-500">03</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Engineered for Global Impact
            </h2>
            <p className="text-lg font-bold mb-8 leading-relaxed max-w-2xl">
             Led by serial entrepreneurs and alumni of IIT Delhi & IIT Bombay
            </p>
            <p className="text-lg  mb-8 leading-relaxed max-w-2xl">
            Our founding team brings a unique blend of deep technical expertise, product craftsmanship, and operational excellence. We’ve built world class solutions used by millions across the US and the world.
            </p>

          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-12 lg:py-16 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-6">Connect to Team</h2>
            <p className="text-lg mb-8 leading-relaxed max-w-2xl">
            Enhance Your Models
            </p>
            <p className="text-lg mb-8 leading-relaxed max-w-2xl">
            Get started with Xelron today and experience the power of human-collaborated enhancement.
            </p>


          </div>

        </div>
      </section>
    </div>
  );
}
