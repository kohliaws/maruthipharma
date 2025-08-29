FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the host directory to the container WORKDIR
COPY ../package*.json ./

# Install dependencies inside WORKDIR
RUN npm install

# Copy rest of application files into WORKDIR
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 5173

# Start app in dev mode with host binding
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

