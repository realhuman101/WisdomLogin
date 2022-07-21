chrome.storage.sync.get(['accPassword'], function(result) {
    if (!(typeof result.accPassword === 'undefined')) {
      document.getElementById('password').value = result.accPassword;
    }
});

document.getElementById("submit").addEventListener("click", submit);

function submit() {
  let password = document.getElementById("password").value;
  
  chrome.storage.sync.get(['accPassword'], function(result) {
    if (typeof result.accPassword === "undefined") {
      chrome.storage.sync.set({'accPassword': password});
    } else {
      checkPasswordLock();
    }
  });
}

document.getElementById("passwordForm").addEventListener("submit", function (e) {
    e.preventDefault();
});

function checkPasswordLock() {
  document.getElementById("checkPasswordPopup").style.display = "block";
}

document.getElementById("passwordCheckSubmit").addEventListener("click", function () {
  var password = document.getElementById("passwordCheck").value;
  chrome.storage.sync.get('accPassword', function (result) {
    if (result.accPassword == password) {
      var newPass = document.getElementById("password").value;
      chrome.storage.sync.set({'accPassword': newPass});
      location.reload();
    } else {
      alert("Error - Wrong Password");
      location.reload();
    }
  });
});

window.addEventListener("click", function(e) {
  if (document.getElementById('checkPasswordPopup').style.display == 'block') {
    if (document.getElementById('checkPasswordPopup') == e.target){
      document.getElementById('checkPasswordPopup').style.display = 'none';
    }
  }
});