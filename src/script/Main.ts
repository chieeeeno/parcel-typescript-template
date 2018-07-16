import { SubModule } from './sub/SubModule'

class Main {
  constructor() {
    console.log('ssssMain Class Works!')
    new SubModule()
  }
}

window.addEventListener('DOMContentLoaded', () => new Main())
