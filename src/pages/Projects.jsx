function Projects() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">

      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-xl text-left">
        <h3 className="text-xl font-bold mb-2 text-green-600">🎯 Event Booking System</h3>
        <p>A web app built with ASP.NET Core MVC and SQLite for managing and booking events.</p>

        <h4 className="font-semibold mt-3 text-blue-600">Unique Selling Points:</h4>
        <ul className="list-disc list-inside mb-2">
          <li>Fully functional registration & login system with session management.</li>
          <li>Create, edit, and delete events with clean MVC architecture.</li>
          <li>Prevent duplicate bookings to ensure data integrity.</li>
          <li>Clean and modular code using EF Core for maintainability.</li>
        </ul>

        <p className="mt-2"><b>Tech stack:</b> ASP.NET Core MVC, EF Core, SQLite, Bootstrap</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-xl text-left">
        <h3 className="text-xl font-bold mb-2 text-purple-600">🚀 Graduation Project</h3>
        <p>AI-powered Cybersecurity system combining anomaly detection and red teaming simulation.
        Developed by a 6-member team over 1 year.</p>

        <h4 className="font-semibold mt-3 text-blue-600">Unique Selling Points:</h4>
        <ul className="list-disc list-inside">
          <li>AI-based anomaly detection for identifying security threats.</li>
          <li>Red teaming simulation to test system resilience.</li>
          <li>Collaborative development demonstrating teamwork.</li>
          <li>End-to-end system from backend to AI analytics.</li>
        </ul>
      </div>

    </div>
  )
}

export default Projects
