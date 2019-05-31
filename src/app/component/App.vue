<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a href="/" class="navbar-brand">Prueba Inovatti</a>
    </nav>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="addPerson">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="person.name"
                    placeholder="Nombre"
                    class="form-control"
                  >
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    v-model="person.phone"
                    placeholder="Celular"
                    class="form-control"
                  >
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    v-model="person.email"
                    placeholder="Email"
                    class="form-control"
                  >
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="person.company"
                    placeholder="Empresa"
                    class="form-control"
                  >
                </div>
                <button class="btn btn-primary btn-block">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-md-7">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Celular</th>
                <th>Email</th>
                <th>Empresa</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="person of people" :key="person.id">
                <td>{{person.name}}</td>
                <td>{{person.phone}}</td>
                <td>{{person.email}}</td>
                <td>{{person.company}}</td>
                <td>
                  <button class="btn btn-danger" @click="deletePerson(person._id)">Borrar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Person {
  constructor(name, phone, email, company) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.company = company;
  }
}
export default {
  data() {
    return {
      person: new Person("", "", "", ""),
      people: []
    };
  },
  created() {
    this.getPeople();
  },
  methods: {
    addPerson() {
      fetch("/data", {
        method: "POST",
        body: JSON.stringify(this.person),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => this.getPeople());
      this.person = new Person("", "", "", "");
    },
    getPeople() {
      fetch("/data")
        .then(res => res.json())
        .then(data => (this.people = data));
    },
    deletePerson(id) {
      fetch("/data/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => this.getPeople());
    }
  }
};
</script>
