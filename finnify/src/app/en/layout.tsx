export default function LocaleLayout({children, params: {locale}}: {
    children: React.ReactNode,
    params : any,
  }) {
    return (
      <html lang={locale}>
        <body>{children}</body>
      </html>
    );
  }