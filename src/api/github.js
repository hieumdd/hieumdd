exports.githubAPIQuery = `
query GithubAPI ($github_login: String!) {
    user(login: $github_login) {
      repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          name
          updatedAt
          primaryLanguage {
            name
            color
          }
          id
          url
        }
      }
    }
  }
`;
