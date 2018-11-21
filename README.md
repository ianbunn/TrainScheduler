# TrainScheduler

**Train Scheduler for UT Coding Bootcamp**

Train Scheduler app (app) that incorporates Firebase to host arrival and departure data. App uses Moment.js to retrieve and manipulate arrival and departure times. The app will provide up-to-date info about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

Requirements:

- User will be able to create trains on demand with the required parameter values below:
    - Train name
    - Destination
    - First train time (military time)
    - Frequency (minutes)
- Users will be able to read the persistent train schedule data from different IP connections
    - App will calculate when the next train will arrive, relative to the current time (updates every refresh)

Nice to have requirements:

- Update text in schedule for "minutes to arrival" and "next train time" every minute (without page refresh)
- Allow users to update train data on train schedule
- Allow users to delete train on train schedule
