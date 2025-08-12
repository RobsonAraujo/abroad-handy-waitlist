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
          <title>Welcome to In Progress</title>
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
          className="bg-gray-50 py-[40px]"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          <Container className="bg-white rounded-[12px] mx-auto p-[32px] max-w-[600px] shadow-lg border border-gray-200">
            <Section className="mt-[16px] text-center">
              <Text className="text-[28px] font-bold text-gray-900 m-0">
                Welcome to <span className="text-[#c6dd00]">In Progress</span>
              </Text>

              <Text className="text-[18px] text-gray-600 mt-[16px] mb-[16px]">
                We're thrilled to have you join our mentor waitlist
              </Text>

              <Hr className="border-solid border-gray-200 my-[16px] w-[80px] mx-auto" />
            </Section>

            <Section>
              <Text className="text-[16px] leading-[24px] text-gray-900 mt-[32px]">
                Hi {userFirstname},
              </Text>

              <Text className="text-[16px] leading-[24px] text-gray-700">
                Thanks for joining the waitlist for In Progress, our mentorship
                platform connecting students with verified mentors from top
                international universities like Harvard, Oxford, and Cambridge!
              </Text>

              <Text className="text-[16px] leading-[24px] text-gray-700">
                We're building something special to help students from around
                the world achieve their study abroad dreams, and your expertise
                will be invaluable. I'll personally keep you updated on our
                progress and let you know the moment the platform is ready for
                you to start mentoring.
              </Text>

              <Text className="text-[16px] leading-[24px] text-gray-700">
                As a waitlist member, you'll get early access, priority profile
                verification, reduced commission rates, and exclusive benefits.
                Got questions or ideas? Just hit reply, we'd love to hear from
                you.
              </Text>

              <Section className="my-[32px] text-center">
                <Text className="text-[24px] mb-[16px]">🚀 ✨ 🎓</Text>
                <Text className="text-[16px] text-gray-600 italic">
                  "The best way to predict the future is to create it."
                </Text>
                <Text className="text-[14px] text-gray-500 mt-[8px]">
                  Let's build something amazing together!
                </Text>
              </Section>

              <Text className="text-[16px] leading-[24px] text-gray-700">
                Want to stay connected? Follow us for updates on the platform
                development and early previews of mentor features.
              </Text>

              <Text className="text-[16px] leading-[24px] text-gray-700 mt-[24px]">
                All the best,
              </Text>

              <Text className="text-[16px] font-bold text-gray-900 mb-[8px]">
                Ali and Robson
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Founders, In Progress
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

            <Hr className="border-solid border-gray-200 my-[24px]" />

            <Section>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © {currentYear} In Progress. All rights reserved.
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
