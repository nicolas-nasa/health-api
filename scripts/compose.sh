#!/bin/bash
npm run build
docker compose up --build -d
npm run migration:generate --name=start
npm run migration:run