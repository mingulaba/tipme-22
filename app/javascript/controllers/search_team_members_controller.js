import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-team-members"
export default class extends Controller {
  static targets = ['form', 'input', 'list']

  connect() {
    console.log(this.formTarget)
    console.log(this.inputTarget)
    console.log(this.listTarget)
    console.log("From search team member")
  }

  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, {headers: {"Accept": "text/plain"}})
      .then(response => response.text())
      .then((data) => {
        this.listTarget.innerHTML = data
    })
  }
}
