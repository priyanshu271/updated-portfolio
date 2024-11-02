// src/app/skills/page.tsx

export default function SkillsPage() {
    return (
      <div className="bg-gray-900 min-h-screen pt-16 text-white">
        <section className="p-8 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">My Skills</h2>
          <p className="text-lg text-center mb-12">
            Here is a snapshot of the tools and technologies I work with to create engaging, dynamic web applications.
          </p>
  
          {/* Core Languages */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">Core Languages</h3>
            <p className="mb-4">
              Building a solid foundation with languages that bring the web to life.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <span className="bg-gray-800 px-4 py-2 rounded-lg">HTML</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">CSS</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">JavaScript</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">TypeScript</span>
            </div>
          </div>
  
          {/* Frameworks & Libraries */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">Frameworks & Libraries</h3>
            <p className="mb-4">
              Leveraging powerful frameworks and libraries to streamline development and create high-performance applications.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <span className="bg-gray-800 px-4 py-2 rounded-lg">React</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">Next.js</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">Bootstrap</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">Angular</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">Tailwind CSS</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">SCSS / SASS</span>
            </div>
          </div>
  
          {/* Tools & Technologies */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">Tools & Technologies</h3>
            <p className="mb-4">
              Familiar with tools and workflows that ensure efficiency and quality.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <span className="bg-gray-800 px-4 py-2 rounded-lg">Git</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">GitHub</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">VS Code</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">REST APIs</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">GraphQL</span>
            </div>
          </div>
        </section>
      </div>
    );
  }

  