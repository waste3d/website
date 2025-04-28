FROM oven/bun:1 AS build

WORKDIR /temp/dev

COPY . /temp/dev/

RUN bun install && bun astro build

FROM oven/bun:1

WORKDIR /app

COPY --from=build /temp/dev/node_modules /app/node_modules

COPY --from=build /temp/dev/dist /app/dist

ENV HOST=0.0.0.0

CMD ["bun", "run", "/app/dist/server/entry.mjs"]
