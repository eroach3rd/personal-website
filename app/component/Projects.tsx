export default function Projects() {
  const projects = [
    {
      title: "Technical Foundations for Product Managers",
      description: ["Completed a Maven course on technical essentials for Product Management.",
                   "Learned about topics including Application Architecture, APIs, SDLC, and Scaling & System Design.",
                   ],
    },
    {
      title: "Indeed Feature Adoption",
      description: [
        "Led a stretch PM project, where I showcased my ability to:",
        "Define a clear problem statement and solution.",
        "Create mock designs for feature changes.",
        "Size metrics for A/B test success.",
        "Collaborate with UX, Engineering, and Legal teams.",
        "Launch and test the feature change.",
        ],
    },
    {
      title: "My Personal Website",
      description: [
        "Designed and developed this website using Vercel V0, Cursor, GitHub, and ChatGPT.",
        "Leveraged design and development tools, while  troubleshooting issues to showcase my portfolio and aspirations as a PM.",
      ],
    },
    {
      title: "Purro MVP",
      description: [
        "Built an MVP for Purro using Bubble.io, Typeform, and Zapier.",
        "Successfully supported over 300 students, improving their confidence and career readiness.",
      ],
    },
 {
      title: "BigRed//Hacks - DiLog",
      description: [
        "Led a hackathon team as a PM to build a real-time translation and transcription app for international students.",
        "Defined user stories and key functionality for engineers.",
        "Generated market research, a financial model, and a business plan.",
        "Developed a presentation that resulted in us winning Best Business Proposal!",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">PM Projects and Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">{project.title}</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  {project.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

