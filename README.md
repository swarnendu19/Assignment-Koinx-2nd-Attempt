# Koinx Backend Intern Assignment: Crypto Transactions and Cryptocurrency Stats API

This project is a Node.js application that provides APIs for fetching cryptocurrency data like prices, market cap, 24-hour price change, and calculating the standard deviation of price for a given cryptocurrency. The data is fetched periodically using external APIs, and stored in a database for easy access.

## Public API on AWS 
```
http://ec2-16-171-162-206.eu-north-1.compute.amazonaws.com:5000/
```
or 
```
http://16.171.162.206:5000/
```

*If these links are not working, it means I have stopped the EC2 AWS instance due to billing issues.*  
Please contact me for that on my [LinkedIn](https://www.linkedin.com/in/swarnendu19)

### Test API
```
Task 1 API = http://ec2-16-171-162-206.eu-north-1.compute.amazonaws.com:5000/api/v1/stats?coin=bitcoin
Task 2 API = http://ec2-16-171-162-206.eu-north-1.compute.amazonaws.com:5000/api/v1/deviation?coin=bitcoin
```

## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Tasks](#tasks)
  - [Task 1: Fetch Cryptocurrency Stats](#task-1-fetch-cryptocurrency-stats)
  - [Task 2: Calculate Price Deviation](#task-2-calculate-price-deviation)

## Tech Stack

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based)
- [CoinGecko API](https://www.coingecko.com/en/api) for fetching cryptocurrency prices
- [Math.js](https://mathjs.org/) for calculating standard deviation

### Optional Task added
- [Docker](https://www.docker.com/) for containerization
- [AWS](https://aws.amazon.com/) for deployment

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/Assignment-Koinx.git
    cd Assignment-Koinx
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Environment Variables:**

   Create a `.env` file in the root directory and add the following environment variables:

    ```bash
    MONGODB_URL = mongodb+srv://swarnendu19:Swarnendu2003@assignment-koinx.yerb5.mongodb.net/?retryWrites=true&w=majority&appName=Assignment-Koinx
    COINGECKO_API_KEY = your api key
    PORT = 5000
    REDIS_URI =redis://localhost:6379
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

   The server will start running on `http://localhost:5000`.

## Setup using Docker 

  Pull the docker Image:
  ```
  docker pull swarnendu19/koinx
  ```
  Run the Image 
  ```
  docker run -d -p 5000:5000 swarnendu19/koinx
  ```

## Tasks

## Task 1: Background Job to Fetch Cryptocurrency Stats

### Objective
Implement a background job that fetches the following data for three cryptocurrencies: Bitcoin, Matic, and Ethereum:

- **Current Price in USD**
- **Market Cap in USD**
- **24-hour Price Change**

This background job will run once every 2 hours and store the data in the database.

# Task 2: Fetch Cryptocurrency Stats

This task involves building an API that returns the latest price, market cap, and 24-hour price change of a requested cryptocurrency.

- **Endpoint:** `GET api/v1/stats`
- **Parameters:**
  - `coin` (string): The cryptocurrency for which stats are required (bitcoin, ethereum, or dogecoin).
- **Response:**
  - `price` (number): The current price of the cryptocurrency.
  - `marketCap` (number): The market capitalization of the cryptocurrency.
  - `24hChange` (number): The percentage change in the price of the cryptocurrency in the last 24 hours.

### Example Request

```http
GET /api/v1/stats?coin=bitcoin
```

### Example Response

```json
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
```

# Task 2: Calculate Price Deviation

This task involves calculating the standard deviation of the price of a given cryptocurrency for the last 100 records stored in the database.

- **Endpoint:** `GET api/v1/deviation`
- **Parameters:**
  - `coin` (string): The cryptocurrency for which deviation needs to be calculated (bitcoin, ethereum, or dogecoin).
- **Response:**
  - `deviation` (number): The standard deviation of the price for the last 100 records.

### Example Request

```http
GET /api/v1/deviation?coin=bitcoin
```

### Example Response

```json
{
  "deviation": 4082.48
}
```

## Connect with me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/swarnendu19)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/swarnendu_dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/swarnendu19)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](dev.swarnendu.maity@gmail.com)
