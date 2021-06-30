import { Server, Model, RestSerializer, Response } from 'miragejs'

export function makeServer({ environment = 'staging' } = {}) {
  const server = new Server({
    environment,
    serializers: {
      application: RestSerializer
    },

    models: {
      users: Model,
    },

    seeds(server) {
      server.db.loadData({
        users: [
        ],
      })
    },

    routes() {
      this.namespace = 'https://agendame-mirage-js/api/'

      this.post(
        this.namespace + '/login',
        (schema, request) => {
          let attrs = JSON.parse(request.requestBody)
          attrs['token'] = 'qwerttyyuiopasddfg-5461352'
          return attrs.email === "admin@admin.com" && attrs.password === "admin" ? attrs : new Response(400, { some: 'header' }, { errors: ['name cannot be blank'] })
        },
        { timing: 2000 }
      )

      this.post(
        this.namespace + '/sign-up',
        (schema, request) => {
          let attrs = JSON.parse(request.requestBody)
          return attrs
        },
        { timing: 2000 }
      )


      this.passthrough('https://agendame-mirage-js/api/*')
    }
  })

  return server
}
