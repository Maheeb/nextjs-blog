import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
            <Head>
                <>
                    <meta charSet="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <title>Simple Blog</title>
                    <meta content="" name="description" />
                    <meta content="" name="keywords" />
                    {/* Favicons */}
                    <link href="/img/favicon.png" rel="icon" />
                    <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />
                    {/* Google Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Inter:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                        rel="stylesheet"
                    />
                    {/* Vendor CSS Files */}
                    <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                    <link
                        href="/vendor/bootstrap-icons/bootstrap-icons.css"
                        rel="stylesheet"
                    />
                    <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
                    <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                    <link href="/vendor/aos/aos.css" rel="stylesheet" />
                    {/* Template Main CSS Files */}
                    <link href="/css/variables.css" rel="stylesheet" />
                    <link href="/css/main.css" rel="stylesheet" />

                </>

            </Head>
      <body>
        <Main />
        <NextScript />
        <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i
            className="bi bi-arrow-up-short"></i></a>


        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="/vendor/aos/aos.js"></script>
        <script src="/vendor/php-email-form/validate.js"></script>

        <script src="/js/main.js"></script>
      </body>
    </Html>
  )
}
