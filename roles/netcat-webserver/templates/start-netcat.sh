#!/bin/bash

while true; do
  echo -e "HTTP/1.1 202 Accepted\r\n\r\n$(cat /var/custom-error.html)"|nc -l 8888;
done
