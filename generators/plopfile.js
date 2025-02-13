module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'compenent name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
    ],
  });
};
