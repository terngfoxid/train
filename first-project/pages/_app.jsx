import '../styles/index.css';
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <style jsx global>{`
          body {
          background: #444444;
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  )
}