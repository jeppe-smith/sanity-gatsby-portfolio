export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ed75ec8a3cd23874349944b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5qaj7j2p',
                  apiId: '2d0d4fef-0d06-46ca-86de-029f0938187c'
                },
                {
                  buildHookId: '5ed75ec8f9a9bcc0bf4320fd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2oufyfpb',
                  apiId: '90b807d0-1614-438f-8b90-07ee10e2fac3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeppe-smith/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2oufyfpb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
