# Dockerfile
FROM node:latest

WORKDIR /app

RUN rm -rf node_modules
COPY package.json  ./
RUN npm install

# Install shadcn-ui CLI globally
RUN npm install -g shadcn-ui

# Copy the rest of the application code
COPY . .

# Initialize shadcn-ui (this step might vary depending on your project structure)
RUN npx shadcn-ui init

# Build the React app
# RUN npm run build

# RUN npm audit fix --force
RUN npm install gh-pages --save-dev
# RUN npx -y shadcn-ui@latest add button input
# CMD ["npm", "start"]
