---
layout: page
title: Software Fuzz Testing 
description: Building a custom fuzzer 
img: assets/img/fuzzing.png
importance: 3
category: fun 
---

Inspired by [mutation analysis](https://www.fuzzingbook.org/html/MutationAnalysis.html) and [coverage-guided](https://www.fuzzingbook.org/html/Coverage.html) fuzzing, I designed and developed a custom fuzzer (using Python) in this project. I built a fuzzing harnesses for two target applications and conducted a fuzzer performance study on the targets. The project also allowed exploring important testing techniques such as coverage-guided fuzzing, symbolic execution and concolic execution. 

Check out our [github](https://github.com/avanitanna/CS293C-fuzzing-project) repository for more details!

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/fuzzer-design.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A high level overview of the components of the fuzzer and their interactions.
</div>

