const {execSync} = require('child_process');

console.log('Running build-schema script...');

// Use environment variable VERSION, defaulting to "@next" if not set
const version = process.env.VERSION || '@next';
console.log(`Version set to ${version}`);

const dirs = [
  'application',
  'preApplication',
  'prototypeApplication',
  'postSubmissionApplication',
  'enforcement',
];
const types = [
  'Application',
  'PreApplication',
  'PrototypeApplication',
  'PostSubmissionApplication',
  'Enforcement',
];

dirs.forEach((dir, i) => {
  const type = types[i];
  console.log(`Building schema for ${type} from directory /${dir}`);

  // Build the command
  const cmd = [
    'pnpm ts-json-schema-generator',
    `--path "types/schemas/${dir}/*.ts"`,
    `--out "schemas/${dir}.json"`,
    `--type "${type}"`,
    `--id "${version}"`,
    '--no-top-ref',
  ].join(' ');

  try {
    execSync(cmd, {stdio: 'inherit', shell: true});
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Failed to build schema for ${type}:`, err.message);
      throw new Error(`Failed to build schema for ${type}: ${err.message}`);
    } else {
      console.error(`Failed to build schema for ${type}:`, err);
      throw new Error(`Failed to build schema for ${type}: ${String(err)}`);
    }
  }
});
