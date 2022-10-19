function getinput() {
    let pass = document.getElementById("password").value;
    let user = document.getElementById("username").value;
  
    let newuser = {
      username: user,
      password: pass,
    };
  
    let match = (toMatch) => toMatch.username === user
    if (accounts.some(match) === true) {
      return alert("choose another username");
    }
    accounts.push(newuser)
    return alert("account created")
  };
  document.getElementById("login");