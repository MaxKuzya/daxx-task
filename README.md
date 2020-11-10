# daxx-task

[Github pages](https://maxkuzya.github.io/daxx-task)

### Scenario:
A customer should be able to log in on our website. (The actual Website is not needed.)
Therefore they receive a Magic Link after they commissioned an order via Email. With this
Magic Link they can set their initial password.

### Task:
Build the following Pages based on ReactJS and the usual related patterns:
- Account activation page (the page where a customer gets after opening the Magic Link
URL and where they can set their initial password)
- Login page (the page where customers can login after they defined their password
initially)
- Password Reset page (after entering their Email, the users should see a Magic Link
where they can change their password)
- Account Dashboard (basically an empty Page with "Welcome, <username>!" Header)

The access to the dashboard should be restricted, as long as they haven’t logged in properly.
The account activation for an active user should lead to the request to login (on the normal
Login Page)
