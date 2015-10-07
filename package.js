Package.describe({
  name: 'rodcope1:sortable-light',
  version: '1.3.0',
  summary: 'Sortable without the extra meteor functions from rubaxa:sortable',
  git: 'https://github.com/rodcope1/meteor-sortable-light.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('lib/Sortable.js', 'client');
  api.export('Sortable', 'client');
});
