class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">

        <div clas="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>

        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
      </div>  
    </div> 

    <h3 class="page-heading mb-3">Latest Repos:</h3>
    <div id="repos"></div>
    `
  }

  showRepos(repos) {
    let output = ''

    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          
          <div class="col-md-6">
            <a href="${repo.html_url}">${repo.name}</a>
          </div>

          <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div>

        </div>
      </div>     
      `
    });

    document.getElementById('repos').innerHTML = output

  }


  showAlert(message, className) {
    //clear remaining alert
    this.clearAlert()
    //sreate div
    const alertDiv = document.createElement('div')
    //add class
    alertDiv.className = className
    //add text
    alertDiv.appendChild(document.createTextNode(message))
    //get parent
    const container = document.querySelector('.searchContainer')
    //get search box
    const search = document.querySelector('.search')
    //insert alert
    container.insertBefore(alertDiv, search)

    //timeout after 2 sec
    setTimeout(() => {
      this.clearAlert()
    }, 2000);
  }


  clearAlert() {
    const currentAlert = document.querySelector('.alert')

    if (currentAlert) {
      currentAlert.remove()
    }
  }


  clearProfile() {
    this.profile.innerHTML = ''
  }




}