const ms = require('ms');
async function main() {
  console.log('build start');
  console.log('build done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
