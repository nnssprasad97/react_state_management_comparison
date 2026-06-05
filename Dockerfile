# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy the Redux version to build
COPY redux-version/package*.json ./
RUN npm install

COPY redux-version/ ./
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
