var checkbox = document.querySelector("input[name=viewPass]");

checkbox.addEventListener('change', function() {
  var x = document.getElementById("password");
  if (this.checked) {
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } else {
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
});

chrome.storage.sync.get(['accPassword'], function(result) {
    if (!(typeof result.accPassword === 'undefined')) {
      document.getElementById('password').value = result.accPassword;
    }
});

document.getElementById("submit").addEventListener("click", submit);

function submit() {
  let password = document.getElementById("password").value;

  chrome.storage.sync.set({'accPassword': password});
  
  chrome.storage.sync.get(['accPassword'], function(result) {
    console.log(result.accPassword);
  });
}

document.getElementById("passwordForm").addEventListener("submit", function (e) {
    e.preventDefault();
});