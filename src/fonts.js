if (typeof document !== 'undefined' && 'fonts' in document) {
  const face = new FontFace('Mona Sans', 'url(./fonts/mona-sans-latin-variable.woff2)', {
    weight: '200 900',
    stretch: '100% 125%',
    display: 'swap'
  });

  document.fonts.add(face);
  face.load().catch(() => {});
}
