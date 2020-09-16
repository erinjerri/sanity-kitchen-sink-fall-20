export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f628ca59448355d20ff9ea4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-fall-20-studio',
                  apiId: '6988e9bb-c331-4239-aabc-591e9328044f'
                },
                {
                  buildHookId: '5f628ca5085c9d59d98d74e4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-fall-20',
                  apiId: '8a31b6e5-009e-4952-a39e-0a5a3db1e0be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-kitchen-sink-fall-20',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-fall-20.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
