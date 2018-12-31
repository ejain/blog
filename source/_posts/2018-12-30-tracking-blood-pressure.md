---
title: Tracking Blood Pressure
tags:
  - Quantified Self
---

Blood pressure readings taken at my annual checkups (or prior to blood draws) have varied between perfectly good to borderline pre-hypertension over the past few years. This is likely just a case of [white coat hypertension](https://en.wikipedia.org/wiki/White_coat_hypertension), but there is also [masked hypertension](https://www.nature.com/articles/hr200763), where a person's blood pressure is even higher outside of the doctor's office... So I wanted to get an idea of what my blood pressure range is under normal conditions, how much it varies from day to day, and [what factors](https://www.adctoday.com/blog/why-my-blood-pressure-reading-so-high-10-factors-affect-bp-readings) affect my blood pressure readings.


What I did
----------

![Greater Goods blood pressure monitor](device.jpg)

To take my own blood pressure readings, I bought a [Greater Goods blood pressure monitor](https://greatergoods.com/products/0604) for $40. This device was rated good on accuracy, and supports exporting data in a spreadsheet via [an app](https://play.google.com/store/apps/details?id=com.dmdbrands.balancehealth).

Every morning for just over two months, after getting up and going through my usual morning routine (but before having breakfast), I took three consecutive blood pressure readings, about one minute apart.

On a few days I took additional readings to investigate factors that are know to influence blood pressure, and that might help explain the occasional, higher readings at the doctor's office.

To verify the accuracy of the blood pressure monitor, I brought the monitor to my next physical exam, where I took a single reading right after the physician's assistant had taken a reading with their more expensive device. The values matched almost exactly.

During the two months, there was no significant change in resting heart rate or blood pressure, body weight or composition, or activity levels.


What I learned
--------------

![](daily.png)

The "perfectly good" blood pressure readings were likely a better reflection of my typical blood pressure than the "borderline pre-hypertension" readings.

Doing three consecutive readings is probably overkill: If the first two readings are within a few points of each other (as they almost always were), the third reading could be skipped.

Short (<10 minute) **exercise sessions** increase blood pressure, but blood pressure is back to normal after relaxing for another 10 minutes.

Neither going to the gym nor hiking had an effect on the following day's blood pressure, but there was a small, negative correlation between **calories burned during the previous 7 days** and my blood pressure.

Small changes in posture like holding the arm at a wrong angle affect my blood pressure readings, as does going from being dehydrated to being **overhydrated**, having a **full bladder**, or being in a **cold room**. These factors can each account for discrepancies of up to 10mmHg or more.

Blood pressure readings were slightly higher when I got up **earlier in the morning**. I didn't take many readings throughout the day, but blood pressure appeared to be slightly elevated in the late afternoon and again in the evening, [as expected](https://hellenicjcardiol.org/archive/full_text/2012/6/2012_6_432.pdf).

I tried to **increase salt intake** for a week, but didn't see any effect. Had planned to add a tablespoon of salt each day, but ended up adding no more than a teaspoon. This doesn't mean that reducing my salt intake wouldn't lower my blood pressure, or that my blood pressure wouldn't rise if I continued on a high-salt diet for more than a week.

[Pulse pressure](https://www.ncbi.nlm.nih.gov/books/NBK482408/) has been proposed as an alternative measure of cardiovascular health. This measure correlated with systolic but not diastolic pressure. Neither systolic nor diastolic pressure were correlated with the heart rate (at rest).


What next
---------

I don't intend to continue taking daily blood pressure readings, but will continue to do so once a week or so, including before blood draws or other medical appointments.

I’ll share more detailed results at a [Quantified Self Seattle Meetup](https://www.meetup.com/Quantified-Self-Seattle/) next year.

You can find the Jupyter Notebook used to process the data [here](https://github.com/ejain/blog/blob/master/source/_posts/2018-12-30-tracking-blood-pressure/blood-pressure.ipynb).
