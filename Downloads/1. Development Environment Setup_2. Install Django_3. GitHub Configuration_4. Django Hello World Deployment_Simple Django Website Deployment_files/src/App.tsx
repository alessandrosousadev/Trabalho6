import  { Database, Github, Globe } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-django-dark text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="h-6 w-6" />
              <h1 className="text-xl font-bold">Django Hello World</h1>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com" className="flex items-center gap-1 hover:text-django-light">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a href="https://render.com" className="flex items-center gap-1 hover:text-django-light">
                <Globe className="h-5 w-5" />
                <span>Render</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-django-light p-6 text-white">
            <h2 className="text-2xl font-bold">Welcome to Django!</h2>
          </div>
          
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkamFuZ28lMjBweXRob24lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NDkzMzkxNzZ8MA&ixlib=rb-4.1.0&fit=fillmax&h=400&w=800" 
                alt="Android smartphone closeup" 
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <p className="text-gray-700 mb-4">
                This is a simple Django Hello World application that's ready to be deployed on Render.com.
              </p>
              <p className="text-gray-700 mb-4">
                Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200">
            <div className="md:flex">
              <div className="p-6 md:w-1/2">
                <h3 className="text-lg font-semibold mb-3">Project Structure</h3>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                  {`myproject/
├── manage.py
├── hello_app/
│   ├── views.py
│   ├── urls.py
│   └── templates/
└── myproject/
    ├── settings.py
    ├── urls.py
    └── wsgi.py`}
                </pre>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkamFuZ28lMjBweXRob24lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NDkzMzkxNzZ8MA&ixlib=rb-4.1.0&fit=fillmax&h=400&w=800" 
                  alt="Person coding on MacBook Pro" 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Deployment Steps</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Create a new Web Service on Render.com</li>
              <li>Connect your GitHub repository</li>
              <li>Set the build command: <code className="bg-gray-100 px-1">pip install -r requirements.txt && python myproject/manage.py collectstatic --noinput</code></li>
              <li>Set the start command: <code className="bg-gray-100 px-1">gunicorn --chdir myproject myproject.wsgi</code></li>
              <li>Add environment variables if needed</li>
            </ol>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-4 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Built with jdoodle.ai - Django Hello World Application</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
 