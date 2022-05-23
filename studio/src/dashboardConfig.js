export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "628c135f3fb7471158f834ed",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uhs6a347",
                  apiId: "ceea9f35-52ee-454a-af5a-df4335ffbd04",
                },
                {
                  buildHookId: "628c13605e5fb31311ac11cf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-h1o7cdg5",
                  apiId: "2484294d-79e1-496b-b796-63b31be15e13",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kalikolei/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-h1o7cdg5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
