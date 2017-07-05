+++
## CI/CD Acceptance Tests
<img src="./assets/championJenkins.jpeg" width="300" height="200"/>
<img src="./assets/passingJenkins.jpg" width="300" height="100"/>
<img src="./assets/yay.jpg" width="300" height="200"/>
+++

### Acceptance Testing with CI/CD
<img src="./assets/oops.jpg" width="250" height="250"/>
  * Automated tests ensuring the environment/application is successfully built to allow for manual User Acceptance testing
+++

### END-TO-END-TESTING
<img src="./assets/endToEnd.jpeg" width="350" height="200"/>
+++

### END-TO-END-TESTING EXAMPLE
  * Trigger: Deployed application with code changes for calculations
  * Test: Test application initiates data flow with known data and expects correct values to appear at the end of the flow
  * Results:
    * Success: Data retrieved from end of flow has correct value
    * Failure: Data retrieved from end of flow has incorrect value or data does not appear at the end of the flow
+++

### SMOKE TESTING
<img src="./assets/smoketest.jpg" width="250" height="250"/>
  * Run after deploying new apps/infrastructure
  * Ensures all back end services wire together successfully
+++

### SMOKE TEST EXAMPLE
  * Trigger: Deployed application with new database connection URL
  * Test: Test application runs and attempts to query database with JDBC template call
  * Results:
    * Success: Retrieves data from JDBC query - Environment is UP!
    * Failure: Connection refused - Environment is DOWN!
+++

### Health Check
<img src="./assets/health_check.jpg" width="350" height="200"/>
+++

### UI TESTING
<img src="./assets/dont-always-test.jpg" width="250" height="250" />
+++

### HOW DOES IT ALL LOOK ?
+++

### CI/CD Acceptance Tests
  * Questions / Feedback ?
