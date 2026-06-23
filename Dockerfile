FROM node:20-slim
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev --no-audit --no-fund
COPY . .
EXPOSE 3000
USER 1001
CMD ["node", "app.js"]
