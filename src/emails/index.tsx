import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const WaitlistEmail = ({ userFirstname }: { userFirstname: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Tailwind>
        <Head>
          <title>Welcome to Abroad Handy</title>
          <Preview>
            Thanks for joining our mentor waitlist! We'll keep you updated on
            our progress.
          </Preview>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700&display=swap');
            `}
          </style>
        </Head>
        <Body
          className="bg-gradient-to-br from-gray-50 to-gray-100 py-[40px]"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          <Container className="bg-white rounded-[20px] mx-auto p-[40px] max-w-[600px] shadow-2xl border border-gray-200">
            {/* Header with decorative elements */}
            <Section className="text-center mb-[32px] bg-gradient-to-br from-[#e5ff00]/20 to-[#DFFF1A]/20 rounded-[20px] p-[32px]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e5ff00] to-[#DFFF1A] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <Text className="text-[32px] font-bold text-gray-900 m-0">
                Welcome to <span className="text-[#c6dd00]">Abroad Handy</span>
              </Text>
              <Text className="text-[18px] text-gray-600 mt-[16px] mb-[16px]">
                We're thrilled to have you join our mentor waitlist
              </Text>
              <div className="w-20 h-1 bg-gradient-to-r from-[#e5ff00] to-[#DFFF1A] mx-auto rounded-full"></div>
            </Section>

            {/* Main content */}
            <Section className="bg-gradient-to-br from-gray-50 to-white rounded-[16px] p-[32px] mb-[32px]">
              <Text className="text-[18px] leading-[28px] text-gray-900 mt-0 mb-[24px] font-semibold">
                Hi {userFirstname},
              </Text>

              <Text className="text-[16px] leading-[26px] text-gray-700 mb-[20px]">
                Thanks for joining the waitlist for Abroad Handy, our mentorship
                platform connecting students with verified mentors from top
                international universities like Harvard, Oxford, and Cambridge!
              </Text>

              <Text className="text-[16px] leading-[26px] text-gray-700 mb-[20px]">
                We're building something special to help students from around
                the world achieve their study abroad dreams, and your expertise
                will be invaluable. I'll personally keep you updated on our
                progress and let you know the moment the platform is ready for
                you to start mentoring.
              </Text>

              <Text className="text-[16px] leading-[26px] text-gray-700 mb-[24px]">
                As a waitlist member, you'll get early access, priority profile
                verification, and exclusive benefits. Got questions or ideas?
                Just hit reply, we'd love to hear from you.
              </Text>

              {/* Benefits highlight box */}
              <div className="bg-white rounded-[12px] p-[24px] border border-gray-200 mb-[24px]">
                <Text className="text-[16px] font-semibold text-gray-900 mb-[16px] text-center">
                  ✨ Your Exclusive Benefits
                </Text>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#e5ff00] rounded-full mr-1"></div>
                    <span className="text-gray-700">Early Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#e5ff00] rounded-full mr-1"></div>
                    <span className="text-gray-700">Priority Verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#e5ff00] rounded-full mr-1"></div>
                    <span className="text-gray-700">Exclusive Community</span>
                  </div>
                </div>
              </div>
            </Section>

            {/* Inspirational section */}
            <Section className="text-center mb-[32px]">
              <div className="bg-gradient-to-r from-[#e5ff00]/10 to-[#DFFF1A]/10 rounded-[16px] p-[24px]">
                <Text className="text-[24px] mb-[16px]">🚀 ✨ 🎓</Text>
                <Text className="text-[16px] text-gray-600 italic mb-[8px]">
                  "The best way to predict the future is to create it."
                </Text>
                <Text className="text-[14px] text-gray-500">
                  Let's build something amazing together!
                </Text>
              </div>
            </Section>

            <Text className="text-[16px] leading-[26px] text-gray-700 mb-[24px] text-center">
              Want to stay connected? Follow us for updates on the platform
              development and early previews of mentor features.
            </Text>

            {/* Signature */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[16px] leading-[26px] text-gray-700 mb-[8px]">
                All the best,
              </Text>
              <Text className="text-[18px] font-bold text-gray-900 mb-[4px]">
                Ali and Robson
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[16px]">
                Founders, Abroad Handy
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[32px]">
                <Link
                  href="https://www.linkedin.com/in/aanishr/"
                  className="text-blue-600 underline"
                >
                  Ali's LinkedIn
                </Link>{" "}
                |{" "}
                <Link
                  href="https://www.linkedin.com/in/robson-araujo-carmo/"
                  className="text-blue-600 underline"
                >
                  Robson's LinkedIn
                </Link>
              </Text>
            </Section>

            {/* Footer */}
            <Hr className="border-gray-200 my-[24px]" />

            <Section>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © {currentYear} Abroad Handy. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                Connecting students with world-class mentors
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WaitlistEmail;
