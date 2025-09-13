import profile from '/photo.jpg'

function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">

      {/* الصورة والتعريف */}
      <img 
        src={profile} 
        alt="Poula" 
        className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
      />
      <h2 className="text-3xl font-bold text-purple-700">Hello, I'm Poula Youssef</h2>
      <p className="text-gray-700 max-w-lg text-lg">
        Computer Engineering and Science student at Faculty of Electronic Engineering in Menouf.
        Passionate about Cybersecurity and AI with hands-on experience in Red Teaming and Infrastructure.
      </p>

      {/* Unique Selling Points */}
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-xl text-left">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">🚀 Unique Selling Points</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>ASP.NET Core MVC Expertise:</b> Built scalable web apps with clean architecture and EF Core.
          </li>
          <li>
            <b>Full-Stack Skills:</b> Frontend + backend design and deployment.
          </li>
          <li>
            <b>Cybersecurity & AI Integration:</b> AI-based anomaly detection + red teaming simulations.
          </li>
          <li>
            <b>Team Collaboration:</b> Worked in a 6-member team delivering full projects.
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Home
