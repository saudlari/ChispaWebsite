export function optimizeGoogleImageUrl(url, options = {}) {
  const { width, quality = 75 } = options;
  
  if (!url || !url.includes('googleusercontent.com')) {
    return url;
  }
  if (url.includes('=w') || url.includes('=s')) {
    return url;
  }

  let optimizedUrl = url;
  
  if (width) {
    optimizedUrl += `=w${width}`;
  }
  
  if (!optimizedUrl.includes('=q')) {
    optimizedUrl += `-q${quality}`;
  }

  return optimizedUrl;
}

export function createOptimizedSrcset(baseUrl, widths = [400, 800, 1200]) {
  if (!baseUrl || !baseUrl.includes('googleusercontent.com')) {
    return baseUrl;
  }

  return widths
    .map(width => `${optimizeGoogleImageUrl(baseUrl, { width })} ${width}w`)
    .join(', ');
}

export function getOptimizedImageForSize(baseUrl, size = 'mobile') {
  const sizes = {
    mobile: 800,
    tablet: 1200,
    desktop: 1920,
  };

  return optimizeGoogleImageUrl(baseUrl, { 
    width: sizes[size] || sizes.mobile,
    quality: 75 
  });
}

