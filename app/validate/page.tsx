"use client";
import React, { FormEvent, useState } from "react";
import { getBaseUrl } from "@/lib/utils";

const ValidationPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setShowProgress(true);

    // Start progress bar animation
    const duration = 10000; // 10 seconds
    const interval = 100; // Update every 100ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(timer);
        setShowProgress(false);
        setShowEmailForm(true);
        setProgress(0);
      }
    }, interval);

    try {
      console.log("Submitting form data:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Setting for the progress bar
    const duration1 = 90000; // 90 seconds
    const interval = 100; // Update every 100ms
    const steps1 = duration1 / interval;
    let currentStep1 = 0;

    const timer = await setInterval(() => {
      currentStep1++;
      setProgress((currentStep1 / steps1) * 100);

      if (!submitting && currentStep1 >= steps1) {
        clearInterval(timer);
        setShowProgress(false);
        // setShowEmailForm();
        // setProgress(0);
      }
    }, interval);

    try {
      const response = await fetch(`${getBaseUrl()}/api/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, email }),
      });
      if (response.ok) {
        alert(
          "✨ Your Market Research Report is Taking Flight! ✨\n\nCheck your inbox (and spam folder) for a treasure trove of insights. 💎\n\nWe&apos;d love to hear your thoughts on making Validea even better! 💫"
        );
        window.location.href = "/";
      } else {
        alert(
          "🚨 Houston, we have a hiccup! 🌟\nOur digital carrier pigeon seems to have taken a detour. Lets give it another shot in a moment! 🚀✨"
        );
        window.location.href = "/";
      }
      // Reset all states
      setFormData({ title: "", description: "" });
      setShowEmailForm(false);
      setEmail("");
      setProgress(0);
      setSubmitting(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="mt-8">Let&apos;s Validate Your Idea</h1>
      <div className="bg-[#FCF3E1] rounded-2xl py-8 m-auto max-w-fit px-4 my-4">
        {!showProgress && !showEmailForm && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 px-8 mt-4"
          >
            <h4>
              Enter details to get a detailed research summary straight into
              your inbox!
            </h4>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="title" className="text-lg font-semibold">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="p-3 border border-gray-300 focus:outline-none focus:border-[#FF5100] bg-[#F9E0BB] rounded-xl text-[#3d3d3d] font-bold
                "
                // max-w-[450px] min-w-fit w-full
                placeholder="Enter the title of your idea"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-lg font-semibold">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="p-3 border border-gray-300 focus:outline-none focus:border-[#FF5100] bg-[#F9E0BB] rounded-xl text-[#3d3d3d]"
                placeholder="Describe your idea in detail"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-12 py-2 bg-[#FF5100] text-white rounded-xl hover:bg-[#fc753b] transition-colors shadow-lg max-w-fit m-auto"
            >
              Validate!
            </button>
          </form>
        )}

        {showProgress && (
          <div className="px-8 mt-4">
            <h4 className="mb-4">
              Generating a comprehensive market report for your{" "}
              <span className="bg-[#FF5100] p-1 text-white">{` Awesome`}</span>{" "}
              idea!
            </h4>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#FF5100] h-2.5 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center mt-4">Analyzing your idea...</p>
          </div>
        )}

        {showEmailForm && (
          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col gap-4 px-8 mt-4"
          >
            <h4>
              Ready for some market-crushing insights? 🚀 <br />
              Drop your email below and let&apos;s make magic happen!
            </h4>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border border-gray-300 focus:outline-none focus:border-[#FF5100] text-[#3d3d3d] bg-[#F9E0BB] rounded-xl"
                placeholder="Enter your email address"
                required
                disabled={submitting}
              />
            </div>
            {submitting ? (
              <>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#FF5100] h-2.5 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-center">
                  {progress < 50
                    ? "Sending your report! 🚀\nBrewing up something special just for you... 🧪"
                    : progress < 80
                      ? "Fun fact: Our AI is faster than your email provider! 📨\nBut great things are worth the wait, right? ✨"
                      : "Your personalized market insights are almost ready to land in your inbox! 🎯"}
                </p>
              </>
            ) : (
              <button
                type="submit"
                className="mt-4 px-12 py-2 bg-[#FF5100] text-white rounded-xl hover:bg-[#fc753b] transition-colors shadow-lg max-w-fit m-auto"
              >
                {submitting ? `Sending!` : `Send Report`}
                {/* Send Report */}
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ValidationPage;
