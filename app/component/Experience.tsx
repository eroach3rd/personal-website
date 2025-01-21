export default function Experience() {
  const experiences = [
    {
      company: "Indeed",
      role: "Strategy & Operations Manager",
      description: "Worked directly with Product Managers to synthesize customer feedback, research competitor trends, and lead prioritization exercises for product roadmaps. Conducted a stretch PM project, defining problem statements and solutions, designing feature changes, and collaborating with UX, Engineering, and Legal teams."
    },
    {
      company: "PeopleGrove",
      role: "Strategy & Operations Manager",
      description: "Collaborated with Product Managers to improve features connecting college students to mentors. Analyzed market trends and user feedback to inform product decisions."
    },
    {
      company: "Deloitte",
      role: "Business Technology Analyst",
      description: "Gathered systems requirements, designed and implemented state exchanges for Medicaid. Developed skills in translating complex requirements into technical solutions."
    },
    {
      company: "Microsoft",
      role: "Intern",
      description: "Mapped user journeys through cloud usage maturity, gaining insights into user behavior and needs in a tech product environment."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <h4 className="text-lg text-gray-600 mb-2">{exp.role}</h4>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
