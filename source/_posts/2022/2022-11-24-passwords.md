---
title: Managing Passwords
tags:
  - Technology
---

Everyone knows to use a password manager, and to enable Two Factor Authentication (2FA) wherever possible. However, it is less obvious how to set things up so that you can 1. recover from losing every single device, and 2. ensure that emergency contacts are able to access your accounts, if needed.

**This is my current setup:**

- Passwords are stored in [Bitwarden](https://bitwarden.com/) (separate personal and work-related accounts). The Bitwarden accounts are all protected with 2FA, and, for convenience, can be unlocked with biometrics on all the devices I use.
- All 2FA codes are "stored" in [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2), on my phone.
- Designated emergency contacts can request access to my Bitwarden account, and will be granted access, provided I don't object within a certain time frame.
- Recovery codes for 2FA (along with the passwords for all my Bitwarden accounts) are stored in an encrypted [KeePassXC](https://keepassxc.org/) file, on my main laptop. The password to unlock this file is the only password I really need to remember (though it's also stored in Bitwarden, in case an emergency contact needs access to it). Copies of this file are kept on USB keys with my emergency contacts.


![](setup.png)

*Generated with [Sketchviz](https://sketchviz.com/)*
