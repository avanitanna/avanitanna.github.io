---
layout: page
title: Scalable Social Network App
description: Implementing a scalable web service 
img: assets/img/app-features.png
importance: 2
category: fun
---

In this project, I was motivated to capture and learn about the workflows and important details that go into designing, developing, testing, scaling, and deploying a real world scalable web application. I was fortunate to be advised by industry expert and security engineer [Bryce Boe](https://www.linkedin.com/in/bryceboe/) and lead engineer [Nevena Golubovic](https://www.linkedin.com/in/nevenagolubovic/) in this project. Check out our [github](https://github.com/scalableinternetservicesarchive/Antisocial) repository for more details! 

I implemented a scalable web service (social network app) using Ruby on Rails and PostgreSQL DB hosted on AWS.

<div class="row">
   <div class="col-sm mt-3 mt-md-0">
       <img src="{{ '/assets/img/app-features.png' | relative_url }}" 
            alt="app features" 
            class="img-fluid rounded z-depth-1">
   </div>
</div>
<div class="caption">
   Flow Chart depicting all the app features, for instance once the user can either sign-up or sign-in (if already an existing user). Once they are authenticated they can view their profile, write posts, view and follow other users, and view and create posts.
</div>

I performed load testing on different workflows using Tsung (horizontal scaling, vertical scaling, pagination, etc.) to design and develop newer versions of our application to better deal with incrementing traffic and incrementally improved our application. 

<div class="row">
   <div class="center col-sm mt-3 mt-md-0">
       <img src="{{ '/assets/img/workflow-signin-get-posts.png' | relative_url }}" 
            alt="workflow" 
            class="img-fluid rounded z-depth-1">
   </div>
</div>
<div class="caption">
    Workflow diagram for user signing in and getting a list of posts. Note: 2s stands for wait time.
</div>

<div class="row">
   <div class="col-sm mt-3 mt-md-0">
       <img src="{{ '/assets/img/workflow2-results.png' | relative_url }}" 
            alt="results" 
            class="img-fluid rounded z-depth-1">
   </div>
</div>
<div class="caption">
     These figures show the performance of our application corresponding to workflow 2 after horizontal scaling across different instance deployments (4 medium vs 1 large). The first graph (first row, left) shows us the number of successful http requests (200 and 302s) for various instances.  The second graph (first row, right) shows the error rates of 500s and 502s per second. The third graph (second row) shows the mean duration of requests.
</div>

I also analyzed costs on all workflows to determine optimal hardware specification for each user arrival rate. 

<div class="row">
   <div class="col-sm mt-3 mt-md-0">
       <img src="{{ '/assets/img/cost-analysis.png' | relative_url }}" 
            alt="costs" 
            class="img-fluid rounded z-depth-1">
   </div>
</div>
<div class="caption">
     Cost analysis graph denoting the optimal hardware specification for each user arrival rate.
</div>

<!-- ---
layout: page
title: Scalable Social Network App
description: Implementing a scalable web service 
img: assets/img/app-features.png
importance: 2
category: fun
---

In this project, I was motivated to capture and learn about the workflows and important details that go into designing, developing, testing, scaling, and deploying a real world scalable web application. I was fortunate to be advised by industry expert and security engineer [Bryce Boe](https://www.linkedin.com/in/bryceboe/) and lead engineer [Nevena Golubovic](https://www.linkedin.com/in/nevenagolubovic/) in this project. Check out our [github](https://github.com/scalableinternetservicesarchive/Antisocial) repository for more details! 

I implemented a scalable web service (social network app) using Ruby on Rails and PostgreSQL DB hosted on AWS.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/app-features.png" title="app features" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Flow Chart depicting all the app features, for instance once the user can either sign-up or sign-in (if already an existing user). Once they are authenticated they can view their profile, write posts, view and follow other users, and view and create posts.
</div>

I performed load testing on different workflows using Tsung (horizontal scaling, vertical scaling, pagination, etc.) to design and develop newer versions of our application to better deal with incrementing traffic and incrementally improved our application. 

<div class="row">
    <div class="center col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/workflow-signin-get-posts.png" title="workflow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     Workflow diagram for user signing in and getting a list of posts. Note: 2s stands for wait time.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/workflow2-results.png" title="results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
      These figures show the performance of our application corresponding to workflow 2 after horizontal scaling across different instance deployments (4 medium vs 1 large). The first graph (first row, left) shows us the number of successful http requests (200 and 302s) for various instances.  The second graph (first row, right) shows the error rates of 500s and 502s per second. The third graph (second row) shows the mean duration of requests.
</div>

I also analyzed costs on all workflows to determine optimal hardware specification for each user arrival rate. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cost-analysis.png" title="costs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
      Cost analysis graph denoting the optimal hardware specification for each user arrival rate.
</div> -->
