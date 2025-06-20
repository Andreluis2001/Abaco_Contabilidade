# Django Project

This project is built with [Django](https://www.djangoproject.com/), a high-level Python web framework.

## Requirements

- Python 3.8+
- Django (see `requirements.txt` for version)
- pip

## Setup

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. **Create a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Apply migrations:**
    ```bash
    python manage.py migrate
    ```

5. **Run the development server:**
    ```bash
    python manage.py runserver
    ```

## Usage

- Access the app at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- Admin panel: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

## Project Structure

- `manage.py` - Django's command-line utility
- `project_name/` - Main project settings
- `app_name/` - Django app(s)

## Useful Commands

- Create superuser: `python manage.py createsuperuser`
- Collect static files: `python manage.py collectstatic`
- Run tests: `python manage.py test`

## License

This project is licensed under the MIT License.