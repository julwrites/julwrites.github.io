export function getPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${normalizedPath}` : `${base}/${normalizedPath}`;
}

export function isActivePath(currentPath: string, targetPath: string, exact: boolean = false): boolean {
  const base = import.meta.env.BASE_URL;
  // Normalize current path by removing base
  let normalizedCurrent = currentPath;
  if (base !== '/' && currentPath.startsWith(base)) {
    normalizedCurrent = currentPath.slice(base.length);
  }

  if (!normalizedCurrent.startsWith('/')) {
    normalizedCurrent = '/' + normalizedCurrent;
  }

  // Normalize target path
  let normalizedTarget = targetPath;
  if (!normalizedTarget.startsWith('/')) {
    normalizedTarget = '/' + normalizedTarget;
  }

  if (exact) {
    // Exact match (e.g., Home '/'), ignoring trailing slashes unless it's just '/'
    if (normalizedTarget === '/') {
      return normalizedCurrent === '/';
    }
    return normalizedCurrent.replace(/\/$/, '') === normalizedTarget.replace(/\/$/, '');
  }

  // Starts with match (e.g., '/projects', '/blog')
  return normalizedCurrent.startsWith(normalizedTarget);
}
