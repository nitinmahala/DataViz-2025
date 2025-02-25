"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Award,
  Calendar,
  CheckCircle,
  ChevronDown,
  Database,
  FileSpreadsheet,
  GraduationCap,
  Mail,
  Phone,
  Trophy,
  ArrowUp,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NavBar } from "@/components/nav-bar"

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2025-03-19").getTime()
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
{/* HOMEPAGE */}
<section className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden bg-black">
  {/* Space Background */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-[url('https://i.gifer.com/J4o.gif')] bg-cover bg-center opacity-80" />
    <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for contrast */}
    <div className="absolute inset-0 bg-stars animate-twinkle" /> {/* Twinkling stars */}
  </div>

  {/* Floating Elements for Depth */}
  <div className="absolute top-1/4 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

  

  <div className="container relative z-10 px-6 mx-auto text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 text-7xl font-extrabold text-transparent md:text-9xl bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
    >
      Data Viz Challenge 2025
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8 text-xl md:text-3xl text-gray-200"
    >
      Empowering Decisions through Data Visualization
    </motion.p>

    {/* Call to Action Button */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12"
    >
      <Button size="lg" variant="default" asChild className="px-12 py-6 text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition">
        <Link href="https://unstop.com/competitions/dataviz-2025-empowering-decisions-through-data-visualization-solutions-2k25-army-institute-of-technology-ai-1389578" target="_blank">
          Register Now
        </Link>
      </Button>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
    <ChevronDown className="w-8 h-8 text-white opacity-70" />
  </div>
</section>
{/* Timer Section - Dark Neon Theme */}
<section className="relative flex flex-col items-center justify-center py-20 bg-[#0a0a0a] text-white">
  
  <div className="container relative z-10 px-4 mx-auto text-center">
    {/* Neon Heading */}
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-6 text-5xl font-extrabold text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
    >
      Event Starts In
    </motion.h3>

    {/* Countdown Timer (No Hover Effect) */}
    <div className="grid max-w-3xl grid-cols-2 gap-6 mx-auto md:grid-cols-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div 
          key={unit} 
          className="p-6 border rounded-xl bg-[#121212] border-gray-700 shadow-lg"
        >
          <div className="text-5xl font-extrabold text-violet-400 drop-shadow-lg">{value}</div>
          <div className="mt-2 text-lg font-medium text-gray-400 uppercase">{unit}</div>
        </div>
      ))}
    </div>

    {/* Registration Deadline */}
    <p className="mt-8 text-xl font-semibold text-gray-300">
      Registration Deadline: 
      <span className="ml-2 text-pink-500 neon-blink">15 March 2025</span>
    </p>
  </div>

  {/* Unique Neon Glow Effects */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-20 w-36 h-36 bg-violet-500 rounded-full opacity-25 blur-[100px] animate-pulse"></div>
    <div className="absolute bottom-20 right-24 w-32 h-32 bg-cyan-500 rounded-full opacity-20 blur-[90px] animate-pulse"></div>
    <div className="absolute bottom-5 left-1/2 w-28 h-28 bg-pink-500 rounded-full opacity-15 blur-[80px] animate-pulse"></div>
  </div>

  {/* Blinking Text Animation */}
  <style>
    {`
      @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
      }
      .neon-blink {
        animation: blink 1.5s infinite alternate;
      }
    `}
  </style>
</section>



{/* About Section */}
<section className="relative py-28 bg-[#0a0a0a] text-white overflow-hidden" id="about">
  {/* Background Neon Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 opacity-30 blur-[120px]"></div>
    <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-purple-500 opacity-30 blur-[100px]"></div>
    <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500 opacity-30 blur-[90px]"></div>
  </div>

  {/* Content */}
  <div className="container relative z-10 px-6 mx-auto text-center">
    <h2 className="mb-16 text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      About the Event
    </h2>

    <div className="grid gap-10 md:grid-cols-3">
      {/* Who Can Participate? */}
      <Card className="bg-black/70 border border-gray-600 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-300">
            <GraduationCap className="w-7 h-7 text-blue-400" />
            Who can participate?
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300 text-lg text-justify">
          The event is open to all undergraduate engineering and MBA students from colleges and universities across India. However, only <strong>solo participation</strong> is allowed (no teams).
        </CardContent>
      </Card>

      {/* Why Participate? */}
      <Card className="bg-black/70 border border-gray-600 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-purple-300">
            <Trophy className="w-7 h-7 text-purple-400" />
            Why participate?
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300 text-lg text-justify">
          <strong>Win exciting cash prizes</strong>, gain certificates, and boost your career with <strong>industry recognition</strong>.
          Top performers also get <strong>internship opportunities</strong> and networking with <strong>industry leaders</strong>.
        </CardContent>
      </Card>

      {/* When? */}
      <Card className="bg-black/70 border border-gray-600 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-pink-300">
            <Calendar className="w-7 h-7 text-pink-400" />
            When?
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300 text-lg text-justify">
          <strong>DataViz 2025</strong> will be held from 19th to 23rd March. Make sure to register by the <strong>15th of March</strong> to secure your spot and be part of this exciting event!
        </CardContent>
      </Card>
    </div>

    {/* Additional Information */}
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-violet-400">What to Expect?</h3>
      <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">At <strong>DataViz 2025</strong>, you’ll tackle real-world data visualization challenges, learn from industry experts, and collaborate with like-minded individuals. The event offers a chance to enhance your skills, expand your network, and gain recognition for your work. Plus, exciting prizes await the best solutions. Get ready for a rewarding experience in the world of data visualization!
      </p>
    </div>
  </div>
</section>


{/* Timeline Section */}
<section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden" id="timeline">
  {/* Background Neon Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 opacity-30 blur-[120px]" />
    <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-purple-500 opacity-30 blur-[100px]" />
    <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500 opacity-30 blur-[90px]" />
  </div>

  <div className="container relative z-10 px-6 mx-auto text-center">
    <h2 className="mb-16 text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      Event Timeline
    </h2>

    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Neon Timeline Line */}
        <div className="absolute w-px h-full -translate-x-1/2 left-1/2 bg-gradient-to-b from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50" />

        {[
          {
            date: "February 12, 2025",
            title: "Registration Opens",
            description: "Registrations start on Unstop",
          },
          {
            date: "March 15, 2025",
            title: "Registration Deadline",
            description: "Last date to register on Unstop.",
          },
          {
            date: "March 19, 2025",
            title: "Submission Start",
            description: "Start submiting your dashboards/projects",
          },
          {
            date: "March 23, 2025",
            title: "Submission Deadline",
            description: "Final date to submit your dashboards/project.",
          },
          {
            date: "March 31, 2025",
            title: "Winners Announcement",
            description: "Results will be declared after evaluation.",
          },
        ].map((event, index) => (
          <div
            key={event.title}
            className={`relative flex items-center gap-8 mb-16 transition-transform duration-500 ease-in-out ${
              index % 2 === 0 ? "flex-row animate-floatLeft" : "flex-row-reverse animate-floatRight"
            }`}
          >
            {/* Glassmorphic Neon Event Card */}
            <div className="w-1/2 text-right">
              <div
                className={`p-6 rounded-lg border border-gray-600 shadow-2xl backdrop-blur-xl bg-black/50 transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 ${
                  index % 2 === 0 ? "mr-4" : "ml-4"
                }`}
              >
                <h3 className="text-2xl font-bold text-blue-400">{event.title}</h3>
                <p className="text-sm text-gray-400">{event.date}</p>
                <p className="mt-2 text-gray-300">{event.description}</p>
              </div>
            </div>

            {/* Steady Circle Marker */}
            <div className="absolute w-6 h-6 -translate-x-1/2 left-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50" />

            {/* Empty Space for Alignment */}
            <div className="w-1/2" />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* How to Participate */}
<section 
  className="relative py-20 text-white overflow-hidden bg-[#0a0a0a] before:absolute before:inset-0 before:bg-black/50 before:-z-10"
  id="participate"
>
  {/* Unique Background Neon Glow Animation */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-16 left-10 w-36 h-36 bg-fuchsia-500 rounded-full opacity-20 blur-[80px] animate-pulse"></div>
    <div className="absolute bottom-16 right-12 w-28 h-28 bg-red-500 rounded-full opacity-20 blur-[90px] animate-pulse"></div>
    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-500 rounded-full opacity-25 blur-[70px] animate-pulse"></div>
  </div>

  <div className="container px-4 mx-auto relative z-10">
    {/* Gradient Heading */}
    <h2 className="mb-12 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-wide">
      How to Participate?
    </h2>


    
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">
        {[
          {
            step: 1,
            title: "Register on Unstop",
            description: "Complete your registration before March 15, 2025 to secure your spot.",
          },
          {
            step: 2,
            title: "Choose Dataset & Create Dashboard",
            description: "Select a real-world dataset and build an interactive data visualization dashboard.",
          },
          {
            step: 3,
            title: "Submit Your Work",
            description: "Submit your dashboard along with a PDF report. Optional: Include an explanation video to showcase your work.",
          },
        ].map((step, index) => (
          <div
            key={step.step}
            className={`flex items-start gap-4 p-5 rounded-lg border border-gray-700 bg-black/50 backdrop-blur-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
              index === 0
                ? "hover:shadow-fuchsia-500/50"
                : index === 1
                ? "hover:shadow-red-500/50"
                : "hover:shadow-teal-500/50"
            }`}
          >
            {/* Animated Glowing Step Number */}
            <div className={`flex items-center justify-center flex-none w-12 h-12 text-lg font-bold rounded-full text-white shadow-lg animate-pulse 
              ${index === 0 ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500/50"
                : index === 1 ? "bg-gradient-to-r from-red-500 to-orange-500 shadow-red-500/50"
                : "bg-gradient-to-r from-teal-500 to-green-500 shadow-teal-500/50"}`}
            >
              {step.step}
            </div>

            {/* Step Content */}
            <div>
              <h3 className="font-bold text-fuchsia-400 drop-shadow-lg">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* Prizes Section */}
<section className="relative py-20 bg-[#090909] text-white overflow-hidden" id="prizes">
  {/* Firecracker Animation */}
  

  {/* Section Content */}
  <div className="container px-4 mx-auto relative z-10">
    {/* Neon Gradient Heading */}
    <h2 className="mb-12 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      Prizes & Rewards 
    </h2>

    <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-3">
      {/* First Prize */}
      <Card className="relative border border-yellow-500/40 bg-black/50 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-yellow-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-400">
            <Award className="w-5 h-5 text-yellow-400" />
            First Prize
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-white">₹10,000/-</p>
        </CardContent>
      </Card>

      {/* Second Prize */}
      <Card className="relative border border-gray-400/40 bg-black/50 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-400">
            <Award className="w-5 h-5 text-gray-400" />
            Second Prize
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-white">₹8,000/-</p>
        </CardContent>
      </Card>

      {/* Third Prize */}
      <Card className="relative border border-orange-500/40 bg-black/50 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-orange-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-400">
            <Award className="w-5 h-5 text-orange-400" />
            Third Prize
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-white">₹7,000/-</p>
        </CardContent>
      </Card>
    </div>

    {/* Additional Rewards Section */}
    <div className="max-w-4xl mx-auto mt-12 grid gap-8 md:grid-cols-2">
      {/* Goodies for Top Participants */}
      <Card className="relative border border-purple-500/40 bg-black/50 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-purple-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-400">
            🎁 Goodies for Top Participants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-300">
            Top performers will receive exclusive merchandise, special goodies, and discount coupons for popular tech tools.
          </p>
        </CardContent>
      </Card>

      {/* Certificates for All Participants */}
      <Card className="relative border border-green-500/40 bg-black/50 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-green-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-400">
            🏆 Certificates for All
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-300">
            Every participant will receive a certificate of participation.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>

  {/* Dark Neon Background Effect */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-1/4 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 left-1/2 w-40 h-40 bg-violet-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
  </div>
</section>




{/* Evaluation Criteria */}
<section className="relative py-20 bg-[#0a0a0a] text-white overflow-hidden" id="evaluation">
  {/* Neon Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-1/4 w-56 h-56 bg-blue-500 opacity-30 blur-[100px]"></div>
    <div className="absolute bottom-10 right-1/3 w-48 h-48 bg-purple-500 opacity-30 blur-[90px]"></div>
    <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500 opacity-30 blur-[80px]"></div>
  </div>

  {/* Content */}
  <div className="container px-4 mx-auto relative z-10">
    <h2 className="mb-12 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      Evaluation Criteria
    </h2>
   

    <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {[
        { title: "Clarity", description: "Usability & interpretability of the dashboard", shadow: "hover:shadow-blue-500/50" },
        { title: "Creativity", description: "Innovative & unique design elements", shadow: "hover:shadow-purple-500/50" },
        { title: "Functionality", description: "Effective use of interactive features", shadow: "hover:shadow-pink-500/50" },
        { title: "Data Storytelling", description: "Ability to communicate insights clearly", shadow: "hover:shadow-green-500/50" },
        { title: "Aesthetics", description: "Professional layout & color scheme", shadow: "hover:shadow-orange-500/50" },
        { title: "Accuracy", description: "Correctness of data representation", shadow: "hover:shadow-cyan-500/50" },
        { title: "Bonus Points", description: "Well-explained video submission may increase scores", shadow: "hover:shadow-yellow-500/50" },
      ].map((criterion) => (
        <Card
          key={criterion.title}
          className={`bg-black/70 border border-gray-600 shadow-none backdrop-blur-md transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-lg hover:shadow-[10px_5px_20px_-5px] ${criterion.shadow}`}
        >
          <CardHeader>
            <CardTitle className="text-white">{criterion.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">{criterion.description}</CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>






{/* FAQ Section */}
<section
  className="relative py-20 text-white bg-[#0a0a0a] overflow-hidden before:absolute before:inset-0 before:bg-black/50 before:-z-10"
  id="faq"
>
  <div className="container px-4 mx-auto relative z-10">
    {/* Gradient Heading */}
    <h2 className="mb-12 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      Frequently Asked Questions
    </h2>

    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {[
          {
            question: "How do I register for the event?",
            answer:
              "Registration for the event is done through the Unstop platform. Ensure you complete your registration before the deadline on March 15, 2025.",
          },
          {
            question: "What is the submission format?",
            answer:
              "Submit an interactive dashboard along with a PDF report. You may also include an optional short video (max 3 minutes) explaining your dashboard.",
          },
          {
            question: "What tools can I use for visualization?",
            answer:
              "You can use Python (Dash, Plotly, Streamlit), Tableau, Power BI, or Excel for creating your dashboards.",
          },
          {
            question: "Can I work in a team?",
            answer:
              "No, this event requires solo participation only. Each participant must submit their own work.",
          },
          {
            question: "What is the event timeline?",
            answer:
              "Registrations open on February 12, 2025, and close on March 15, 2025. Submissions are accepted from March 19 to March 23, 2025. Winners will be announced on March 31, 2025.",
          },
          {
            question: "Is there a participation certificate?",
            answer:
              "Yes! All participants who successfully submit their projects will receive an official participation certificate.",
          },
          {
            question: "Can I submit a self-collected dataset?",
            answer:
              "No, participants must use publicly available datasets. Self-collected datasets will not be accepted.",
          },
          {
            question: "What if I face issues during the competition?",
            answer:
              "If you have any doubts or need assistance, you can reach out to the event coordinators via email.",
          },
        ].map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-lg border border-gray-700 bg-[#121212] shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:border-violet-400"
          >
            <AccordionTrigger className="p-4 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-500 to-blue-500 transition-colors duration-300 ease-in-out hover:text-violet-400">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="p-4 text-white border-t border-gray-700">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>

  {/* Unique Neon Glow Animation */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-12 left-16 w-36 h-36 bg-violet-500 rounded-full opacity-20 blur-[90px] animate-pulse"></div>
    <div className="absolute bottom-16 right-20 w-28 h-28 bg-cyan-500 rounded-full opacity-20 blur-[80px] animate-pulse"></div>
    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-fuchsia-500 rounded-full opacity-25 blur-[70px] animate-pulse"></div>
  </div>
</section>


{/* Footer */}
<footer className="relative py-12 bg-[#121212] text-gray-300">
  <div className="container px-4 mx-auto">
    <div className="grid gap-8 md:grid-cols-4">
      {/* About Section */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-white">About Trinity Club</h3>
        <p className="text-gray-400">
          Trinity Club at AIT, Pune, empowers students in AI, ML, and Data Science through workshops, events, and hands-on projects, fostering growth and innovation.
        </p>
      </div>

      {/* Useful Links Section */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-white">Useful Links</h3>
        <div className="space-y-2">
          <Link
            href="https://docs.google.com/document/d/1UYXA0JJs13SRu4omUsXTWX8A6MFdtqVFy9Lm7bi6hiU/edit?usp=sharing" target="_blank"
            className="text-gray-400 hover:text-blue-400"
          >
            Event Rulebook
          </Link>
          <br />
          <Link
            href="https://trinity-hackathon.vercel.app/" target="_blank"
            className="text-gray-400 hover:text-blue-400"
          >
            Sponsors Brochure
          </Link>
          <br />

          <Link
            href="https://solution-2k25.vercel.app/" target="_blank" 
            className="text-gray-400 hover:text-blue-400"
          >
            About Solutions 2k25
          </Link>
          <br />
          <Link
            href="https://www.aitpune.com/Default.aspx" target="_blank"
            className="text-gray-400 hover:text-blue-400"
          >
            About AIT Pune
          </Link>
        </div>
      </div>

      {/* Contact Us Section */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
        <p className="text-gray-400">Have any questions? Reach out to us!</p>
        <div className="space-y-2">
          <Link
            href="mailto:trinity@aitpune.edu.in"
            className="text-gray-400 hover:text-blue-400"
          >
            Email: trinity@aitpune.edu.in
          </Link>
          <br />
          <p className="text-gray-400">Phone: +91 9034428909</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-white">Follow Us</h3>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/company/trinityaiclub/" target="_blank"
            className="flex items-center gap-2 text-gray-400 transition duration-300 hover:text-blue-400 hover:shadow-blue-500 hover:shadow-md"
          >
            <Linkedin className="w-5 h-5 text-blue-400" /> LinkedIn
          </Link>
          <Link
            href="https://www.youtube.com/@TrinityAITPUNE" target="_blank"
            className="flex items-center gap-2 text-gray-400 transition duration-300 hover:text-red-400 hover:shadow-red-500 hover:shadow-md"
          >
            <Youtube className="w-5 h-5 text-red-400" /> YouTube
          </Link>
 
          <Link
            href="https://www.instagram.com/trinity.aiclub" target="_blank"
            className="flex items-center gap-2 text-gray-400 transition duration-300 hover:text-pink-400 hover:shadow-pink-500 hover:shadow-md"
          >
            <Instagram className="w-5 h-5 text-pink-400" /> Instagram
          </Link>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="pt-8 mt-8 text-center border-t border-gray-700 text-gray-400">
      <p>&copy; 2025 Trinity Club. All rights reserved.</p>
    </div>
  </div>

  {/* Floating Scroll to Top Button */}
  <Button
    variant="outline"
    size="icon"
    className="fixed z-50 rounded-full bg-gray-800 text-white shadow-lg bottom-4 right-4 transition duration-300 hover:bg-blue-500 hover:shadow-blue-400 hover:shadow-md"
    onClick={scrollToTop}
  >
    <ArrowUp className="w-5 h-5" />
  </Button>

  {/* Neon Glow Background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
    <div className="absolute top-10 right-1/4 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
  </div>
</footer>


      <Button
        variant="outline"
        size="icon"
        className="fixed z-50 rounded-full shadow-lg bottom-4 right-4"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-4 h-4" />
      </Button>
    </div>
  )
}

