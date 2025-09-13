import profile from '/photo.jpg'

function Home() {
  return (
    <div className="text-center">
      <img src={profile} alt="Poula" className="w-40 h-40 rounded-full mx-auto mb-4"/>
      <h2 className="text-2xl font-bold mb-2">Hello, I'm Poula Youssef</h2>
      <p className="text-gray-700 max-w-xl mx-auto">
        Computer Engineering and Science student at Faculty of Electronic Engineering in Menouf.
        Passionate about Cybersecurity and AI with hands-on experience in Red Teaming and Infrastructure.
      </p>
    </div>
  )
}

export default Home