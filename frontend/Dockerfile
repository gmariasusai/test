# Step 1: Build Angular app
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Step 2: Serve with Nginx
FROM nginx:alpine

# Replace this line with the correct output folder name
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Copy custom Nginx config for client-side routing (ensure the Angular app loads)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
