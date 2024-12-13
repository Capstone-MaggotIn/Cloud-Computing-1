# 1. Use a base image with Node.js pre-installed
FROM node:14.21.2-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Set environment variable for the application port
ENV PORT 4000

# 4. Copy all files from the current directory to the container
COPY . .

# 5. Install application dependencies using npm
RUN npm install

# 6. Expose the custom port for the application
EXPOSE 4000

# 7. Specify the command to start the application
CMD ["npm", "run", "start"]
