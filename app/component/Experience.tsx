export default function Experience() {
  const experiences = [
    {
      company: "Indeed",
      role: "Strategy & Operations Manager",
      description: "Worked directly with Product Managers to synthesize customer feedback, research competitor trends, and lead prioritization exercises for product roadmaps. Lead a stretch PM project, defining problem statements and solutions, designing feature changes, and collaborating with UX, Engineering, and Legal teams."
    },
    {
      company: "PeopleGrove",
      role: "Product Strategy Manager",
      description: "Collaborated with Product Managers to improve features that connect college students to mentors. Analyzed market trends and user feedback to inform product decisions."
    },
    {
      company: "Purro",
      role: "Co-Founder and CEO",
      description: "Built an MVP for a mentorship platform to help underrepresented students find mentors and discover new career paths."
    },
    {
      company: "Microsoft",
      role: "Product Marketing ManagerIntern",
      description: "Mapped user journeys through cloud usage maturity, providing upsell opportunities through user behavior insights."
    },
    {
      company: "Deloitte",
      role: "Business Technology Analyst",
      description: "Gathered systems requirements, designed and implemented state exchanges for Medicaid. Developed skills in translating complex requirements into technical solutions."
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
