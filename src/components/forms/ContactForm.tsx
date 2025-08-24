import { useState, useRef } from "react";
import type { ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMessageSquare,
  FiSend,
  FiUser,
  FiLoader,
} from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedbackMessage("Please fill in all fields.");
      setIsSuccess(false);
      return;
    }

    if (!formRef.current) {
      setFeedbackMessage(
        "An unexpected error occurred. Please refresh and try again."
      );
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setFeedbackMessage("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setFeedbackMessage("Message sent successfully!");
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      setFeedbackMessage("Failed to send message. Please try again later.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="
      h-full flex flex-col gap-6
      w-full p-8
      bg-[var(--color-secondary)]/10 backdrop-blur-lg
      border border-[var(--color-primary)]/25
      shadow-2xl
      text-[var(--color-primary)]
    "
    >
      {/* Name Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold tracking-wide">
          Name
        </label>
        <div className="relative flex items-center">
          <FiUser className="absolute left-4 w-5 h-5 text-primary" />
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., John Doe"
            className="
            w-full pl-12 pr-4 py-3
            bg-[var(--color-secondary)]/50 border border-[var(--color-primary)]/25
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            transition-all duration-300
          "
          />
        </div>
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold tracking-wide">
          Email
        </label>
        <div className="relative flex items-center">
          <FiMail className="absolute left-4 w-5 h-5 text-primary" />
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="
            w-full pl-12 pr-4 py-3
            bg-[var(--color-secondary)]/50 border border-[var(--color-primary)]/25
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            transition-all duration-300
          "
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-semibold tracking-wide">
          Message
        </label>
        <div className="relative flex items-center">
          <FiMessageSquare className="absolute top-4 left-4 w-5 h-5 text-primary" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your message here..."
            className="
            w-full pl-12 pr-4 py-3
            bg-[var(--color-secondary)]/50 border border-[var(--color-primary)]/25
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            transition-all duration-300
            resize-y
          "
          />
        </div>
      </div>

      {/* Send Button and Feedback */}
      <div className="mt-auto flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="
          flex items-center justify-center gap-3 w-full py-3 px-4
          bg-[var(--color-primary)]/80 hover:bg-[var(--color-primary)] text-[var(--color-secondary)]
          font-bold
          hover:shadow-[0_0_20px_var(--color-primary)]/40
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-primary
          transition-all duration-300 ease-in-out cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed font-monospace
        "
        >
          {isLoading ? (
            <>
              <FiLoader className="animate-spin w-5 h-5" />
              <span>Sending...</span>
            </>
          ) : isSuccess && feedbackMessage ? (
            <>
              <FaCheckCircle className="w-5 h-5" />
              <span>Message Sent!</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <FiSend className="w-5 h-5" />
            </>
          )}
        </button>
        {feedbackMessage && !isSuccess && (
          <p className="text-red-500 text-center">{feedbackMessage}</p>
        )}
      </div>
    </form>
  );
}
