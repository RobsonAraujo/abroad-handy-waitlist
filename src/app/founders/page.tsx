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
          <p className="text-xl text-muted-foreground mb-8">
            The visionaries behind "In Progress", combining academic excellence
            and technological innovation
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Ali Aanish Rehman */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-6">
                  <Image
                    src="/ali.jpeg"
                    alt="Ali Aanish Rehman"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-2">Ali Aanish Rehman</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Master in Public Policy Candidate at Harvard Kennedy School
                </p>
                <Link
                  href="https://www.linkedin.com/in/aanishr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Connect on LinkedIn
                  </Button>
                </Link>
              </div>

              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Ali is a Master in Public Policy candidate at Harvard Kennedy
                  School, specializing in data and research methods applied to
                  economic policy, foreign direct investment, and trade
                  disputes.
                </p>

                <p>
                  His work at the Mossavar-Rahmani Center for Business and
                  Government involves analyzing over 300 investor–state
                  arbitration cases across Latin America, applying time series
                  and panel regressions to quantify legal and economic risks,
                  and creating R-based visualizations for academic publication.
                </p>

                <p>
                  He brings experience from the International Organization for
                  Migration, where he optimized operational performance, and
                  from portfolio management, where he achieved an average annual
                  return of 35% through strategic investments in REITs, energy
                  stocks, and bitcoin mining.
                </p>

                <p>
                  With a strong academic foundation in econometrics from DePauw
                  University and international exposure at the University of
                  Oxford, Ali combines rigorous quantitative skills with a
                  global perspective.
                </p>

                <p>
                  Outside of work, he is a former Junior National Champion
                  golfer who has represented Pakistan in multiple international
                  championships.
                </p>
              </div>
            </div>

            {/* Robson Araujo Carmo */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-6">
                  <Image
                    src="/robson.jpeg"
                    alt="Robson Araujo Carmo"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-2">Robson Araujo Carmo</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  MBA Candidate in Management Science at Boston University
                  {/* Questrom School of Business */}
                </p>
                <Link
                  href="https://www.linkedin.com/in/robson-araujo-carmo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Connect on LinkedIn
                  </Button>
                </Link>
              </div>

              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Robson is an MBA candidate in Management Science at Boston
                  University Questrom School of Business and an experienced
                  technology leader with over eight years in full-stack web and
                  mobile development.
                </p>

                <p>
                  He has led high-impact projects for global brands, including
                  Mitsubishi Motors, Mercedes-Benz, and Banco PAN, building
                  scalable architectures and integrating strategic systems that
                  now process millions of dollars monthly.
                </p>

                <p>
                  At Mobiauto, he coordinated a 12-member development team,
                  driving millions of monthly page views and enhancing SEO
                  performance. At Nearsure, he engineered web architectures that
                  improved system efficiency by 15% for major clients, while
                  advising on technology adoption strategies.
                </p>

                <p>
                  His expertise spans JavaScript, TypeScript, React.js, Node.js,
                  SQL, PHP, and cloud-based solutions, complemented by a strong
                  ability to lead cross-functional teams and align technology
                  with business goals.
                </p>

                <p>
                  Passionate about innovation and continuous learning, Robson
                  thrives in dynamic environments, blending technical mastery
                  with strategic vision to deliver impactful digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 md:px-10 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Together, Ali and Robson bring a unique combination of academic
            rigor, international experience, and technological expertise to
            create a platform that truly bridges the gap between aspiring
            students and world-class mentors. Their diverse backgrounds in
            policy analysis, technology, and global education enable them to
            build solutions that address real challenges in international
            education access.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Academic Excellence</h3>
              <p className="text-muted-foreground">
                With backgrounds from Harvard Kennedy School and Boston
                University, our founders understand the value of quality
                education and the challenges students face in accessing top-tier
                institutions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technical Innovation</h3>
              <p className="text-muted-foreground">
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
            <Button
              size="lg"
              className="bg-[#e5ff00] hover:bg-[#e5ff00] text-black"
            >
              Join the Waitlist
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
