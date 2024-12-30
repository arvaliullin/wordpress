FROM oven/bun

WORKDIR /app

COPY package.json ./
RUN bun install

COPY cmd/app/main.js /app/main.js

CMD ["bun", "/app/main.js"]
