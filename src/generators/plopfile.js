export default function (plop) {
  /** @type {import('plop').NodePlopAPI} */
  // create your generators here
  plop.setGenerator("basics", {
    description: "this is a skeleton plopfile",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../components/feature/{{name}}/{{name}}.tsx",
        templateFile: "./component-template.tsx.hbs",
      },
      {
        type: "add",
        path: "../components/feature/{{name}}/index.tsx",
        templateFile: "./index-template.tsx.hbs",
      },
      {
        type: "add",
        path: "../components/feature/{{name}}/{{name}}.stories.tsx",
        templateFile: "./story-template.tsx.hbs",
      },
    ],
  });
}
