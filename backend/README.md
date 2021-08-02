**create user**

```
curl -d '{"user": {"email": "user@example.com", "password": "123456", "password_confirmation": "123456"}}' -X POST -H 'Content-Type: application/json' http://localhost:3001/users
```

**login**

```
curl -i -d '{"user": {"email": "user@example.com", "password": "123456"}}' -X POST -H 'Content-Type: application/json' http://localhost:3001/users/sign_in
```

**home**
```
curl -i -X GET -H 'Content-Type: application/json' -H 'Authorization: Bearer <TOKEN>' http://localhost:3001/
```
