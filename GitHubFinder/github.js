class GitHub {
  constructor() {
    this.client_id = '4ec665e00ac7b7708b6d'
    this.client_secret = '1895d103af4a627428ca2168a51c3ecadff216fa'
    this.repos_count = 10
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()

    const repos = await reposResponse.json()

    return {
      profile, //same as profile: profile
      repos
    }
  }

}