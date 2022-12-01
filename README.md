# PFP_NTIC

## API Server
The API server runs on port 8080

### Use the nodejs API server in build mode
```
cd nodejs_API
npm start
```

###  Use the nodejs API server in dev mode
```
cd nodejs_API
npm run start:dev
```

### List of endpoints
#### Pictogram routes
| Route | Endpoint | Request Type | Body |
| ------ | ------ | ------ | ------ |
| Pictograms | http://localhost:8080/pictograms | *GET* | N/A |
| Pictograms | http://localhost:8080/pictograms/:id | *GET* | N/A |
| Pictograms | http://localhost:8080/pictograms | *POST* | name, url |
| Pictograms | http://localhost:8080/pictograms/:id | *DELETE* | N/A |

## Expo Application
```
expo start
```