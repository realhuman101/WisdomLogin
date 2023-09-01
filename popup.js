chrome.storage.sync.get(['locked'], function(result) {
  if (!(typeof result.locked === 'undefined')) {
    if (result.locked === true) {
      document.getElementById("login").style.display = 'none'
      document.getElementById("divideLogin").style.display = 'none'
    }
  }
});

chrome.storage.sync.get(['pass'], function(result) {
  if (!(typeof result.pass === 'undefined')) {
    document.getElementById('password').value = result.pass;
  }
});

chrome.storage.sync.get(['user'], function(result) {
  if (!(typeof result.user === 'undefined')) {
    document.getElementById('username').value = result.user;
  }
});

document.getElementById("submit").addEventListener("click", submit);

function submit() {
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;

  chrome.storage.sync.set({'pass': password});
  chrome.storage.sync.set({'user': username});
}

document.getElementById("goOptions").addEventListener("click", openOptions);

function openOptions() {
  chrome.runtime.openOptionsPage()
}

chrome.storage.sync.get('active', function(result) {
  if (typeof result.active === 'undefined') {
    changeCheckbox(true);
    chrome.storage.sync.set({'active': true});
  } else {
    chrome.storage.sync.get(['active'], function(data) {
      changeCheckbox(data.active);
    });
  }
});

const checkbox = document.getElementById('checkActive')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    chrome.storage.sync.set({'active': true});
    changeCheckbox(true);
  } else {
    chrome.storage.sync.set({'active': false});
    changeCheckbox(false);
  }
})

function changeCheckbox(value) { 
  document.getElementById("checkActive").checked = value;
  const checkbox = document.getElementById('checkActive');
  checkbox.checked = value;
}