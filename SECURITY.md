# KARE SIS Native Security Baseline

The React Native client is a presentation layer and never a source of authorization. Student identity, attendance, grades, fee data, and permissions must be checked by the SIS server for every request.

## Client safeguards

This demo does not implement login and stores no token or student record. When production authentication is added, sessions must use an operating-system keychain or keystore library. Tokens must not be placed in AsyncStorage, application constants, source code, screenshots, analytics payloads, or logs. The Android manifest disables clear-text traffic through a network security configuration; APIs must use HTTPS with valid certificates.

## Required production controls

The backend should issue short-lived access tokens and rotate refresh tokens. Every API request must validate the authenticated student, their permitted role, and the specific record being requested. Use server-side input validation, rate limiting, audit logs, least-privilege database access, encrypted backups, and incident revocation procedures. Never rely on hidden navigation controls as a security boundary.
