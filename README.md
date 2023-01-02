# SmartFarmingIoT

This is my another personal project about React Native app, in conjunction with NodeMCU ESP32, allows users to monitor the condition of their plants. The app receives real-time data from the NodeMCU ESP32, which is equipped with sensors to measure various plant parameters such as temperature, humidity, and soil moisture. The app then displays this information to the user, allowing them to track the health of their plants and take necessary actions if any abnormalities are detected.

# Landing Page

<img src="https://user-images.githubusercontent.com/102477617/210206840-ab7d90b6-836e-4f24-9cce-d4815634a51d.png" width="220" height="500">

When user open the app. User will be directed to the landing page on the application where the user can choose to register first if he doesn't have an account and choose to go to the login page on the application if the user has done the previous registration process.

# Registration Page


<img src="https://user-images.githubusercontent.com/102477617/210207523-c71048ce-674a-45b3-99cb-06db1a808c3b.png" width="220" height="500">

If the user does not have an account the user must register first through the registration page as shown in the image above, where the user must fill in his identity in the form of first name, last name, telephone number, email and password

# Login Page

<img src="https://user-images.githubusercontent.com/102477617/210207816-d8c77b31-547e-4916-98d8-912083c30b24.png" width="220" height="500">
At the login page, the user is required to enter the email and password that was previously registered. If the login process is successful, the user can access the application and then carry out the monitoring process on the plant. If the login process fails, the user will remain on the login page to enter the email and password again. If the user forgets the password, then the user can choose the forgot password feature in the application which then the application will send a link to the user's email address to reset the password, after success the user can return to the login page to enter the that has been reseted.

# Home Page

<img src="https://user-images.githubusercontent.com/102477617/210210089-a8ade4eb-3304-4a01-87b6-bb3a83481ab3.png" width="220" height="500">

On the home page, the user can immediately see displays in the form of personal data information as well as information about plants on the available menus as shown in image, Users can select the available menus on the home page to monitor soil moisture in the available chili plants 3 plants. When the user presses one of these menus, the user will be redirected to the plant information page which contains humidity along with the humidity status of the plants that have been set by the system. Each plant has different or the same humidity. The humidity parameter is divided into 3, namely:

1. Normal Conditions
Conditions where the moisture in the soil is within normal limits and safe for plants.

2. Dry Conditions
Conditions where the humidity in the soil is below normal limits, if left unchecked, can damage plant growth.

3. Wet Conditions
Conditions where moisture in the soil is wet usually occur when the initial watering of plants. However, if left unchecked it will harm the plant.

These conditions can be monitored through 3 menus that appear on the home page, namely chili 1 to chili 3, each plant can have different conditions according to soil moisture conditions. as shown in the image below.

<img src="https://user-images.githubusercontent.com/102477617/210210165-1d43b443-6aa5-475e-ac74-79534e41c8df.jpg" width="220" height="500">|<img src="https://user-images.githubusercontent.com/102477617/210210173-83dc06a6-a956-4e93-9374-e5b53794b189.jpg" width="220" height="500">|<img src="https://user-images.githubusercontent.com/102477617/210210176-9e804eed-7ddd-4b36-aa34-d0565be812c4.jpg" width="220" height="500">

# Info Page

<img src="https://user-images.githubusercontent.com/102477617/210210392-788a2e6d-e4a1-41c1-8f9b-4c47c3e42f48.png" width="220" height="500">

On the "Info" menu page contained in the application as shown in image above the user can monitor the data contained on the sensor to ensure that the sensor displays data according to plant conditions. These sensors will display data in the form of water level, soil moisture, temperature, air humidity, and light intensity. The following is a picture of each menu on the info page.

<img src="https://user-images.githubusercontent.com/102477617/210210703-a5459b13-e0d3-457f-8a82-1f9be3e4fe54.png" width="220" height="500">|<img src="https://user-images.githubusercontent.com/102477617/210210708-27671f78-75e9-49ae-9dc2-f876c758d4ef.png" width="220" height="500">|<img src="https://user-images.githubusercontent.com/102477617/210210712-50fac1d9-efd3-4052-9ef5-abfc1250d37d.png" width="220" height="500">|<img src="https://user-images.githubusercontent.com/102477617/210210717-a5d31e61-89a7-4a07-8d2f-acafda2b5d83.png" width="220" height="500">|<img src="https://user-images.githubusercontent.com/102477617/210210722-eea7c2c6-890f-4bad-816d-bea6719c5237.png" width="220" height="500">

# Setting Page

<img src="https://user-images.githubusercontent.com/102477617/210211024-1899e030-93f2-44d1-baf3-16a978efb484.png" width="220" height="500">

This application also provides an application settings menu where it contains information about user data. In addition to viewing user data information, users can also update data information in the form of names, telephone numbers, and change profile photos. There is also a logout button to exit the application. As in the image above
The following is a picture of each menu on the settings page.

<img src="https://user-images.githubusercontent.com/102477617/210211347-81189c5d-94e7-4662-9866-ae31aabd6ba6.png" width="220" height="500">|<img src="https://user-images.githubusercontent.com/102477617/210211351-71d0a019-60f2-4d4a-b3be-a77180897bc9.png" width="220" height="500">

# Logout

when the user presses the logout button, the user session will expire and be returned to the home page

