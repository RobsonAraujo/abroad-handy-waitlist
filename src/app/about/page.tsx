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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Students */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">For Students</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                We connect students from countries like Brazil, India, China,
                Pakistan and Nigeria with verified mentors who are currently
                studying or have studied at prestigious institutions like
                Harvard, Oxford, and Boston University.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Browse verified mentor profiles
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Filter by university or topic
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Book 30 or 60-minute sessions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Get essay reviews and application strategy
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Receive scholarship guidance and interview prep
                  </span>
                </div>
              </div>
            </div>

            {/* For Mentors */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">For Mentors</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Share your experience and earn money by helping students achieve
                their dreams of studying abroad.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Create and verify your profile
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Set your availability and rates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Sync with Google Calendar
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Receive secure payments
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Build your reputation through reviews
                  </span>
                </div>
              </div>
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
      <section className="py-16 px-4 md:px-10 bg-[#f9cc14]/10">
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
                    <div className="w-2 h-2 bg-[#f9cc14] rounded-full"></div>
                    <span className="text-sm">
                      Early access to the platform
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#87efac] rounded-full"></div>
                    <span className="text-sm">
                      Priority profile verification
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#2463eb] rounded-full"></div>
                    <span className="text-sm">Reduced commission rates</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#c87dff] rounded-full"></div>
                    <span className="text-sm">Exclusive mentor community</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#87efac] rounded-full"></div>
                    <span className="text-sm">First-mover advantage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#2463eb] rounded-full"></div>
                    <span className="text-sm">Direct feedback on features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/">
            <Button size="lg" variant="default">
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
              <Button size="lg" variant="default">
                Join as Mentor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
