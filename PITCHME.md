+++
## CI/CD Acceptance Tests
<img src="./assets/championJenkins.jpeg" width="300" height="200"/>
<img src="./assets/passingJenkins.jpg" width="300" height="100"/>
<img src="./assets/yay.jpg" width="300" height="200"/>
+++

### Acceptance Testing
<img src="./assets/oops.jpg" width="250" height="250"/>

  * Definition
    * Automated tests ensuring the environment/application is successfully built to allow for manual User Acceptance testing
    * Front end: UI Tests
    * Back end: Smoke/End-to-End Tests
+++

### Acceptance Testing with CI/CD
<img src="./assets/devilJenkins.png" width="200" height="200"/>

  * CI Pipeline
    * Acceptance tests come before deploying to UAT/TEST environment
      * Assuming DEV --> UAT --> PRE-PROD environments
    * Acceptance tests can be run in DEV environment
    * Ensures environment/application is up and running for manual user acceptance testing to be performed
    * Automated tests that ensure newly deployed code works in environment
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

### END-TO-END-TESTING
<img src="./assets/endToEnd.jpg" width="450" height="450"/>
  * Run after new code is deployed
  * Ensures data flows with the right values from beginning to end
+++

### END-TO-END-TESTING EXAMPLE
  * Trigger: Deployed application with code changes for calculations
  * Test: Test application initiates data flow with known data and expects correct values to appear at the end of the flow
  * Results:
    * Success: Data retrieved from end of flow has correct value
    * Failure: Data retrieved from end of flow has incorrect value or data does not appear at the end of the flow
+++

### Health Check
<img src="./assets/health_check.jpg" width="350" height="200"/>
  * An alternative to Smoke testing
  * Works well on web applications
    * Create a health route which calls each service and posts the status codes to the route.
    * Goes beyond acceptance test functionailty and lends itself well to application support
+++

### Health Check Example
  * Trigger: Deployed application
  * Test: Call the Endpoint and check the response is a 200
  * Results:
    * Success: All service calls return 200 - Results in App is HEALTHY!
    * Failure: If one service returns a 500 - App is SICK!
+++

### UI TESTING
<img src="./assets/dont-always-test.jpg" width="250" height="250" />
+++

### CI/CD Acceptance Tests
  * Questions?
