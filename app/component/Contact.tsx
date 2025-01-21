export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <p className="text-center mb-8">
            I'm always open to new opportunities and connections. 
            Feel free to reach out if you'd like to discuss product management, 
            collaboration, or just to say hello!
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:your.email@example.com" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Email Me
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
