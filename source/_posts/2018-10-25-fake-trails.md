---
title: Fake Trails
tags:
  - Technology
---

One in five pictures I take while hiking are pictures of the trails themselves. Previously, I experimented with [using machine learning to automatically tag those pictures](https://github.com/ejain/n-of-1-ml/blob/master/transfer_learning.ipynb). After reading about how machine learning can be used not just for image classification, but also for [generating images](https://arxiv.org/abs/1511.06434), I was curious to see what would happen if I tried this approach on my pictures.

Here are a few randomly selected pictures of trails, out of the more than 5,000 pictures of trails I have taken over the past 10 years:

![actual trails](real_samples.png)

After a bit of number crunching with a _Deep Convolutional Generative Adversarial Network_ (where part of the network is trained to fake images, while the other part is simultaneously being trained to detect fake images), here are a few randomly generated trail pictures: 

![fake trails](fake_samples_epoch_275.png)

There is some blurriness and some distortions, but overall the results are pretty convincing! There are forest trails, trails through alpine meadows, rocky trails, and even a few snow-covered trails. But none of these trails exist in the real world.


Notes
-----

- I ended up using [PyTorch](https://pytorch.org/), which happened to have [suitable sample code](https://github.com/pytorch/examples/tree/master/dcgan). [Keras](https://keras.io/) (my go-to framework) turned out to be a bit too high-level to handle this kind of problem efficiently, and [Tensorflow](https://www.tensorflow.org/), being more low-level, would have required more code.

- Unfortunately, scaling up beyond 64x64 thumbnails to 128x128 or larger turns out to not be a simple matter of throwing more computing resources at the problem.

- The network was trained for 275 epochs (iterations through the entire data set). This animation shows how the generated images improved over time: 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/EtQbLnecW0g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

- The training was done on a fast machine with a GPU (obtained from [Amazon SageMaker](https://aws.amazon.com/sagemaker/) for a total cost of about $2); running the same code on my laptop would have taken days, rather than just under an hour.

- Found [this list of tips](https://github.com/soumith/ganhacks) that might further improve the results.
