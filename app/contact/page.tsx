"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage(
          "Message sent successfully! I'll get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <Link
          href="/"
          className="inline-block mb-8 text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-light">
              Let's create something amazing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-light text-foreground mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="Malakauvhukhudo@gmail.com"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        malakauvhukhudo@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href="tel:062 117 7448"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        062 117 7448
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">Gqeberha, South Africa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-light text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/goodwillprod/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-light text-foreground mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-foreground text-background rounded-sm text-sm font-medium transition-all duration-300 hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitMessage && (
                  <p
                    className={`text-sm text-center ${
                      submitMessage.includes("success")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
