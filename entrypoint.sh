#!/usr/bin/env bash

exec docker run \
    -d \
    -v "/var/run/docker.sock":"/var/run/docker.sock" \
    -p 8080:8080 \
    -e KEYCLOAK_ADMIN='admin' \
    -e KEYCLOAK_ADMIN_PASSWORD='admin' \
    quay.io/keycloak/keycloak:19.0.3 \
    start-dev