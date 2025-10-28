import { Button } from "~/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our Founders
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The visionaries behind Abroad Handy, combining academic excellence
            and technological innovation
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Ali Aanish Rehman */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8 relative">
                  <div className="relative w-52 h-52 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gray-200 rounded-full opacity-20 blur-lg"></div>
                    <Image
                      src="/ali.jpeg"
                      alt="Ali Aanish Rehman"
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-gray-900">
                    Ali Aanish Rehman
                  </h2>
                  <p className="text-lg text-gray-600 font-medium mb-4">
                    Master in Public Policy Candidate at Harvard Kennedy School
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/aanishr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Connect on LinkedIn
                    </Button>
                  </Link>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-gray-700 relative">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gray-200 rounded-full opacity-50"></div>
                  <p className="pl-4">
                    Ali Aanish Rehman is a Master in Public Policy candidate at
                    Harvard Kennedy School specializing in data-driven
                    policymaking and quantitative analysis. His work integrates
                    econometrics, finance, and development economics to tackle
                    complex policy challenges across governance, investment, and
                    sustainability.
                  </p>

                  <p className="pl-4">
                    At Harvard's Mossavar-Rahmani Center for Business and
                    Government, he contributes to research that quantifies legal
                    and economic risks in global investment and arbitration. His
                    work with the United Nations focuses on designing
                    cost-benefit frameworks and policy benchmarking tools that
                    help governments evaluate and prioritize high-impact,
                    SDG-aligned investments.
                  </p>

                  <p className="pl-4">
                    Ali holds a B.A. in Econometrics and Quantitative Economics
                    from DePauw University and studied Health Economics and
                    International Trade at the University of Oxford. His
                    academic and professional experience spans data science,
                    financial policy, and international development.
                  </p>

                  <p className="pl-4">
                    Beyond his policy work, Ali is a former Junior National Golf
                    Champion who has represented Pakistan in multiple
                    international tournaments.
                  </p>
                </div>
              </div>
            </div>

            {/* Robson Araujo Carmo */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8 relative">
                  <div className="relative w-52 h-52 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gray-200 rounded-full opacity-20 blur-lg"></div>
                    <Image
                      src="/robson.jpeg"
                      alt="Robson Araujo Carmo"
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-gray-900">
                    Robson Araujo Carmo
                  </h2>
                  <p className="text-lg text-gray-600 font-medium mb-4">
                    MBA Candidate in Management Science at Boston University
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/robson-araujo-carmo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Connect on LinkedIn
                    </Button>
                  </Link>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-gray-700 relative">
                  <div className="absolute -right-2 top-0 bottom-0 w-1 bg-gray-200 rounded-full opacity-50"></div>
                  <p className="pr-4">
                    Robson is an MBA candidate in Management Science at Boston
                    University Questrom School of Business and an experienced
                    technology leader with over eight years in full-stack web
                    and mobile development.
                  </p>

                  <p className="pr-4">
                    He has led high-impact projects for global brands, including
                    Mitsubishi Motors Brazil and Mobiauto, building scalable
                    architectures and integrating strategic systems that now
                    process millions of dollars monthly.
                  </p>

                  <p className="pr-4">
                    At Mobiauto, he coordinated a 12-member development team,
                    driving millions of monthly page views and enhancing SEO
                    performance.
                  </p>

                  <p className="pr-4">
                    His expertise spans JavaScript, TypeScript, React.js,
                    Node.js, SQL, Python, and cloud-based solutions,
                    complemented by a strong ability to lead cross-functional
                    teams and align technology with business goals.
                  </p>

                  <p className="pr-4">
                    Beyond his technical work, Robson dedicates his time as a
                    career mentor, helping students navigate their professional
                    development and achieve their career goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 md:px-10 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Together, Ali and Robson bring a unique combination of academic
            rigor, international experience, and technological expertise to
            create a platform that truly bridges the gap between aspiring
            students and world-class mentors. Their diverse backgrounds in
            policy analysis, technology, and global education enable them to
            build solutions that address real challenges in international
            education access.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Academic Excellence
              </h3>
              <p className="text-muted-foreground text-sm">
                With backgrounds from Harvard Kennedy School and Boston
                University, our founders understand the value of quality
                education and the challenges students face in accessing top-tier
                institutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Technical Innovation
              </h3>
              <p className="text-muted-foreground text-sm">
                Combining years of technology leadership with modern development
                practices, we're building a platform that's both powerful and
                user-friendly for students and mentors worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be part of a platform built by experienced professionals who
            understand both the academic and technological challenges of
            international education.
          </p>
          <Link href="/">
            <Button size="lg" variant="default">
              Join the Waitlist
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
