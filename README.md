# @rrze/bumper
`@rrze/bumper` is a utility tool designed to increment the version number in a WordPress plugin or theme file. This tool is particularly useful for developers who need to manage versioning in their WordPress projects.

## Usage
You can use `@rrze/bumper` to increment the version number of your WordPress plugin or theme file. The version number can be incremented by `patch`, `minor`, or `major` levels. Here are some examples:

```bash
# Increment the patch version (e.g., from 1.0.0 to 1.0.1)
npx @rrze/bumper plugin.php patch

# Increment the minor version (e.g., from 1.0.0 to 1.1.0)
npx @rrze/bumper style.css minor

# Increment the major version (e.g., from 1.0.0 to 2.0.0)
npx @rrze/bumper plugin.php major
