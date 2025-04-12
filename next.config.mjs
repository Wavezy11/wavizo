let userConfig = undefined;
try {
  userConfig = (await import('./v0-user-next.config.mjs')).default;
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
let nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

nextConfig = mergeConfig(nextConfig, userConfig);

export default nextConfig;

function mergeConfig(base, override) {
  if (!override) return base;

  const merged = { ...base };

  for (const key in override) {
    if (
      typeof base[key] === 'object' &&
      base[key] !== null &&
      !Array.isArray(base[key])
    ) {
      merged[key] = {
        ...base[key],
        ...override[key],
      };
    } else {
      merged[key] = override[key];
    }
  }

  return merged;
}
