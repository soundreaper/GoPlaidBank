[![Go Report Card](https://goreportcard.com/badge/github.com/soundreaper/GoPlaidBank)](https://goreportcard.com/report/github.com/soundreaper/GoPlaidBank)
# Go Plaid Bank

## What is it?
Go Plaid Bank is a banking application that utilizes Golang, the Plaid API, and the web framework Gin:
 - [Golang](https://golang.org/)
 - [Plaid](https://plaid.com/)
 - [Gin Web Framework](https://github.com/gin-gonic/gin)

The frontend is from Plaid and their start-up guide. It is written in React and I modified it to my own needs.

## How to Install?
### Step 1:
Clone this repository.
```git
git clone https://github.com/soundreaper/GoPlaidBank.git
```
### Step 2:
Go into the new folder and create an .env file with the following. Get the client ID and secret key from the Plaid dashboard after creating an account.
```bash
# Get your Plaid API keys from the dashboard: https://dashboard.plaid.com/account/keys
PLAID_CLIENT_
PLAID_SECRET=
# Use 'sandbox' to test with fake credentials in Plaid's Sandbox environment
# Use 'development' to test with real credentials while developing
# Use 'production' to go live with real users
PLAID_ENV=sandbox
# PLAID_PRODUCTS is a comma-separated list of products to use when
# initializing Link, e.g. PLAID_PRODUCTS=auth,transactions.
# see https://plaid.com/docs/api/tokens/#link-token-create-request-products for a complete list
PLAID_PRODUCTS=transactions
# PLAID_COUNTRY_CODES is a comma-separated list of countries to use when
# initializing Link, e.g. PLAID_COUNTRY_CODES=US,CA.
# see https://plaid.com/docs/api/tokens/#link-token-create-request-country-codes for a complete list
PLAID_COUNTRY_CODES=US,CA
# Only required for OAuth:
# Set PLAID_REDIRECT_URI to 'http://localhost:3000'
# The OAuth redirect flow requires an endpoint on the developer's website
# that the bank website should redirect to. You will need to configure
# this redirect URI for your client ID through the Plaid developer dashboard
# at https://dashboard.plaid.com/team/api.
PLAID_REDIRECT_URI=
```

### Step 3:
We need to build the backend and then run the server. Run the following commands:
```bash
go build server.go
./server
```
### Step 4:
To run the frontend, open another terminal window and run the following commands:
```bash
npm install
npm start
# Go to http://localhost:3000/
```
### Step 5:
Click the button at the bottom and pick any banking institution. Use the following login:
```bash
username: user_good
password: pass_good
```

## Additional Information Goes Here
You should now be able to view all endpoints live from the backend using the test account!