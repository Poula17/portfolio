function Skills() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Technical Skills</h2>
        <ul className="list-disc list-inside text-left">
          <li>ASP.NET Core MVC</li>
          <li>Entity Framework Core</li>
          <li>SQL & SQLite</li>
          <li>C#</li>
          <li>Python</li>
          <li>Cybersecurity (Red Teaming)</li>
          <li>AI & Machine Learning basics</li>
        </ul>
      </div>
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Soft Skills</h2>
        <ul className="list-disc list-inside text-left">
          <li>Teamwork</li>
          <li>Problem Solving</li>
          <li>Communication</li>
          <li>Adaptability</li>
          <li>Time Management</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
