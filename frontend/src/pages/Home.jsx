export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="display-4 fw-bold mb-4">Welcome to LMS 🎓</h1>
      <p className="lead mb-4">Your journey of learning starts here!</p>
      <a href="/courses" className="btn btn-primary btn-lg">
        Get Started
      </a>
    </div>
  )
}