"use client";

import { useState, type FormEvent, type ChangeEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { Button } from "./ui/button";
import { UserType } from "~/types/user-type";

interface FormProps {
  onSuccessChange?: (success: boolean) => void;
}

export default function WaitlistForm({ onSuccessChange }: FormProps) {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<{
    email: string;
    name: string;
    userType: UserType;
  }>(() => {
    const userTypeParam = searchParams.get("userType");
    const initialType =
      userTypeParam === UserType.MENTOR ||
      userTypeParam === UserType.PROSPECTIVE_STUDENT
        ? (userTypeParam as UserType)
        : UserType.MENTOR;

    return {
      email: "",
      name: "",
      userType: initialType,
    };
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  // Read query params from URL on mount
  // Removed effect since we now set initial state from searchParams synchronously to avoid flash

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (!formData.email || !isValidEmail(formData.email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      setStep(2);
      return;
    }

    try {
      setLoading(true);

      const promise = new Promise((resolve, reject) => {
        const { name, email, userType } = formData;

        fetch("/api/mail", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstname: name, email, userType }),
        })
          .then((mailResponse) => {
            // TODO: with this commented out, even if resend mail limit is reached, continue to save  in the notion database
            // if (!mailResponse.ok) {
            //   if (mailResponse.status === 429) {
            //     reject("Rate limited");
            //   } else {
            //     reject("Email sending failed");
            //   }
            //   return null;
            // }

            return fetch("/api/notion", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, userType }),
            });
          })
          .then((notionResponse) => {
            if (!notionResponse) return;

            if (!notionResponse.ok) {
              if (notionResponse.status === 429) {
                reject("Rate limited");
              } else {
                reject("Notion insertion failed");
              }
            } else {
              resolve({ name });
            }
          })
          .catch((error) => {
            reject(error);
          });
      });

      toast.promise(promise, {
        loading: "Getting you on the waitlist... 🚀",
        success: (data) => {
          setFormData((prev) => ({
            email: "",
            name: "",
            userType: prev.userType,
          }));
          setSuccess(true);
          onSuccessChange?.(true);
          setTimeout(() => {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              colors: [
                "#ff0000",
                "#00ff00",
                "#0000ff",
                "#ffff00",
                "#ff00ff",
                "#00ffff",
              ],
            });
          }, 100);
          return "Thank you for joining the waitlist 🎉";
        },
        error: (error) => {
          if (error === "Rate limited") {
            return "You're doing that too much. Please try again later";
          }
          if (error === "Email sending failed") {
            return "Failed to send email. Please try again 😢.";
          }
          if (error === "Notion insertion failed") {
            return "Failed to save your details. Please try again 😢.";
          }
          return "An error occurred. Please try again 😢.";
        },
      });

      promise.finally(() => {
        setLoading(false);
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({ email: "", name: "", userType: UserType.MENTOR });
    setSuccess(false);
    onSuccessChange?.(false);
  };

  return (
    <div className="w-full relative">
      {/* User Type Toggle - Always Visible (except when success) */}
      {!success && (
        <div className="mb-4 flex flex-col space-y-2">
          <label className="text-base font-semibold text-foreground mb-1 block">
            I am a
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, userType: UserType.MENTOR }))
              }
              className={`cursor-pointer flex-1 px-4 py-3 rounded-[12] font-medium transition-all duration-300 ${
                formData.userType === UserType.MENTOR
                  ? "bg-[#f9cc14] text-black"
                  : "bg-background border border-border text-foreground hover:border-[#f9cc14]"
              }`}
              disabled={loading}
            >
              Mentor
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  userType: UserType.PROSPECTIVE_STUDENT,
                }))
              }
              className={`cursor-pointer flex-1 px-4 py-3 rounded-[12] font-medium transition-all duration-300 ${
                formData.userType === UserType.PROSPECTIVE_STUDENT
                  ? "bg-[#f9cc14] text-black"
                  : "bg-background border border-border text-foreground hover:border-[#f9cc14]"
              }`}
              disabled={loading}
            >
              Prospective Student
            </button>
          </div>
        </div>
      )}

      {success ? (
        <motion.div
          className="p-6 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            onClick={resetForm}
            variant="default"
            className="px-6 py-2 rounded-[12] font-semibold"
            type="button"
          >
            Join with another email
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="email-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col space-y-2"
              >
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="email"
                    className="text-base font-semibold text-foreground mb-1 block"
                  >
                    Email Address
                  </label>
                  <div className="flex relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="flex-grow bg-background border border-border text-foreground px-4 py-3 rounded-[12]  focus:outline-1 transition-all duration-300 focus:outline-offset-4 focus:outline-[#f9cc14]"
                      disabled={loading}
                      required
                    />
                    <Button
                      type="submit"
                      variant="default"
                      className="absolute right-0 font-semibold top-0 bottom-0 flex justify-center items-center px-5 py-2 m-2 rounded-[12]"
                      disabled={loading}
                    >
                      Continue
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Enter your email to receive updates about AbroadHandy
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="name-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col space-y-2"
              >
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="name"
                    className="text-base font-semibold text-foreground mb-1 block"
                  >
                    Full Name
                  </label>
                  <div className="flex items-center relative">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="flex-grow bg-background border border-border text-foreground px-4 py-3 rounded-[12]  focus:outline-1 transition-all duration-300 focus:outline-offset-4 focus:outline-[#f9cc14]"
                      disabled={loading}
                      required
                    />
                    <Button
                      type="submit"
                      variant="default"
                      className="absolute right-0 font-semibold top-0 bottom-0 flex justify-center items-center px-5 py-2 m-2 rounded-[12]"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <title>Loading spinner</title>
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Joining...
                        </span>
                      ) : (
                        <span>Join waitlist</span>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    How you'd like to be addressed in our communications
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      )}
    </div>
  );
}
