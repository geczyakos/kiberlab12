import yaml from 'js-yaml';

// Imports a room's configuration (topic, permissions, integrations)
// from a YAML file, so admins can manage settings as code and check
// them into version control.

export function importRoomConfig(yamlString) {
  return yaml.load(yamlString, { schema: yaml.DEFAULT_FULL_SCHEMA });
}