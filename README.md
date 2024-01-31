# RKM_API
A supermarket API with some advanced features for both the user and admin side.

Technology Used - NodeJS, ExpressJS & MongoDB.
<ul>
  <li>👉 Login/Registration </li>
  <li>👉 Authentication and Authorization </li>
  <li>👉 Encryption and Decryption</li>
  <li>👉 JWT token</li>
  <li>👉 Various Product Filtration</li>
  <li>👉 Perform CRUD operations on products</li>
  <li>👉 Perform Fetch operation on users</li>
  <li>👉 Update User Details</li>
  <li>👉 Forgot/Reset Password, Update Password</li>
</ul>

### API Endpoints - Authorized & Authenticated

##### Product Filtration
View Products **Initial 30 Products Limit** 👉  https://rkmapi.azurewebsites.net
Specific Product 👉 https://rkmapi.azurewebsites.net/**productID**

##### Filtration Various Stages 👉 Sort Products - Limit Products - Filter Based on RatingAverage, Category, discounts, stocks, product name, price, Ascending, Descending Order and more...
Product Filter Various Stages **Multiple Filtration Endpoints Example** 👉 https://rkmapi.azurewebsites.net?category=beverages&ratingAverage=4&Stock[gt]=80&category=household&limit=50&sort=-currentPrice&sort=-title&sort=uniqueId&ratingAverage=3

Sorting 👉 https://rkmapi.azurewebsites.net?sort=-currentPrice  **LowtoHigh price products**
Limiting 👉 https://rkmapi.azurewebsites.net?limit=10  **Displays 10 products alone**
Category 👉 https://rkmapi.azurewebsites.net/category/grocery 
PriceFiltration 👉 https://rkmapi.azurewebsites.net/highToLow **LowToHigh - Current Price**

##### Login
https://rkmapi.azurewebsites.net/api/v1/signup

##### SignUp
https://rkmapi.azurewebsites.net/api/v1/login

##### Password Endpoints
https://rkmapi.azurewebsites.net/api/v1/forgotPassword
https://rkmapi.azurewebsites.net/api/v1/resetPassword/**WebToken**
https://rkmapi.azurewebsites.net/api/v1/updatePassword **Current, newPassword, confirmPassword**

##### Admin
Admin performs Add, Update, delete products, and view registered users.

Visit - https://rkmapi.azurewebsites.net/
