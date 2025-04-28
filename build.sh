#!/bin/bash

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the project
echo "Building the project..."
npm run build

# Start the preview server
echo "Starting the preview server..."
npm run preview

echo "Website is running at http://localhost:4173"
