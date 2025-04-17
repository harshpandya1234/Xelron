'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ResearchPage() {
  const demoRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-12 leading-tight">
              Bringing superior foundational models to life

            </h1>
            <div className="text-gray-600 mb-8">
              <p>February 27, 2025</p>
              <p>Brendan Iribe, Ankit Kumar, and the Sesame team</p>
            </div>

            <button
              onClick={scrollToDemo}
              className="bg-gray-100 hover:bg-gray-200 transition-colors py-3 px-6 rounded-full text-black flex items-center space-x-2 mb-12"
            >
              <span>Try our demo</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L16 6L8 0V12Z" fill="currentColor"/>
              </svg>
            </button>

            <div className="prose prose-lg max-w-none">
              <p>
                How do we know when someone truly understands us? It is rarely just our words—it is in
                the subtleties of voice: the rising excitement, the thoughtful pause, the warm reassurance.
              </p>
              <p>
                Voice is our most intimate medium as humans, carrying layers of meaning through
                countless variations in tone, pitch, rhythm, and emotion.
              </p>
              <p>
                Today's digital voice assistants lack essential qualities to make them truly useful.
                Without unlocking the full power of voice, they cannot hope to effectively collaborate with us.
                A personal assistant who speaks only in a neutral tone has difficulty finding a permanent place
                in our daily lives after the initial novelty wears off.
              </p>
              <p>
                Over time this emotional flatness becomes more than just disappointing—it becomes exhausting.
              </p>

              <h3>Achieving voice presence</h3>
              <p>
                At Sesame, our goal is to achieve "voice presence"—the magical quality that makes spoken
                interactions feel real, understood, and valued. We are creating conversational partners that
                do not just process requests; they engage in genuine dialogue that builds confidence and trust
                over time. In doing so, we hope to realize the untapped potential of voice as the ultimate
                interface for instruction and understanding.
              </p>

              <h3>Key components</h3>
              <ul>
                <li>Emotional intelligence: reading and responding to emotional contexts.</li>
                <li>Conversational dynamics: natural timing, pauses, interruptions and emphasis.</li>
                <li>Contextual awareness: adjusting tone and style to match the situation.</li>
                <li>Consistent personality: maintaining a coherent, reliable and appropriate presence.</li>
              </ul>

              <h3>We're not there yet</h3>
              <p>
                Building a digital companion with voice presence is not easy, but we are making steady progress
                on multiple fronts, including personality, memory, expressivity and appropriateness. This demo
                is a showcase of some of our work in conversational speech generation. The companions shown here
                have been optimized for friendliness and expressivity to illustrate the potential of our approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" ref={demoRef} className="py-12 bg-gray-100 rounded-lg mx-8">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Conversational voice demo</h2>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <img src="https://ext.same-assets.com/3576116775/3686648247.svg" alt="Maya" className="mb-2 mx-auto" />
                <p className="font-medium">Maya</p>
              </div>

              <div className="text-center">
                <img src="https://ext.same-assets.com/3576116775/2279530158.svg" alt="Miles" className="mb-2 mx-auto" />
                <p className="font-medium">Miles</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
                Press to start a conversation
              </button>
              <p className="mt-4 text-gray-500">
                <Link href="/login" className="text-black hover:underline">Log in</Link> for calls up to 30 minutes.
              </p>
            </div>

            <div className="mt-8 text-center text-gray-500">
              <p className="font-medium" />
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <ol className="list-decimal list-inside space-y-1">
                <li>Microphone permission is required.</li>
                <li>Calls are recorded and may be used to improve Maya and Miles.</li>
                <li>By using this demo, you are agreeing to our <Link href="/terms" className="text-black hover:underline">Terms of Use</Link> and <Link href="/privacy" className="text-black hover:underline">Privacy Policy</Link>.</li>
                <li>We recommend using Chrome (Audio quality may be degraded in iOS/Safari 17.5).</li>
                <li>Demo not intended for users in EEA/UK/Switzerland.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Post Section */}
      <section id="technical" className="py-12 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <h2>Technical post</h2>
              <h1>Conversational speech generation</h1>

              <div className="mb-8">
                <h3>Authors</h3>
                <p>
                  Johan Schalkwyk, Ankit Kumar, Dan Lyth, Sefik Emre Eskimez, Zack Hodari,
                  Cinjon Resnick, Ramon Sanabria, Raven Jiang
                </p>
              </div>

              <p>
                To create AI companions that feel genuinely interactive, speech generation must go beyond
                producing high-quality audio—it must understand and adapt to context in real time. Traditional
                text-to-speech (TTS) models generate spoken output directly from text but lack the contextual
                awareness needed for natural conversations. Even though recent models produce highly human-like
                speech, they struggle with the one-to-many problem: there are countless valid ways to speak a
                sentence, but only some fit a given setting. Without additional context—including tone, rhythm,
                and history of the conversation—models lack the information to choose the best option. Capturing
                these nuances requires reasoning across multiple aspects of language and prosody.
              </p>

              <p>
                To address this, we introduce the Conversational Speech Model (CSM), which frames the problem as
                an end-to-end multimodal learning task using transformers. It leverages the history of the
                conversation to produce more natural and coherent speech. There are two key takeaways from
                our work. The first is that CSM operates as a single-stage model, thereby improving efficiency
                and expressivity. The second is our evaluation suite, which is necessary for evaluating progress
                on contextual capabilities and addresses the fact that common public evaluations are saturated.
              </p>

              {/* Additional technical content would be added here */}

              <h3>Samples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4>Paralinguistics</h4>
                  <audio controls className="w-full">
                    <source src="https://ext.same-assets.com/3576116775/3683253119.wav" type="audio/wav" />
                    <track kind="captions" src="#" label="English captions" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <div>
                  <h4>Foreign words</h4>
                  <audio controls className="w-full">
                    <source src="https://ext.same-assets.com/3576116775/175469010.wav" type="audio/wav" />
                    <track kind="captions" src="#" label="English captions" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <div>
                  <h4>Contextual expressivity</h4>
                  <audio controls className="w-full">
                    <source src="https://ext.same-assets.com/3576116775/2402616692.wav" type="audio/wav" />
                    <track kind="captions" src="#" label="English captions" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <div>
                  <h4>Pronunciation correction</h4>
                  <audio controls className="w-full">
                    <source src="https://ext.same-assets.com/3576116775/1890563539.wav" type="audio/wav" />
                    <track kind="captions" src="#" label="English captions" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>

              <div className="mb-8">
                <h4>Conversations with multiple speakers</h4>
                <audio controls className="w-full">
                  <source src="https://ext.same-assets.com/3576116775/1647771852.wav" type="audio/wav" />
                  <track kind="captions" src="#" label="English captions" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-sm text-gray-500 mt-2">
                  Single generation using audio prompts from two speakers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
