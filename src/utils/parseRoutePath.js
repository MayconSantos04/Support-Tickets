export function parseRoutePath(path) {
  const parseParametersRegex = /:([a-zA-Z]+)/g;

  const params = path.replaceAll(parseParametersRegex, "(?<$1>[a-z0-9_-]+)");

  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`);

  return pathRegex;
}
