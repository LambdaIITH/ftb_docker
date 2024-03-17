# Docker

Arjun is trying to deploy a full-stack application using Docker. Its a simple application: The frontend fetches a single message from the backend, and shows it to the user. But he hasn't been able to get it work, those last few bugs are alluding him. Maybe you can help him figure it out?

### Getting Started

This question requires you to have Docker (and docker-compose) installed.

1. Clone the repository and `cd` into it.
2. Run `docker-compose up --build --force-recreate` to run the Docker Compose file, which should (if it were correct) run the backend and frontend.

### Expected Output

The `docker-compose` command should run successfully, and the following output should be visible on navigating to `http://localhost:3000`:

![image](https://github.com/LambdaIITH/docker_bugs/assets/43811329/4e90edf1-a945-49f5-8688-2556dd355b0b)
