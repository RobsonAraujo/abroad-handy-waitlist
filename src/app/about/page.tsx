import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connecting Dreams to Reality
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A platform that bridges the gap between aspiring students and
            mentors from top international universities
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 md:px-10 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">For Students</h3>
              <p className="text-muted-foreground">
                We connect students from countries like Brazil, India, China,
                and Nigeria with verified mentors who are currently studying or
                have studied at prestigious institutions like Harvard, Oxford,
                and Cambridge.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Browse verified mentor profiles</li>
                <li>• Filter by university or topic</li>
                <li>• Book 30 or 60-minute sessions</li>
                <li>• Get essay reviews and application strategy</li>
                <li>• Receive scholarship guidance and interview prep</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">For Mentors</h3>
              <p className="text-muted-foreground">
                Share your experience and earn money by helping students achieve
                their dreams of studying abroad.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Create and verify your profile</li>
                <li>• Set your availability and rates</li>
                <li>• Sync with Google Calendar</li>
                <li>• Receive secure payments</li>
                <li>• Build your reputation through reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold text-xl">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold">Connect</h3>
              <p className="text-muted-foreground">
                Students browse mentor profiles and book sessions based on their
                needs and goals.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold text-xl">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold">Mentor</h3>
              <p className="text-muted-foreground">
                Mentors provide personalized guidance through video calls,
                covering everything from essays to interviews.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold text-xl">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold">Succeed</h3>
              <p className="text-muted-foreground">
                Students gain the knowledge and confidence to successfully apply
                to their dream universities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-16 px-4 md:px-10 bg-[#e5ff00]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Mentor Waitlist</h2>

          <div className="max-w-2xl mx-auto space-y-6 mb-8">
            <p className="text-lg text-muted-foreground">
              Are you currently studying or have you graduated from a top
              international university? Join our exclusive waitlist for mentors
              and be among the first to help students achieve their dreams.
            </p>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">
                Why Join the Waitlist?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e5ff00] rounded-full"></div>
                    <span className="text-sm">
                      Early access to the platform
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e5ff00] rounded-full"></div>
                    <span className="text-sm">
                      Priority profile verification
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e5ff00] rounded-full"></div>
                    <span className="text-sm">Reduced commission rates</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e5ff00] rounded-full"></div>
                    <span className="text-sm">Exclusive mentor community</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e5ff00] rounded-full"></div>
                    <span className="text-sm">First-mover advantage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#e5ff00] rounded-full"></div>
                    <span className="text-sm">Direct feedback on features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/">
            <Button
              size="lg"
              className="cursor-pointer bg-[#e5ff00] hover:bg-[#e5ff00] text-black"
            >
              Join Mentor Waitlist
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            To make top-tier mentorship accessible to every student, anywhere in
            the world. We believe that geographical location should never be a
            barrier to achieving educational dreams.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're a student looking for guidance or a mentor wanting to
            share your experience, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="cursor-pointer bg-[#e5ff00] hover:bg-[#e5ff00] text-black"
              >
                Join as Mentor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
