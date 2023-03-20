# setup-keycloak
This action sets up a Keycloak instance.

## Inputs

### `keycloak_version`

**Required** The installed version. Default `"latest"`.

### `keycloak_http_port`

**Optional** HTTP Port. Default `"8080"`.

### `keycloak_admin_user`

**Optional** Admin username. Default `"admin"`.

### `keycloak_admin_pass`

**Optional** Admin password. Default `"admin"`.


## Example usage

```yaml
uses: progi1984/setup-keycloak@master
with:
  keycloak_version: 19.0.3
  keycloak_http_port: 80
  keycloak_admin_user: admin_user
  keycloak_admin_pass: admin_pass
```