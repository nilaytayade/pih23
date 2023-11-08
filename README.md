![django_logo](https://res.cloudinary.com/dzhpx2alw/image/upload/v1699461167/django-logo-positive_exxstd.png)
## API Test Cases:


## Register: [http://127.0.0.1:8000/api/register/](http://127.0.0.1:8000/api/register/)

**Request:POST**
```json
{
  "email": "example@pisb.com",
  "username": "exampleUsername",
  "password": "example@Pass1"
}
```

## Login: [http://127.0.0.1:8000/api/login/](http://127.0.0.1:8000/api/login/)

**Request:POST**
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

**Request:POST**
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

**Request (Encode):POST**
```json
{
  "string": "HELLO WORLD",
  "type": "encode"
}
```

**Request (Decode):POST**
```json
{
  "string": ".... . .-.. .-.. ---   .-- --- .-. .-.. -..",
  "type": "decode"
}
```

## Inverse: [http://127.0.0.1:8000/api/inverse/](http://127.0.0.1:8000/api/inverse/)

**Request (Swap Case):POST**
```json
{
  "string": "Hello World"
}
```

## Case Switch: [http://127.0.0.1:8000/api/case_switch/](http://127.0.0.1:8000/api/case_switch/)

**Request (Camel Case):POST**
```json
{
  "string": "hello_world",
  "type": "camel case"
}
```

**Request (Snake Case):POST**
```json
{
  "string": "helloWorld",
  "type": "snake case"
}
```

## Caesar Cipher: [http://127.0.0.1:8000/api/ceaser/](http://127.0.0.1:8000/api/ceaser/)

**Request (Encode):POST**
```json
{
  "string": "HELLO",
  "key": 3,
  "type": "encode"
}
```

**Request (Decode):POST**
```json
{
  "string": "KHOOR",
  "key": 3,
  "type": "decode"
}
```

## Vigenere Cipher: [http://127.0.0.1:8000/api/vigenere/](http://127.0.0.1:8000/api/vigenere/)

**Request (Encode):POST**
```json
{
  "string": "HELLO",
  "key": "KEY",
  "type": "encode"
}
```

**Request (Decode):POST**
```json
{
  "string": "RIJVS",
  "key": "KEY",
  "type": "decode"
}
```

## Base64: [http://127.0.0.1:8000/api/base64/](http://127.0.0.1:8000/api/base64/)

**Request (Encode):POST**
```json
{
  "string": "Hello World",
  "type": "encode"
}
```

**Request (Decode):POST**
```json
{
  "string": "SGVsbG8gV29ybGQ=",
  "type": "decode"
}
```
