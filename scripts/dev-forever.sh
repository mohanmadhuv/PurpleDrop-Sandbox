#!/bin/bash
# Keeps `next dev` running forever: restarts on crash, survives terminal close.
cd "$(dirname "$0")/.." || exit 1

LOG_FILE="/tmp/purpledrop-dev.log"

while true; do
  echo "[dev-forever] $(date '+%Y-%m-%d %H:%M:%S') starting next dev" >> "$LOG_FILE"
  npm run dev >> "$LOG_FILE" 2>&1
  echo "[dev-forever] $(date '+%Y-%m-%d %H:%M:%S') next dev exited (code $?), restarting in 2s" >> "$LOG_FILE"
  sleep 2
done
