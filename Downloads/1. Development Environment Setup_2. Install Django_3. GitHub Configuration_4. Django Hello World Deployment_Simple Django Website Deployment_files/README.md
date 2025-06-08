#  Django Hello World Application

A simple Django Hello World application ready to be deployed on Render.com.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd django-hello-world
   ```

2. Create a virtual environment and install dependencies:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Run the development server:
   ```
   cd myproject
   python manage.py runserver
   ```

4. Visit http://127.0.0.1:8000/ in your browser

## Deployment to Render.com

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use the following settings:
   - Build Command: `pip install -r requirements.txt && python myproject/manage.py collectstatic --noinput`
   - Start Command: `gunicorn --chdir myproject myproject.wsgi`

The application is configured to use whitenoise for serving static files in production.
 