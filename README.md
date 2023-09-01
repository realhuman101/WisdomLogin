# WisdomLogin

> Clone of [LionelLogin](https://github.com/realhuman101/LionelLogin)

Essentially a quick password manager as a web browser extension *(works on Chrome and Firefox)* for [Wisdom](https://wisdom.wis.edu.hk/), with the added feature of directly signing in instantly upon loading the sign-in page of [Wisdom](https://wisdom.wis.edu.hk/).  

## Contents

- [WisdomLogin](#wisdomlogin)
	- [Contents](#contents)
	- [What it Does](#what-it-does)
	- [How it Works](#how-it-works)
	- [Safety Concerns](#safety-concerns)
	- [Bugs](#bugs)
	- [Installation](#installation)
		- [Download with Git](#download-with-git)
	- [Browser Information](#browser-information)

## What it Does

WisdomLogin will automatically login to [Wisdom](wisdom.wis.edu.hk/), given that you have inputted your credentials into its password manager, which is safely stored on [Chrome’s storage API](https://developer.chrome.com/docs/extensions/reference/storage/) or *(for Firefox users)* within the [browser's storage API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage). It will also be automatically sent to all devices already synced to your browser's account.  
  
*All data is deleted upon removing the extension.*

## How it Works

> Please note that all instructional links will be relocated later on, and will (for now) be related to LionelLogin instead of WisdomLogin. Please still follow these instructions as they are the same for both extensions.

If you need instructions on how to install the WisdomLogin extension, look at [WisdomLogin Instructions - Installation](https://docs.google.com/presentation/d/1VIXn9FJb83H6CQwr-JYIFJgz-z2UQoDg9Y4QCHWtGL0/edit?usp=sharing).  
If you want a better understanding of how to use the WisdomLogin extension/want to use its extra features, look at [WisdomLogin Instructions - Extra Steps](https://docs.google.com/presentation/d/1zxJBjksXeMD_YpHr4Lra-ENlIJDXK2RNx7RqnclwwDQ/edit?usp=sharing).

## Safety Concerns

All the code for this extension is open-sourced, on [Github](https://github.com/realhuman101/WisdomLogin) for you to access.  
Your password is not recorded anywhere, and is using [Chrome's](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)/[your browser's official storage API](https://developer.chrome.com/docs/extensions/reference/storage/) to store your password. This means that the password is being stored into your browser's account, and cannot be accessed by anyone without access to this account - including me.  
  
*If you feel like you found a security flaw within my program, please create a new issue on [Github](https://github.com/realhuman101/WisdomLogin/issues/new).*

## Bugs

If you locate any bugs or dangerous glitches, please report them by creating a new issue on [Github](https://github.com/realhuman101/WisdomLogin/issues/new) with details on reproducing, what it effects, and what version you found it on.

## Installation

The recommended method for installation would be to simply follow the instructions at [WisdomLogin Instructions - Chrome Direct Installation](https://github.com/realhuman101/projectDocs/tree/master/LionelLogin/installation/chrome/direct#lionellogin---chrome-direct-installation-instructions).

### Download with Git

Run the command `git clone https://github.com/realhuman101/WisdomLogin.git`

## Browser Information

Currently only two browsers have been tested and work with WisdomLogin, Chrome *(best support)* and Firefox.
