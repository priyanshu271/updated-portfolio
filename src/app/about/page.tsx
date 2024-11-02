export default function AboutPage() {
    return (
        <div className="bg-gray-900 min-h-screen pt-16 text-white">
            <section className="p-8 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
                
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/IMG_3038.jpg"
                        alt="Priyanshu Rai"
                        className="w-32 h-32 rounded-full object-cover border-4 border-red-500"
                    />
                </div>

                <p className="mt-4 text-lg">
                    Hello! I'm <span className="font-bold">Priyanshu Rai</span>, a passionate web developer with experience in creating
                    dynamic and user-friendly websites and applications. I specialize in <strong>JavaScript, React, Next.js</strong>, and modern web technologies.
                </p>
                <p className="mt-4 text-lg">
                    I love solving problems and continuously learning new technologies to stay ahead in
                    the rapidly evolving tech world. When I'm not coding, you can find me exploring new
                    places or reading tech blogs.
                </p>

                {/* Skills Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-2">Skills</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>CSS and Tailwind CSS</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>

                {/* Quote or Philosophy */}
                <blockquote className="mt-8 border-l-4 border-red-500 pl-4 italic text-lg">
                    "Learning never exhausts the mind." – Leonardo da Vinci
                </blockquote>
            </section>
        </div>
    );
}
