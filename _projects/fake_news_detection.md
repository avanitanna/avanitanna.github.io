---
layout: page
title: Fake News Detection 
description: Employing graph based machine learning for fake news detection
img: assets/img/graph-background.png
importance: 3
category: fun 
---

In the age of fake news and inspired by graph based machine learning techniques, in this project, I worked with propagation-based approaches and real-world data to help detect fake news. Check out our [github](https://github.com/avanitanna/fake-news-detection) repository for more details!

I constructed a new dataset based on the MuMiN dataset using Twitter API for tweet extraction. I also created an end-to-end data collection framework using Twitter API (v1 and v2 endpoints) that builds a graph structure for Graph Neural Network (GNN) models starting from any root tweets. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/graph-design.png" title="design" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    End-to-End data collection framework.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cascade.png" title="cascade" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Illustration of a cascade (used to construct the graph we use). A cascade refers to a news diffusion tree produced by a source tweet referencing a URL and all of its retweets. 
</div>

Then, I evaluated the performance of GNN models (employed in PyTorch) on multiple social media datasets. 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/auc.png" title="AUC" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    AUC for all models on each dataset using BERT features.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/accuracy.png" title="Accuracy" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Accuracy for all models on each dataset using BERT features.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/precision.png" title="Precision" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Precision for all models on each dataset using BERT features.
</div>