<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Posts Manager</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Symbol</th>
              <th>Market Values</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="com in companies" :key="com.id">
              <td>{{ com.id }}</td>
              <td>{{ com.name }}</td>
              <td>{{ com.description }}</td>
              <td>{{ com.symbol }}</td>
              <td>{{ com.market_values }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="populateCompanyToEdit(com)">Edit</a> -
                <a href="#" @click.prevent="deleteCompany(com.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model.id ? 'Edit Company ID#' + model.id : 'New Company')">
          <form @submit.prevent="saveCompany">
            <b-form-group label="Name">
              <b-form-input type="text" v-model="model.name"></b-form-input>
            </b-form-group>
            <b-form-group label="Description">
              <b-form-textarea rows="4" v-model="model.description"></b-form-textarea>
            </b-form-group>
            <b-form-group label="Symbol">
              <b-form-input type="text" v-model="model.symbol"></b-form-input>
            </b-form-group>
            <b-form-group label="Market values">
              <b-form-input type="text" v-model="model.market_values"></b-form-input>
            </b-form-group>
            <div>
              <b-btn type="submit" variant="success">Save Company!</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import api from '@/api'

export default {
data () {
    return {
    loading: false,
    companies: [],
    model: {}
}
},
async created () {
    this.refreshCompanies()
},
methods: {
    async refreshCompanies () {
        this.loading = true
        this.companies = await api.getCompanies()
        this.loading = false
    },
    async populateCompanyToEdit (company) {
        alert("hello")
        this.model = Object.assign({}, company)
    },
    async saveCompany () {
        if (this.model.id) {
            await api.updateCompany(this.model.id, this.model)
        } else {
            await api.createCompany(this.model)
        }
    this.model = {} // reset form
        await this.refreshCompanies()
    },
    async deleteCompany (id) {
    if (confirm('Are you sure you want to delete this company?')) {
        // if we are editing a company we deleted, remove it from the form
        if (this.model.id === id) {
            this.model = {}
        }
        await api.deleteCompany(id)
        await this.refreshCompanies()
    }
}
}
}
</script>
