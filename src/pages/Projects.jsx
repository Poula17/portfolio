function Projects() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="mb-4">
        <h3 className="font-semibold">🎯 Event Booking System</h3>
        <p>A web app built with ASP.NET Core MVC and SQLite for managing and booking events.</p>
        <ul className="list-disc list-inside">
          <li>User registration and login</li>
          <li>Create, edit, and delete events</li>
          <li>View event details and book events</li>
          <li>Prevent duplicate bookings</li>
          <li>Session-based login system</li>
        </ul>
        <p><b>Tech stack:</b> ASP.NET Core MVC, EF Core, SQLite, Bootstrap</p>
      </div>
      <div>
        <h3 className="font-semibold">🚀 Graduation Project</h3>
        <p>AI-powered Cybersecurity system combining anomaly detection and red teaming simulation.
        Developed by a 6-member team over 1 year.</p>
      </div>
    </div>
  )
}

export default Projects