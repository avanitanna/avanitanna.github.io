---
layout: page
title: How should I pronounce your name?
description: Improving the performance of Voice Conversion technologies
img: assets/img/CollageWide.png
importance: 1
category: fun
#related_publications: tanna2023data
---

Has your name ever been mispronounced? This project started off with the motivation to pronounce names of students from all around the world correctly in the voice of an announcer at graduation ceremonies! Check out our [paper](https://arxiv.org/abs/2305.10684) and [github](https://github.com/avanitanna/RobustFragmentVC) repository for more details!

In this project, we explored SOTA Voice Conversion (VC) models such as fragmentvc and autovc and saw that they have impressive few shot conversion quality! However, when source or target speech accents, background noise conditions or mic characteristics differ from training, the performance of voice conversion is not guaranteed.

Its often challenging to document how to record quality utterances that'll work well with a VC model. In fact, we observed that sampling rate, noise/vol levels, mic quality, clarity of speech all had significant impact on the output. We also saw that so many real-world users were frustrated while trying to use VC models on their own data (as evidenced by the litany of github issues). Among others, one of the issues is that these VC models are overfit to clean VCTK data (native English speakers). 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/CollageWide.png" title="Litany of github issues" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Issues faced by real-world users.
</div>

In light of this and motivated by a real-world application, we introduce a robust variant of fragmentvc - where we adapt the model via data augmentation during the training (we augment CV data with accented english speech) and a noising module that adds randomly sampled effects to the data during feature extraction. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/PosterTechnique.png" title="Adapting FragmentVC" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Robust variant of FragmentVC.
</div>

In doing so, we see that it is in fact possible to adapt SOTA models easily and improve their performance and help real-world users with a better checkpoint that they can use on their own data. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/hist-avg-score-speaker-interspeech.png" title="Avg speakerwise score" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Speakerwise mean quality Likert score histograms for baselines and our robust models CV-finetune and CV-VCTK.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/bar-avg-score-std-all-interspeech.png" title="All speakers" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/bar-avg-score-std-gender-interspeech.png" title="Speakers grouped by gender" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/bar-avg-score-std-demogroups-interspeech.png" title="Speakers grouped by demographic group" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Average scores and standard deviations representing model performance of all 4 models across all annotators.
</div>

