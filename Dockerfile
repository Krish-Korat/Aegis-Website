FROM node:18-alpine

WORKDIR /app

# Copy root package files
COPY package*.json ./
RUN npm install

# Copy client and build it
COPY client/ ./client/
# Note we run npm install and build for client
RUN cd client && npm install && npm run build

# Copy backend files
COPY server.js .
COPY .env.example .env

EXPOSE 5000

CMD ["node", "server.js"]
