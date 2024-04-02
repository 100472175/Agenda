#!/bin/zsh

(cd clienteagendarestfull && npm install && npm run build)
(cd servicioagendarestfull && npm install)

# Run lsof command to list processes listening on port 13000
lsof -i :13000 | grep LISTEN | awk '{print $2}' | while read -r pid; do
    echo "Found process with PID: $pid"
    # Kill the process with SIGTERM (15)
    kill -15 $pid
done

lsof -i :13300 | grep LISTEN | awk '{print $2}' | while read -r pid; do
    echo "Found process with PID: $pid"
    # Kill the process with SIGTERM (15)
    kill -15 $pid
done

echo "Starting the backend server... on port 13300"
node servicioagendarestfull/server.js &

echo "Starting the frontend server... on port 13000"
PORT=13000 node clienteagendarestfull/build/index.js &

echo "Abre el navegador en http://localhost:13000/"

