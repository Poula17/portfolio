function Services() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">

      <h2 className="text-3xl font-bold text-purple-700 mb-4">💼 Offered Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Web Development</h3>
          <p>Building responsive and scalable web applications using ASP.NET Core MVC, React, and modern frameworks.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-600 mb-2">Cybersecurity</h3>
          <p>Offering Red Teaming, vulnerability assessment, and security best practices to protect systems and networks.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold text-purple-600 mb-2">AI & Machine Learning</h3>
          <p>Developing AI-based solutions, anomaly detection, and intelligent systems for practical problem solving.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold text-yellow-600 mb-2">Consulting & Support</h3>
          <p>Providing guidance, project planning, and hands-on support to help clients achieve technical goals efficiently.</p>
        </div>

      </div>
    </div>
  )
}

export default Services
