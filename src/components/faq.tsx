"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <div className="flex flex-col items-center justify-center gap-2 max-w-md">
        <h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="sm:text-base text-sm text-muted-foreground text-center">
          Everything you need to know about joining our mentor waitlist and the
          platform.
        </p>
      </div>
      <div className="w-full max-w-lg">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              What is the "In Progress" platform?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              "In Progress" is a mentorship platform that connects aspiring
              students with verified mentors who are currently studying or have
              graduated from top international universities like Harvard,
              Oxford, and Cambridge. Students can book 30 or 60-minute sessions
              for essay reviews, application strategy, scholarship guidance, and
              interview preparation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline">
              Who can join the mentor waitlist?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              The waitlist is open to students and graduates from top
              international universities who want to share their experience and
              help others achieve their study abroad dreams. Whether you're
              currently enrolled or have already graduated, if you have valuable
              insights about the application process, we'd love to have you on
              board.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline">
              What are the benefits of joining the waitlist?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Waitlist members get early access to the platform, priority
              profile verification, reduced commission rates, exclusive access
              to our mentor community, first-mover advantage, and the
              opportunity to provide direct feedback on platform features.
              You'll also be among the first mentors to start earning from your
              expertise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline">
              How does the payment system work?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Mentors set their own rates for sessions (30 or 60 minutes).
              Payments are processed securely, and you'll receive payments
              directly minus the platform commission. The platform handles all
              payment processing, so you can focus on providing quality
              mentorship.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline">
              What topics can I mentor on?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You can mentor on any aspect of the international university
              application process, including essay writing and review,
              application strategy, scholarship applications, interview
              preparation, university selection, and general guidance about
              studying abroad. Your expertise from your own application journey
              is invaluable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline">
              When will the platform launch?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We're currently in development and will launch soon. By joining
              the waitlist, you'll be among the first to know when the platform
              goes live and will have priority access to create your mentor
              profile and start accepting bookings from students.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
