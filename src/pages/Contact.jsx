function Contact() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <h2 className="text-3xl font-bold text-blue-600">📩 Contact Me</h2>
      <p className="text-gray-700 text-lg max-w-md">
        If you’d like to work with me or know more, feel free to contact me 🚀
      </p>
      <ul className="list-disc list-inside text-left w-full max-w-md space-y-2">
        <li>Email: <a className="text-blue-500 hover:underline" href="mailto:poula@example.com">poula@example.com</a></li>
        <li>Phone: +20 123 456 7890</li>
        <li>LinkedIn: <a className="text-blue-500 hover:underline" href="https://linkedin.com/in/poula-youssef">linkedin.com/in/poula-youssef</a></li>
        <li>GitHub: <a className="text-blue-500 hover:underline" href="https://github.com/Poula17">github.com/Poula17</a></li>
      </ul>

      {/* CTA Button */}
      <a 
        href="mailto:poula@example.com" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all"
      >
        Contact Me Now
      </a>
    </div>
  )
}

export default Contact
