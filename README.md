# Email Validator
A REST API to check for disposable and invalid emails

## How to add domains
How to add domains to the list of disposable (or non disposable) emails? Open an issue with the domains to be added

## Docs

### Main Route
[https://emailapi.onrender.com/](https://emailapi.onrender.com/)

### Validate an email
The route for validating an email is
`/api/validate`
This route only accepts the query param email, so it can be called like
`/api/validate?email=email@example.com`

### Check lists
The route for checking the lists of disposable or non disposable emails `/api/lists`