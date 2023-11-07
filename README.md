Certainly! Here is the entire content in a single Markdown document:

```markdown
# API Test Cases

## Register: [http://127.0.0.1:8000/api/register/](http://127.0.0.1:8000/api/register/)

**Request:**
```json
{
  "email": "example@pisb.com",
  "username": "exampleUsername",
  "password": "examplePass"
}
```

## Login: [http://127.0.0.1:8000/api/login/](http://127.0.0.1:8000/api/login/)

**Request:**
```json
{
  "username": "exampleUsername",
  "password": "examplePass"
}
```
OR
```json
{
  "username": "example@pisb.com",
  "password": "examplePass"
}
```

## Logout: [http://127.0.0.1:8000/api/logout/](http://127.0.0.1:8000/api/logout/)

**Request:**
```javascript
fetch('/path/to/user_logout/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Token ${authToken}`
  }
})
```

## Morse: [http://127.0.0.1:8000/api/morse/](http://127.0.0.1:8000/api/morse/)

**Request (Encode):**
```json
{
  "string": "HELLO WORLD",
  "type": "encode"
}
```

**Request (Decode):**
```json
{
  "string": ".... . .-.. .-.. ---   .-- --- .-. .-.. -..",
  "type": "decode"
}
```

## Inverse: [http://127.0.0.1:8000/api/inverse/](http://127.0.0.1:8000/api/inverse/)

**Request (Swap Case):**
```json
{
  "string": "Hello World"
}
```

## Case Switch: [http://127.0.0.1:8000/api/case_switch/](http://127.0.0.1:8000/api/case_switch/)

**Request (Camel Case):**
```json
{
  "string": "hello_world",
  "type": "camel case"
}
```

**Request (Snake Case):**
```json
{
  "string": "helloWorld",
  "type": "snake case"
}
```

## Caesar Cipher: [http://127.0.0.1:8000/api/ceaser/](http://127.0.0.1:8000/api/ceaser/)

**Request (Encode):**
```json
{
  "string": "HELLO",
  "key": 3,
  "type": "encode"
}
```

**Request (Decode):**
```json
{
  "string": "KHOOR",
  "key": 3,
  "type": "decode"
}
```

## Vigenere Cipher: [http://127.0.0.1:8000/api/vigenere/](http://127.0.0.1:8000/api/vigenere/)

**Request (Encode):**
```json
{
  "string": "HELLO",
  "key": "KEY",
  "type": "encode"
}
```

**Request (Decode):**
```json
{
  "string": "RIJVS",
  "key": "KEY",
  "type": "decode"
}
```

## Base64: [http://127.0.0.1:8000/api/base64/](http://127.0.0.1:8000/api/base64/)

**Request (Encode):**
```json
{
  "string": "Hello World",
  "type": "encode"
}
```

**Request (Decode):**
```json
{
  "string": "SGVsbG8gV29ybGQ=",
  "type": "decode"
}
```
