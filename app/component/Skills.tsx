export default function Skills() {
  const skills = [
    "Product Roadmap Development",
    "Cross-functional Collaboration",
    "Data-driven Decision Making",
    "Market & User Analysis",
    "Stakeholder Communication",
    "Strategic Thinking",
    "Problem Solving",
    "Agile Methodologies",
    "User Experience (UX) Design",
    "A/B Testing",
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
