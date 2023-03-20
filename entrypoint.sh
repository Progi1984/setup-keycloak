#!/usr/bin/env bash

exec docker run \
    -d \
    -v "/var/run/docker.sock":"/var/run/docker.sock" \
    -p $INPUT_KEYCLOAK_HTTP_PORT:8080 \
    -e KEYCLOAK_ADMIN='admin' \
    -e KEYCLOAK_ADMIN_PASSWORD='admin' \
    quay.io/keycloak/keycloak:$INPUT_KEYCLOAK_VERSION \
    start-dev