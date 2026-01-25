export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Rankora</h1>
        <p className="text-lg text-gray-600 mb-8">AI-powered SEO content generation for writers and marketers.</p>
        <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Get Started</a>
      </section>
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Writing</h3>
            <p>Generate high-quality content with advanced AI.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
            <p>Optimize your content for search engines automatically.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p>Simple interface for quick content creation.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
