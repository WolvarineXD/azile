name: Build, Test, and Push Docker Image

on:
  push:
    branches: [main]

jobs:
  docker:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Log in to Docker Hub
        run: echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin

      - name: Build Docker image (builder stage)
        run: docker build --target builder -t wolvarinexd/azile-app:builder .

      - name: Run tests inside Docker container
        run: docker run --rm wolvarinexd/azile-app:builder npm run test

      - name: Build and tag final Docker image
        run: docker build -t wolvarinexd/azile-app:latest .

      - name: Push Docker image to Docker Hub
        run: docker push wolvarinexd/azile-app:latest
