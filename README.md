
## Run Locally

Clone the project

```bash
  git clone https://github.com/Jrendon2449/startales.git
```

Go to the project directory

```bash
  cd startales
```

Install dependencies

```bash
  npm install
```

### For running Front-end on localhost ONLY

```bash
npm run dev
```

### For running Node server through https

Generate OpenSSL certificate and key

```bash
    openssl genrsa -out localhost.key 2048
    openssl req -new -x509 -key localhost.key -out localhost.cert -days 365 -subj /CN=localhost
```

Start the server

```bash
  npm start
```

