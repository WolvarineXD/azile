# Use a base image that includes Node.js, or install it explicitly
FROM node:18


# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application's port (if applicable)
EXPOSE 3000

# Define the default command to run your application
CMD ["npm", "start"]
