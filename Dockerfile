# Use an official Node.js runtime as a parent image
FROM node:18.18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
#RUN npm run build

# Expose port 80
EXPOSE 80

CMD ["npm", "run", "start"]
