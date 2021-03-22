document.querySelector('.button1').addEventListener('click', getText);
document.querySelector('.button2').addEventListener('click', getJSON);
document.querySelector('.button3').addEventListener('click', getAPIData);

function getText() {
  fetch('test.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(data){
      document.querySelector('.output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    });
}

function getJSON() {
  fetch('posts.json')
    .then(function(res){
      return res.json();
    })
    .then(function(posts){
      let postOutput = '';
      posts.forEach(function(post){
        postOutput += `
            <li>${post.title}</li>
        `
      });

      document.querySelector('.output').innerHTML = postOutput;
    })
    .catch(function(err){
      console.log(err);
    })
}

function getAPIData() {
  fetch('https://api.github.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(users){
      let userOutput = '';
      users.forEach(function(user){
        userOutput += `<li>${user.login}</li>`
      }); 

      document.querySelector('.output').innerHTML = userOutput;
    })
    .catch(function(err){
      console.log(err);
    });
}